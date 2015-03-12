Ext.define('WorkingWaterfronts.controller.PointOfInterest', {
	extend: 'Ext.app.Controller',
	requires: [
		'Ext.Label',
		'WorkingWaterfronts.util.Link'
	],
	config: {
		refs: {
			homeView			: 'HomeView',
			listView			: 'MapListView',
			poiView				: 'PointOfInterestView',
			poiViewInfo			: 'PointOfInterestView #infoText',
			homeButton			: 'PointOfInterestView #homeButton',
			listButton			: 'PointOfInterestView #listButton',
			navigateButton		: 'PointOfInterestView #navigateButton',
			categoryList		: 'PointOfInterestView #categoryList',
		},
		control: {
			homeButton: {
				tap				: 'onGoHome'
			},
			listButton: {
				tap				: 'onGoBack'
			},
			navigateButton: {
				tap				: 'onGoNavigate'
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
	},

	onGoNavigate: function () {
		var ctrl = this;
		var Link = WorkingWaterfronts.util.Link;
		var poi = ctrl.getPoiViewInfo().getData();
		Link.openNavigation(poi.lat, poi.lng);
	}

});
