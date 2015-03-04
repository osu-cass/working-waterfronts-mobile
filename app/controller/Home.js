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
			gpsMessage			: 'HomeView #homePageGPSMessage',
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
		var calledBack = false;
		if (toggleValue) {
			navigator.geolocation.getCurrentPosition(function (position) {

				WorkingWaterfronts.util.Search.options.position = position;
				homeCtrl.getGpsMessage().hide();
				homeCtrl.onAny();
				calledBack = true;

			}, function (PositionError) {

				console.log("PositionError: " + PositionError);
				homeCtrl.getUseLocationToggle().setValue(0);
				homeCtrl.getGpsMessage().hide();
				calledBack = true;

			}, {/* Optional geo options. */});

			setTimeout(function () {
				if (!WorkingWaterfronts.util.Search.options.position && !calledBack) {
					homeCtrl.getGpsMessage().show();
				}
			}, 6000);

		} else {
			// toggle off == stop geolocation and clear position
			WorkingWaterfronts.util.Search.options.position = null;
			Ext.device.Geolocation.clearWatch();
			homeCtrl.onAny();
		}

	},

	onViewGoCommand: function () {
		var ctrl = this;
		ctrl.onAny(); // promise an updated list
		var transition = ctrl.getHomeView().transitions.forward;
		ctrl.getMapList().center();
		Ext.Viewport.animateActiveItem(ctrl.getListView(), transition);
	},

	/* ------------------------------------------------------------------------
		Update UI to match search options
	------------------------------------------------------------------------ */

	init: function () {
		var Search = WorkingWaterfronts.util.Search;
		var store = Ext.data.StoreManager.lookup('PointsOfInterest');
		Search.applyFilterToStore(store);
	},

	launch: function () {
		var ctrl = this;
		Ext.StoreManager.lookup('PointsOfInterest')
			.on('load', ctrl.onAny, ctrl);
		ctrl.onAny();
	},

	onAny: function () {
		var homeCtrl = this;
		var store = Ext.data.StoreManager.lookup('PointsOfInterest');
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
