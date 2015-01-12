Ext.define('WorkingWaterfronts.controller.PointOfInterest', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			poiView				: 'PointOfInterestView',
			homeButton			: 'PointOfInterestView #homeButton',
		},
		control: {
			homeButton: {
				tap				: 'onGoHome'
			}
		}
	}
});
