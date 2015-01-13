Ext.define('WorkingWaterfronts.controller.PointOfInterest', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.Label'
	],
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			poiView				: 'PointOfInterestView',
			homeButton			: 'PointOfInterestView #homeButton',
			listButton			: 'PointOfInterestView #listButton'
		},
		control: {
			homeButton: {
				tap				: 'onGoHome'
			},
			listButton: {
				tap				: 'onGoBack'
			}
		}
	},

	getView: function () {
		var ctrl = this;
		return ctrl.getPoiView();
	},

	onGoHome: function () {
		var ctrl = this;
		var transition = ctrl.getView().transitions.home;
		Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);
	},

	onGoBack: function () {
		var ctrl = this;
		var transition = ctrl.getView().transitions.back;
		Ext.Viewport.animateActiveItem(ctrl.getListView(), transition);
	}

});
