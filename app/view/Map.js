Ext.define('WorkingWaterfronts.view.Map', {
	extend: 'Ext.Container',
	requires: ['Ext.Map'],
	xtype: 'SeaGrantMap',
	config: {
		layout: 'fit',
		items: [
			{
				xtype: 'map',
				mapOptions: {
					center: new google.maps.LatLng(43, -123),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					zoom: 13,
					// The point of this piece is so that the
					// points of interest are removed from the map.
					styles: [
						{
							featureType: 'administrative',
							elementType: 'labels',
							stylers: [
								{ visibility: 'off' }
							]
						},
						{
							featureType: 'landscape',
							elementType: 'labels',
							stylers: [
								{ visibility: 'off' }
							]
						},
						{
							featureType: 'poi',
							elementType: 'labels',
							stylers: [
								{ visibility: 'off' }
							]
						},
						{
							featureType: 'transit.station.airport',
							elementType: 'labels',
							stylers: [
								{ visibility: 'off' }
							]
						}
					]
				}
			}
		]
	},

	map: function () { return this.down('map').getMap(); },

	centerToBounds: function (bounds) {
		var gMap = this.map();

		/*
		Developers beware: this is async because Google Maps does something
		internally that is also async. It leads to the first viewing of the
		map centering in the top, left corner instead of the middle. 100ms
		was tested on multiple throttling levels in Chrome.
		*/

		/* global setTimeout */
		setTimeout(function () {
			gMap.fitBounds(bounds);
			gMap.panToBounds(bounds);
			if(gMap.getZoom() > 15) { gMap.setZoom(15); }
			if(gMap.getZoom() < 6) { gMap.setZoom(6); }
		}, 100);
	},

	center: function () {
		var self = this;
		var bounds = new google.maps.LatLngBounds();
		for (var k = 0; k < self.markers.length; k++) {
			bounds.extend(self.markers[k].position);
		}
		self.centerToBounds(bounds);
	},

	currentInfoWindow: null,
	markers: [],

	addPoint: function (point, id, text, onClick, onClose) {
		var self	= this;
		var gMap	= self.map();
		onClick		= onClick || function () {};

		var html	= '<button onclick="Ext.Viewport.fireEvent(\'mapButton\',\''+id+'\')">' + text + '</button>';

		var marker	= new google.maps.Marker({
			map				: gMap,
			animation		: null,
			// opacity		: opnum,
			// zIndex		: google.maps.Marker.MAX_ZINDEX + 1,
			icon			: '/images/red.png',
			position		: point,
			clickable		: true,
			info			: new google.maps.InfoWindow({
				content			: html,
				disableAutoPan	: false
			})
		});

		self.markers.push(marker);

		google.maps.event.addListener(marker, 'click', function () {
			if (self.currentInfoWindow) {
				self.currentInfoWindow.close();
			}
			self.currentInfoWindow = marker.info;
			self.currentInfoWindow.open(gMap, this);
			onClick();
		});

		google.maps.event.addListener(marker.info, 'closeclick', onClose);

	},

	addPoints: function (customArray) {
		var self = this;
		for (var i = 0; i < self.markers.length; i++) {
			self.markers[i].setMap(null);
		}
		self.markers = [];
		for (var k = 0; k < customArray.length; k++) {
			var lat		= customArray[k].lat;
			var lng		= customArray[k].lng;
			var id		= customArray[k].id;
			var text	= customArray[k].text;
			var click	= customArray[k].click;
			var close	= customArray[k].close;
			var point	= new google.maps.LatLng(lat, lng);
			self.addPoint(point, id, text, click, close);
		}
	}

});
