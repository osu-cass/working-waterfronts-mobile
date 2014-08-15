Ext.define('SeaGrant_Proto.view.Detail', {
	extend: 'Ext.Panel',
	requires: ['Ext.MessageBox', 'Ext.dataview.List'],
	alias: 'widget.detail',
	fullscreen: true,
	config: {
		layout: {
			type: 'fit'
		},
		items: [
			{
				xtype: 'toolbar',
				// title: 'Detail Page',
				itemId: 'detailPageToolbar',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						ui: 'action',
						text: 'back',
						itemId: 'backListButton'
					},
					{
						xtype: 'button',
						ui: 'action',
						text: 'Info',
						itemId: 'infoButton'
					}
				]
			},			
			{
				config: {
					scrollable: {
						direction: 'verticle',
						directionLock: true
					}
				},
				xtype: 'list',
				store: 'Info',
				itemId: 'Dpagelist',
				loadingText: 'Loading Notes ...',
				emptyText: '</pre><div class="\&quot;notes-list-empty-text\&quot;">No notes found.</div><pre>',
				itemTpl: '</pre><div class="list-item-title">{products}</div><div class="list-item-Latlng">{Latlng}</div><pre>'
			}
		],
		listeners: [
			{
				delegate: '#backListButton',
				event: 'tap',
				fn: 'onBackButtonTap'
			},
			{
				delegate: '#infoButton',
				event: 'tap',
				fn: 'onInfoButtonTap'
			},
			{
				delegate: '#Dpagelist',
				event: 'itemtap',
				fn: 'onDpagelistDisclose'
			}
		]
	},
	onBackButtonTap: function(){
		console.log('onBackButtonTap');
		this.fireEvent('viewBackListCommand', this);
	},
	onInfoButtonTap: function(){
		console.log('onInfoButtonTap');
		this.fireEvent('viewInfoCommand', this);
	},
	onDpagelistDisclose: function(list, record, target, index, evt, options){
		console.log('viewDpageListItemCommand');
		this.fireEvent('viewDpageListItemCommand', this, record, index);
	}
});