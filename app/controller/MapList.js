Ext.define('WorkingWaterfronts.controller.MapList', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.MessageBox'
	],
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			poiView				: 'PointOfInterestView',
			homeButton			: 'MapListView #homeButton',
			poisList			: 'MapListView #poisList',
			mapList				: 'MapListView #maplist'
		},
		control: {
			homeButton: {
				tap				: 'onGoHome'
			},
			poisList: {
				itemsingletap	: 'onListSingleTap',
				itemdoubletap	: 'onListDoubleTap',
				refresh			: 'onListRefresh'
			}
		}
	},

	launch: function () {
		Ext.Viewport.on({
			// see Map.js
			'mapButton':	this.onMapButton
		});
	},

	onGoHome: function () {
		var ctrl = this;
		var transition = ctrl.getListView().transitions.back;
		Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);
	},

	onListSingleTap: function (list, index) {
		var markers = this.getMapList().markers;
		google.maps.event.trigger(markers[index], 'click');
	},

	onMapButton: function (id) {
		var ctrl = this;
		Ext.Msg.alert('id: ' + id);
		var transition = ctrl.getListView().transitions.forward;
		Ext.Viewport.animateActiveItem(ctrl.getPoiView(), transition);
	},

	onListDoubleTap: function () {
		var ctrl = this;
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		var currentSelection = ctrl.getPoisList().getSelection();
		if (currentSelection && currentSelection.length) {
			var index = store.indexOf(currentSelection[0]);
			ctrl.onMapButton(index);
		}
	},

	onListRefresh: function () {
		var ctrl = this;
		var seagrantmap = this.getMapList();
		// the List firing this event is bound in the view
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		// addPointsAndCenter requires this to work
		// see: view/Map.js
		var customMarkerArray = [];
		var currentSelection = ctrl.getPoisList().getSelection();
		// TODO keep current selection
		// TODO reduce geolocation update time

		function getClickFunction (record) {
			return function () {
				ctrl.getPoisList().select(record);
			};
		}

		function commonCloseFunction () {
			ctrl.getPoisList().deselectAll();
		}

		for (var i = 0; i < store.getCount(); i++) {
			var poiRecord = store.getAt(i);
			var markerData = {
				lat		: poiRecord.get('lat'),
				lng		: poiRecord.get('lng'),
				id		: i,
				text	: poiRecord.get('name'),
				click	: getClickFunction(poiRecord),
				close	: commonCloseFunction
			};
			customMarkerArray.push(markerData);
		}

		seagrantmap.addPoints(customMarkerArray);

		if (currentSelection && currentSelection.length) {
			var index = store.indexOf(currentSelection[0]);
			if (index < 0) return;
			ctrl.getPoisList().select(currentSelection[0]);
			ctrl.onListSingleTap(ctrl.getPoisList(), index);
		}

	}

});
