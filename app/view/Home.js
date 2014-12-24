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
				title: 'CHANGE ME',
				itemId: 'homePageToolbar',
				docked: 'top'
			},
			{
				xtype: 'panel',
				itemId: 'homePageText',
				items: [
				{
					xtype: 'panel',
					itemId: 'searchTotalTpl',
					// todo: update template
					data: {
						total: 4,
						where: 'in Newport',
						messages: {
							everywhere: 'on the Oregon Coast',
							inCity: 'in {0}'
						}
					},
					tpl: '</pre><div class="searchTotal">There are {total} places to see {where}.</div><pre>'
				},
				{
					xtype: 'panel',
					itemId: 'noResultsTpl',
					data: undefined,
					tpl: '</pre><div class="noResults">There are no matching locations.</div><pre>'
				},
				{
					xtype: 'panel',
					itemId: 'errorTpl',
					data: undefined,
					tpl: '</pre><div class="error">Unable to load data.<br>Check internet connection.</div><pre>'
				}]
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
					itemId: 'distance',
					label: 'within',
					labelWrap: true,
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
				delegate: '#userlocation',
				event: 'change',
				fn: 'onUseLocation'
			},
			{
				delegate: '#distance',
				event: 'change',
				fn: 'onDistance'
			},
			{
				delegate: '#selectlocation',
				event: 'change',
				fn: 'onSelectLocation'
			},
			{
				delegate: '#goButton',
				event: 'tap',
				fn: 'onGoButtonTap'
			}
		]
	},
	onUseLocation: function (toggle) {
		console.log('setUseLocation', toggle.getValue());
		this.fireEvent('setUseLocation', this, toggle);
	},
	onDistance: function (record) {
		console.log('setDistance', record.record.data.distance);
		this.fireEvent('setDistance', this, record);
	},
	onSelectLocation: function (record) {
		console.log('chosenLocation', record.record.data.name);
		this.fireEvent('chosenLocation', this, record);
	},
	onGoButtonTap: function () {
		console.log('viewGoCommand');
		this.fireEvent('viewGoCommand');
	}
});
