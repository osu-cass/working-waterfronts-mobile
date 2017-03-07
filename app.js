Ext.application({
  name: 'WorkingWaterfronts',

  requires: [
    'WorkingWaterfronts.util.API'
  ],

  models: [
    'PointOfInterest'
  ],

  stores: [
    'Distance',
    'PointsOfInterest'
  ],

  views: [
    'Home',
    'MapList',
    'PointOfInterest',
    'ErrorLoading'
  ],

  controllers: [
    'Home',
    'MapList',
    'PointOfInterest',
    'ErrorLoading'
  ],

  launch: function () {
    var _this = this;
    var Home, List;
    var errorCtrl = _this.getController('ErrorLoading');

    Ext.Viewport.add(Home = Ext.create('WorkingWaterfronts.view.Home'));
    Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.ErrorLoading'));

    if (typeof google === 'undefined') errorCtrl.onStoreLoad(null, null, false);

    Ext.Viewport.add(List = Ext.create('WorkingWaterfronts.view.MapList'));
    Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.PointOfInterest'));

    // Add error handlers to stores.
    Ext.getStore('PointsOfInterest').on('load', errorCtrl.onStoreLoad, errorCtrl);

    function onBackKeyDown (e) {
      e.preventDefault();
      var backAnimation = {type: 'slide', direction: 'right'};
      switch (Ext.Viewport.getActiveItem().xtype) {
        case WorkingWaterfronts.view.Home.xtype:
        case WorkingWaterfronts.view.ErrorLoading.xtype:
          navigator.app.exitApp();
          break;
        case WorkingWaterfronts.view.MapList.xtype:
          Ext.Viewport.animateActiveItem(Home, backAnimation);
          break;
        case WorkingWaterfronts.view.PointOfInterest.xtype:
          Ext.Viewport.animateActiveItem(List, backAnimation);
          break;
      }
    }

    // This is a hacky solution to a problem:
    // Cordova cannot handle inline hrefs to external pages.
    // This forces links to open with JS instead.
    Ext.Viewport.element.dom.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() !== 'a') { return; }
      var url = e.target.getAttribute('href');
      e.preventDefault();
      WorkingWaterfronts.util.Link.openLink(url);
    }, false);

    if (Ext.os.is('Android')) {
      document.addEventListener('backButton', Ext.bind(onBackKeyDown, _this), false);
    }

    setTimeout(function () {
      if (navigator.splashscreen) {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Splashscreen auto-hide is disabled
        navigator.splashscreen.hide();

        // Google Analytics: Working Waterfronts Beta
        if (typeof ga === 'undefined') errorCtrl.onStoreLoad(null, null, false);
        ga.startTrackerWithId('UA-92638695-3');

        _this.getController('Home').load();
      }
    }, 1000);
  }
});
