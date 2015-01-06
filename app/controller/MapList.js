Ext.define('WorkingWaterfronts.controller.MapList', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.MessageBox'
	],
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			homeButton			: 'MapListView #homeButton',
			poisList			: 'MapListView #poisList'
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

	onGoHome: function () {
		var ctrl = this;
		var transition = ctrl.getListView().transitions.back;
		Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);
	},

	onListSingleTap: function () {
		console.log('You touched the list.');
	},

	onListDoubleTap: function () {
		Ext.Msg.alert('Not ready for you yet, here!');
	},

	onListRefresh: function () {
		var gMap		= WorkingWaterfronts.gMap;
		var infowindow	= new google.maps.InfoWindow({
			content: 'things',
			disableAutoPan: false
		});
		var bounds		= new google.maps.LatLngBounds();
		var testPoint	= new google.maps.LatLng(45, -123);

		var marker		= new google.maps.Marker({
			map			: WorkingWaterfronts.gMap,
			animation	: null,
			// opacity	: opnum,
			// zIndex	: google.maps.Marker.MAX_ZINDEX + 1,
			icon		: '/images/red.png',
			position	: testPoint,
			clickable	: true
		});
		bounds.extend(testPoint);

		/*
		Developers beware: this is async because Google Maps does something
		internally that is also async. It leads to the first viewing of the
		map centering in the top, left corner instead of the middle. 100ms
		was tested on multiple throttling levels and works fine in Chrome.
		*/

		/* global setTimeout */
		setTimeout(function () {
			gMap.fitBounds(bounds);
			gMap.panToBounds(bounds);
        	if(gMap.getZoom() > 15) { gMap.setZoom(15); }
			if(gMap.getZoom() < 6) { Map.setZoom(6); }
		}, 100);

	}

});
