Ext.define('WorkingWaterfronts.view.PointOfInterest', {
	extend		: 'Ext.Panel',
	xtype		: 'PointOfInterestView',
	config		: {
		items	: [
			{
				xtype: 'toolbar',
				itemId: 'poiViewToolbar',
				docked: 'top',
				items: [
					{
						xtype: 'button',
						ui: 'action',
						iconCls: 'home',
						itemId: 'homeButton'
					},
					{
						xtype: 'button',
						ui: 'action',
						iconCls: 'arrow_left',
						itemId: 'listButton'
					}
				]
			},
			{
				xtype: 'label',
				itemId: 'infoText',
				tpl:
					'<div>' +
						'<p>{name}</p>' +
						'<p>{description}</p>' +
					'</div>'
			}
		]
	},

	// These are not used by Sencha, but manually in the controller.
	transitions: {
		'back': {
			type		: 'slide',
			direction	: 'right'
		},
		'home': {
			type		: 'fade'
		}
	}

});
