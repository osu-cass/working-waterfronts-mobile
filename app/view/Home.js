Ext.define('WorkingWaterfronts.view.Home', {
	extend: 'Ext.Panel',
	require: [
		'Ext.field.Toggle',
		'Ext.form.FieldSet',
		'Ext.field.Select'
	],
	xtype: 'HomeView',
	//alias: 'widget.home',
	//fullscreen: true,
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
				itemId: 'homePageGPSOptions',
				items: [{
					xtype: 'label',
					html: '<div class="helloLabel">Let\'s find some places to visit:</div>'
				},{
					xtype: 'togglefield',
					name: 'userlocation',
					label: 'Use my current locaton',
					labelWrap: true,
					itemId: 'userlocation'
				},{
					xtype: 'selectfield',
					itemId: 'selectdistance',
					label: 'Search within',
					labelWrap: true,
					disabled: true,
					displayField: 'distance',
					store: 'Distance',
					valueField: 'id'
				},{
					itemId: 'homePageGPSMessage',
					xtype: 'label',
					showAnimation: { type: 'slide', direction: 'down' },
					hideAnimation: { type: 'slideOut', direction: 'up' },
					hidden: true,
					html: '<div class="locateError">Unable to locate you!</div>'
				}]
			},
			{
				xtype: 'fieldset',
				items: [
					{
						itemId: 'searchSummaryTpl',
						data: {
							total		: '...',
							distance	: '...',
							tpls: {
								everywhere	: '<div class="searchTotal">There are {total} places to visit on the Oregon coast.</div>',
								nearby		: '<div class="searchTotal">There are {total} places to visit within {distance} miles.</div>',
								nowhere		: '<div class="searchTotal">There are no places matching your search.</div>'
							}
						},
						tpl: '<div class="searchTotal">Please wait...</div>'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'Find Locations',
						itemId: 'goButton',
						id: 'goBtn'
					}
				]
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
				delegate	: '#goButton',
				event		: 'tap',
				fn			: 'onGoButtonTap'
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
	},

	/* jshint unused:false */

	onSetUseLocation: function (toggle, newVal, oldVal, eOpts) {
		// triggers controller event with 1 or 0
		this.fireEvent('setUseLocation', newVal);
	},

	onSelectDistance: function (select, newVal, oldVal, eOpts) {
		this.fireEvent('onAny');
	},

	onGoButtonTap: function () {
		this.fireEvent('viewGoCommand');
	}
});
