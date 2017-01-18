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
		layout: 'vbox',
		items: [
			{
				xtype: 'toolbar',
				itemId: 'listPageToolbar',
				title: 'Waterfronts Tour',
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
				flex: 0.7,
				xtype: 'SeaGrantMap',
				itemId: 'maplist'
			},
			{
					xtype	: 'toolbar',
					title	: 'Choose a location:'
			},
			{
				flex		: 0.3,
				loadingText	: 'Please wait...',
				emptyText	: 'Nothing matched your search.',
				itemTpl		: '{name}',
				store		: 'PointsOfInterest',
				xtype		: 'list',
				ui			: 'normal',
				deferEmptyText: false,
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
