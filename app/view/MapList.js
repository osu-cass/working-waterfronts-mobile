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
						iconCls: 'home',
						itemId: 'homeButton'
					}
				]
			},
			{
				xtype: 'SeaGrantMap',
				itemId: 'maplist'
			},
			{
				config: {
					scrollable: {
						direction: 'vertical',
						directionLock: true
					},
				},
				loadingText	: 'Please wait...',
				emptyText	: 'Nothing matched your search.',
				itemTpl		: '{name}',
				store		: 'PointOfInterest',
				xtype		: 'list',
				itemId		: 'poisList',
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
