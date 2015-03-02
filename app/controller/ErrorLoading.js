Ext.define('WorkingWaterfronts.controller.ErrorLoading', {
	extend: 'Ext.app.Controller',
	requires: [],
	config: {
		refs: {
			homeView			: 'HomeView',
			errorView			: 'ErrorLoadingView',
			reload				: 'ErrorLoadingView #reloadButton'
		},
		control: {
			reload: {
				tap				: 'onReloadTap'
			}
		}
	},

	/* ------------------------------------------------------------------------
		UI Callback (Event) Functions
	------------------------------------------------------------------------ */

	onReloadTap: function () {

	},

	hasErrorState: function () {
		// Get counts of remote stores.
		var c1 = Ext.getStore('PointsOfInterest').getCount();
		return !c1;
	},

	onStoreLoad: function (records, operation, success) {
		var ctrl = this;
		var transition;

		// Test for failure or for empty stores.
		if (!success || ctrl.hasErrorState()) {

			if (Ext.Viewport.getActiveItem() !== ctrl.getErrorView()) {

				transition = ctrl.getHomeView().transitions.back;
				Ext.Viewport.animateActiveItem(ctrl.getErrorView(), transition);

				var loader = setInterval(function () {

					if (!ctrl.hasErrorState()) {
						clearInterval(loader);
					} else {
						console.log('Loading stores again...');
						Ext.getStore('PointsOfInterest').load();
					}

				}, 3000); // 3 second intervals
			}

		} else {

			if (Ext.Viewport.getActiveItem() !== ctrl.getHomeView()) {

				transition = ctrl.getErrorView().transitions.home;
				Ext.Viewport.animateActiveItem(ctrl.getHomeView(), transition);

			}

		}

	}

});
