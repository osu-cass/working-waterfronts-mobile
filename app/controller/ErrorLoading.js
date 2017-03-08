Ext.define('WorkingWaterfronts.controller.ErrorLoading', {
  extend: 'Ext.app.Controller',
  requires: [],
  config: {
    refs: {
      homeView: 'HomeView',
      errorView: 'ErrorLoadingView'
    }
  },

  /* ------------------------------------------------------------------------
    UI Callback (Event) Functions
  ------------------------------------------------------------------------ */

  onStoreLoad: function (records, operation, success) {
    var _this = this;
    // There is only one store, so, whatever. Do this immediately.
    if (!success) {
      if (Ext.Viewport.getActiveItem() !== _this.getErrorView()) _this.goto();
      window.ga.trackException('Load Error', true);
    }
  },

  goto: function () {
    var _this = this;
    var transition = _this.getHomeView().transitions.back;
    Ext.Viewport.animateActiveItem(_this.getErrorView(), transition);
    ga.trackView('ErrorLoading');
  }

});
