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
					}
				]
			},
			{
				xtype: 'fieldset',
				name: 'name',
				label: 'Name'
			},
			{
				xtype: 'fieldset',
				name: 'email',
				label: 'Email'
			},
			{
				xtype: 'fieldset',
				name: 'password',
				label: 'Password'
			}
		]
	}
});
