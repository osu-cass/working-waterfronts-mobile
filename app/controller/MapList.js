Ext.define('WorkingWaterfronts.controller.MapList', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			poiView				: 'PointOfInterestView',
			poiViewInfo			: 'PointOfInterestView #infoText',
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

	/* ------------------------------------------------------------------------
		Startup/Configuration
	------------------------------------------------------------------------ */

	// Necessary to link the global event fired by buttons embedded in
	// the map's marker InfoWindows. Ext.Viewport.fireEvent() is the
	// counter-part that enables this sort of event handling.
	// "mapButton" is a constant string given in view/Map.js
	launch: function () {
		var ctrl = this;
		Ext.Viewport.on('mapButton', ctrl.onMapButton, ctrl);
	},

	/* ------------------------------------------------------------------------
		Startup/Configuration
	------------------------------------------------------------------------ */

	// Returns this controller's matching view.
	getView: function () {
		var ctrl = this;
		return ctrl.getListView();
	},

	/* ------------------------------------------------------------------------
		UI Event Callbacks
	------------------------------------------------------------------------ */

	onGoHome: function () {
		var ctrl = this;
		var transition = ctrl.getView().transitions.back;
		Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);
	},

	// Simply makes the Seagrantmap open a different InfoWindow.
	onListSingleTap: function (list, index) {
		var markers = this.getMapList().markers;
		google.maps.event.trigger(markers[index], 'click');
	},

	// Calls onMapButton, first looking up the selected POI's store index.
	onListDoubleTap: function () {
		var ctrl = this;
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		var currentSelection = ctrl.getPoisList().getSelection();
		if (currentSelection && currentSelection.length) {
			var index = store.indexOf(currentSelection[0]);
			ctrl.onMapButton(index);
		}
	},

	// Called when a user clicks on the buttons embedded in the infowindows.
	// Or when a user double taps a list item.
	onMapButton: function (id) {
		var ctrl = this;
		var transition = ctrl.getView().transitions.forward;
		var store = Ext.data.StoreManager.lookup('PointOfInterest');
		ctrl.getPoiViewInfo().setData(store.getAt(id).data);
		Ext.Viewport.animateActiveItem(ctrl.getPoiView(), transition);
	},

	/* ------------------------------------------------------------------------
		Map Marker Controller (automated callback)
	------------------------------------------------------------------------ */

	/**
	 * This function is attached to the list, but is called each time the
	 * related store (PointOfInterest) filters or updates.
	 *
	 * See view/MapList.js for the store binding in the list.
	 *
	 * This causes markers to be updated and redrawn each time, keeping the
	 * map up-to-date with the filtered store at all times.
	 */
	onListRefresh: function () {
		var ctrl = this;
		var seagrantmap = this.getMapList();
		var store = Ext.data.StoreManager.lookup('PointOfInterest');

		// addPointsAndCenter requires this to work
		// see: view/Map.js
		var customMarkerArray = [];

		// Save the current selection to reselect it once updated.
		var currentSelection = ctrl.getPoisList().getSelection();

		// Build a custom click function for each marker.
		// YOU CANNOT CREATE FUNCTIONS WITHIN A LOOP'S SCOPE.
		// It selects the matching item in the list.
		// Needed for the loop below.
		function getClickFunction (record) {
			return function () {
				ctrl.getPoisList().select(record);
			};
		}

		// All marker info windows will deselect the list when closed.
		// Needed for the loop below.
		function commonCloseFunction () {
			ctrl.getPoisList().deselectAll();
		}

		// This converts the store items into an array
		// expected by view/Map.js addPoints() method.
		// See that file and method.
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

		// This will remove existing markers, and add new ones.
		// It does NOT zoom or pan the map at all.
		seagrantmap.addPoints(customMarkerArray);

		// Apply the saved selection, if applicable
		if (currentSelection && currentSelection.length) {
			var index = store.indexOf(currentSelection[0]);
			if (index < 0) return;
			ctrl.getPoisList().select(currentSelection[0]);
			ctrl.onListSingleTap(ctrl.getPoisList(), index);
		}

	}

});
