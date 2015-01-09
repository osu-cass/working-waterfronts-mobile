Ext.define('WorkingWaterfronts.controller.Home', {
	extend: 'Ext.app.Controller',
	requires: [
		'WorkingWaterfronts.util.Search',
		'WorkingWaterfronts.util.Messages',
		'Ext.device.Geolocation',
		'Ext.field.Select',
		'Ext.field.Toggle'
	],
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			useLocationToggle	: 'HomeView #userlocation',
			distanceSelect		: 'HomeView #selectdistance',
			locationSelect		: 'HomeView #selectlocation',
			goButton			: 'HomeView #goButton',
			searchSummaryTpl	: 'HomeView #searchSummaryTpl',
			mapList				: 'MapListView #maplist'
		},
		control: {
			homeView: {
				setUseLocation	: 'onSetUseLocation',
				onAny			: 'onAny',
				viewGoCommand	: 'onViewGoCommand'
			}
		}
	},

	/* ------------------------------------------------------------------------
		UI Callback (Event) Functions
	------------------------------------------------------------------------ */

	onSetUseLocation: function (toggleValue) {
		var homeCtrl = this;
		if (toggleValue) {
			// scope allows callback to use 'this' to get Home controller
			Ext.device.Geolocation.watchPosition({
			    frequency	: 60000,
			    scope		: homeCtrl,
			    callback	: homeCtrl.onGeolocationWatchPosition,
			    failure		: homeCtrl.onGeolocationWatchFailure,
			});
		} else {
			// toggle off == stop geolocation and clear position
			WorkingWaterfronts.util.Search.options.position = null;
			Ext.device.Geolocation.clearWatch();
		}
		homeCtrl.onAny();
	},

	onViewGoCommand: function () {
		var ctrl = this;
		ctrl.onAny(); // promise an updated list
		var transition = ctrl.getHomeView().transitions.forward;
		ctrl.getMapList().center();
		Ext.Viewport.animateActiveItem(ctrl.getListView(), transition);
	},

	/* ------------------------------------------------------------------------
		Other Callback Functions
	------------------------------------------------------------------------ */

	// Saves updated, assumed-valid position to Search util
	onGeolocationWatchPosition: function (position) {
		var homeCtrl = this; // see 'scope' from 'watchPosition'
		WorkingWaterfronts.util.Search.options.position = position;
		homeCtrl.onAny();
	},

	// Saves the lack of a position to Search util
	// Resets the toggle to off, see 'onSetUseLocation'
	onGeolocationWatchFailure: function () {
		var homeCtrl = this; // see 'scope' from 'watchPosition'
		WorkingWaterfronts.util.Messages.showLocationError();
		homeCtrl.getUseLocationToggle().setValue(0);
	},

	/* ------------------------------------------------------------------------
		Update UI to match search options
	------------------------------------------------------------------------ */

	init: function () {
		var Search = WorkingWaterfronts.util.Search;
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		Search.applyFilterToStore(store);
	},

	onAny: function () {
		var homeCtrl = this;
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		var Search = WorkingWaterfronts.util.Search;

		// Forcibly inject options over to the singleton.
		Search.options.location = homeCtrl.getLocationSelect().getRecord().data;
		Search.options.distance = homeCtrl.getDistanceSelect().getRecord().data;

		// Filter again with the existing filter function, see init()
		store.filter();

		// Update the select fields to match
		if (Search.options.position) {
			homeCtrl.getLocationSelect().disable();
			homeCtrl.getDistanceSelect().enable();
		} else {
			homeCtrl.getLocationSelect().enable();
			homeCtrl.getDistanceSelect().disable();
		}

		// Update the "summary" message.
		var data = homeCtrl.getSearchSummaryTpl().getData();
		var tpl = data.tpls.nowhere;
		data.total		= store.getCount();
		data.city		= Search.options.location.name;
		data.distance	= Search.options.distance.value;
		if (store.getCount() === 0) {
			// If no places, always say this.
			tpl = data.tpls.nowhere;
		} else if (Search.canFilterByDistance()) {
			// Distance filtering has preference
			tpl = data.tpls.nearby;
		} else if (Search.canFilterByLocation()) {
			// Location filtering is a fallback
			tpl = data.tpls.city;
		} else {
			// In the event of no filtering
			tpl = data.tpls.everywhere;
		}
		homeCtrl.getSearchSummaryTpl().setTpl(tpl);
		homeCtrl.getSearchSummaryTpl().setData(data);

	}

});
