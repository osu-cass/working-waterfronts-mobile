Ext.define('WorkingWaterfronts.controller.ErrorLoading', {
	extend: 'Ext.app.Controller',
	requires: [],
	config: {
		refs: {
			homeView			: 'HomeView',
			errorView			: 'ErrorLoadingView'
		}
	},

	/* ------------------------------------------------------------------------
		UI Callback (Event) Functions
	------------------------------------------------------------------------ */

	onStoreLoad: function (records, operation, success) {
		var ctrl = this;
		var transition;

		// There is only one store, so, whatever. Do this directly.
		if (!success) {

			if (Ext.Viewport.getActiveItem() !== ctrl.getErrorView()) {
				transition = ctrl.getHomeView().transitions.back;
				Ext.Viewport.animateActiveItem(ctrl.getErrorView(), transition);
			}

		}

	}

});
