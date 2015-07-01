Ext.define('WorkingWaterfronts.view.MapList', {
	extend: 'Ext.Panel',
	requires: [
		'Ext.form.FieldSet',
		'Ext.TabPanel',
		'Ext.dataview.List',
		'WorkingWaterfronts.view.Map'
	],
	xtype: 'MapListView',
	config: {
		layout: 'fit',
		items: [
			{
				xtype: 'toolbar',
				itemId: 'listPageToolbar',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						ui: 'action',
						iconCls: 'search',
						itemId: 'homeButton'
					}
				]
			},
			{
				xtype: 'SeaGrantMap',
				itemId: 'maplist'
			},
			{
					xtype	: 'label',
					html	: '<div>Choose a location:</div>',
					id		: 'listLabel'
			},
			{
				loadingText	: 'Please wait...',
				emptyText	: 'Nothing matched your search.',
				itemTpl		: '{name}',
				store		: 'PointsOfInterest',
				xtype		: 'list',
				ui			: 'normal',
				pinHeaders	: false,
				itemId		: 'poisList',
				id			: 'poisList',
				onItemDisclosure: true
			}
		]
	},

	// These are not used by Sencha, but manually in the controller.
	transitions: {
		'back': {
			type		: 'slide',
			direction	: 'right'
		},
		'forward': {
			type		: 'slide',
			direction	: 'left'
		}
	}

});
