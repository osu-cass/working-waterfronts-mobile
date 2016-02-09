/*
	This file is generated and updated by Sencha Cmd. You can edit this file as
	needed for your application, but these edits will have to be merged by
	Sencha Cmd when it performs code generation tasks such as generating new
	models, controllers or views and when running 'sencha app upgrade'.

	Ideally changes to this file would be limited and most work would be done
	in other places (such as Controllers). If Sencha Cmd cannot merge your
	changes and its generated code, it will produce a 'merge conflict' that you
	will need to resolve manually.
*/

Ext.Loader.setConfig({
	enabled: true,
	disableCaching: false,
	paths: {
		Ext: './touch/src',
		WorkingWaterfronts: './app'
	}
});

Ext.application({
	name		: 'WorkingWaterfronts',
	models		: ['Locations', 'PointOfInterest'],
	stores		: ['Location', 'Distance', 'PointsOfInterest'],
	views		: ['Home', 'MapList', 'PointOfInterest', 'ErrorLoading'],
	controllers	: ['Home', 'MapList', 'PointOfInterest', 'ErrorLoading'],

	launch: function() {

		var Home, List;
		var errorCtrl = this.getController('ErrorLoading');

		Ext.Viewport.add(Home = Ext.create('WorkingWaterfronts.view.Home'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.ErrorLoading'));
		if (!window.google) errorCtrl.onStoreLoad(null, null, false);
		Ext.Viewport.add(List = Ext.create('WorkingWaterfronts.view.MapList'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.PointOfInterest'));

		// Add error handlers to stores.
		Ext.getStore('PointsOfInterest').on('load', errorCtrl.onStoreLoad, errorCtrl);

		function onBackKeyDown (e) {
			e.preventDefault();
			var backAnimation = {type:'slide',direction:'right'};
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
			document.addEventListener('backButton', Ext.bind(onBackKeyDown, this), false);
		}

		setTimeout(function () {
			if (navigator.splashscreen) {
				navigator.splashscreen.hide();
			}
		}, 1000);
	}

});
