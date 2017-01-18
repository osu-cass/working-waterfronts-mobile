Ext.define('WorkingWaterfronts.view.ErrorLoading', {
	extend		: 'Ext.Panel',
	xtype		: 'ErrorLoadingView',
	config		: {
		items	: [
			{
				xtype: 'toolbar',
				itemId: 'errorViewToolbar',
				docked: 'top',
				items: []
			},
			{
				xtype: 'label',
				itemId: 'errorInfoText',
				html:
					'<p style="text-align:center">' +
						'<br/>' +
						'<b>Connection Error</b>' +
						'<p style="text-align:center; padding:14px;">' +
							'There was a problem downloading information from the server.' +
						'</p>' +
						'<p style="text-align:center; padding:14px;">' +
							'Check that WiFi or cellular data are enabled and restart the app.' +
						'</p>' +
					'</p>'
			}
		]
	},

	// These are not used by Sencha, but manually in the controller.
	transitions: {
		'home': {
			type		: 'slide',
			direction	: 'left'
		}
	}

});
