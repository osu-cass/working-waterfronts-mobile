Ext.define('WorkingWaterfronts.controller.Home', {
	extend: 'Ext.app.Controller',
	requires: [
		'WorkingWaterfronts.util.Search',
		'WorkingWaterfronts.util.Messages',
		'Ext.device.Geolocation'
	],
	config: {
		refs: {
			homeView: 'home',
			useLocationToggle: '#userlocation',
			distanceSelect: '#selectdistance',
			locationSelect: '#selectlocation'
		},
		control: {
			homeView: {
				setUseLocation	: 'onSetUseLocation',
				setDistance		: 'onSetDistance',
				chosenLocation	: 'onChooseLocation',
				viewGoCommand	: 'onViewGoCommand'
			}
		}
	},
	slideLeftTransition: {
		type		: 'slide',
		direction	: 'left'
	},
	slideRightTransition: {
		type		: 'slide',
		direction	: 'right'
	},

	/* ------------------------------------------------------------------------
		UI Callback (Event) Functions
	------------------------------------------------------------------------ */

	/* jshint unused:false */

	onSetUseLocation: function (home, toggle, newValue, oldValue, eOpts) {
		var homeCtrl = this;
		if (newValue) {
			// toggle on == start geolocation
			homeCtrl.getLocationSelect().disable();
			homeCtrl.getDistanceSelect().enable();
			// scope allows callback to use 'this' to get Home controller
			Ext.device.Geolocation.watchPosition({
			    frequency	: 3000,
			    scope		: homeCtrl,
			    callback	: homeCtrl.onGeolocationWatchPosition,
			    failure		: homeCtrl.onGeolocationWatchFailure,
			});
		} else {
			// toggle off == stop geolocation and clear position
			homeCtrl.getLocationSelect().enable();
			homeCtrl.getDistanceSelect().disable();
			Ext.device.Geolocation.clearWatch();
			WorkingWaterfronts.util.Search.options.position = null;
		}
	},

	/* jshint unused:true */

	/* ------------------------------------------------------------------------
		Other Callback Functions
	------------------------------------------------------------------------ */

	// Saves updated, assumed-valid position to Search util
	onGeolocationWatchPosition: function (position) {
		console.log('saving position:', position.coords);
		WorkingWaterfronts.util.Search.options.position = position;
	},

	// Saves the lack of a position to Search util
	// Resets the toggle to off, see 'onSetUseLocation'
	onGeolocationWatchFailure: function () {
		var homeCtrl = this; // see 'scope' from 'watchPosition'
		WorkingWaterfronts.util.Messages.showLocationError();
		WorkingWaterfronts.util.Search.options.position = null;
		homeCtrl.getUseLocationToggle().setValue(0);
	}

});
