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
	enabled:true,
	disableCaching: false,
	paths: {
		Ext: './touch/src',
		WorkingWaterfronts: './app'
	}
});

Ext.application({
	name		: 'WorkingWaterfronts',
	models		: ['Locations', 'PointsOfInterest'],
	stores		: ['Location', 'Distance', 'PointOfInterest'],
	views		: ['Home', 'MapList', 'PointOfInterest'],
	controllers	: ['Home', 'MapList', 'PointOfInterest'],

	launch: function() {
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.Home'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.MapList'));
		Ext.Viewport.add(Ext.create('WorkingWaterfronts.view.PointOfInterest'));
		// todo: add detail for point view
	},
});
