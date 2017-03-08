Ext.define('WorkingWaterfronts.controller.PointOfInterest', {
  extend: 'Ext.app.Controller',
  requires: [
    'Ext.Label',
    'WorkingWaterfronts.util.Link'
  ],
  config: {
    refs: {
      homeView: 'HomeView',
      listView: 'MapListView',
      poiView: 'PointOfInterestView',
      poiFieldTitle: 'PointOfInterestView #poiFieldTitle',
      homeButton: 'PointOfInterestView #homeButton',
      listButton: 'PointOfInterestView #listButton',
      navigateButton: 'PointOfInterestView #navigateButton',
      categoryList: 'PointOfInterestView #categoryList'
    },
    control: {
      homeButton: {
        tap: 'onGoHome'
      },
      listButton: {
        tap: 'onGoBack'
      },
      navigateButton: {
        tap: 'onGoNavigate'
      }
    }
  },

  load: function (name) {
    ga.trackView('PointOfInterest: ' + name);
  },

  // TODO only used for transition gathering
  getView: function () {
    var ctrl = this;
    return ctrl.getPoiView();
  },

  onGoHome: function () {
    var ctrl = this;
    var transition = ctrl.getView().transitions.home;
    Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);
    ctrl.getApplication().getController('Home').load();
  },

  onGoBack: function () {
    var ctrl = this;
    var transition = ctrl.getView().transitions.back;
    Ext.Viewport.animateActiveItem(ctrl.getListView(), transition);
    ctrl.getApplication().getController('MapList').load();
  },

  onGoNavigate: function () {
    var ctrl = this;
    var Link = WorkingWaterfronts.util.Link;
    // The Title data will always be set.
    var poi = ctrl.getPoiFieldTitle().getData();
    ga.trackEvent('Open Map', poi.name);
    if (poi.street) {
      Link.openAddressNavigation(poi.street, poi.city, poi.state, poi.zip);
    } else {
      Link.openNavigation(poi.lat, poi.lng);
    }
  }

});
