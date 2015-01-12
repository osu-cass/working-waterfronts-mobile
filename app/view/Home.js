Ext.define('WorkingWaterfronts.view.Home', {
	extend: 'Ext.Panel',
	require: [
		'Ext.field.Toggle',
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'WorkingWaterfronts.view.Map'
	],
	// fullscreen: true,
	xtype: 'Home',
	alias: 'widget.home',
	config: {
		items: [
			{
				xtype: 'toolbar',
				title: 'Working Waterfronts',
				itemId: 'homePageToolbar',
				docked: 'top'
			},
			{
				xtype: 'fieldset',
				itemId: 'searchSummaryTpl',
				data: {
					total		: '...',
					city		: '...',
					distance	: '...',
					tpls: {
						everywhere	: '<div class="searchTotal">There are {total} places to see on the Oregon coast.</div>',
						city		: '<div class="searchTotal">There are {total} places to see in {city}.</div>',
						nearby		: '<div class="searchTotal">There are {total} places to see within {distance} miles.</div>',
						nowhere		: '<div class="searchTotal">There are no places matching your search.</div>'
					}
				},
				tpl: '<div class="searchTotal">Please wait...</div>',
			},
			{
				xtype: 'fieldset',
				itemId: 'homePageGPSOptions',
				items: [{
					xtype: 'togglefield',
					name: 'userlocation',
					label: 'Use Current Locaton',
					labelWrap: true,
					itemId: 'userlocation'
				},
				{
					xtype: 'selectfield',
					itemId: 'selectdistance',
					label: 'Range',
					labelWrap: true,
					disabled: true,
					displayField: 'distance',
					store: 'Distance',
					valueField: 'id'
				}]
			},
			{
				xtype: 'fieldset',
				itemId: 'homePageOtherOptions',
				items: [{
					xtype: 'selectfield',
					itemId: 'selectlocation',
					label: 'Location',
					labelWrap: true,
					displayField: 'name',
					store: 'Location',
					valueField: 'location'
				}]
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype: 'button',
					ui: 'action',
					text: 'Go',
					itemId: 'goButton'
				}]
			}
		],
		listeners: [
			{
				delegate	: '#userlocation',
				event		: 'change',
				fn			: 'onSetUseLocation'
			},
			{
				delegate	: '#selectdistance',
				event		: 'change',
				fn			: 'onSelectDistance'
			},
			{
				delegate	: '#selectlocation',
				event		: 'change',
				fn			: 'onSelectLocation'
			},
			{
				delegate	: '#goButton',
				event		: 'tap',
				fn			: 'onGoButtonTap'
			}
		]
	},

	/* jshint unused:false */

	onSetUseLocation: function (toggle, newVal, oldVal, eOpts) {
		// triggers controller event with 1 or 0
		this.fireEvent('setUseLocation', newVal);
	},

	onSelectDistance: function (select, newVal, oldVal, eOpts) {
		this.fireEvent('onAny');
	},

	onSelectLocation: function (select, newVal, oldVal, eOpts) {
		this.fireEvent('onAny');
	},

	onGoButtonTap: function () {
		this.fireEvent('viewGoCommand');
	}
});
