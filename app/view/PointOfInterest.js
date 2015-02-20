Ext.define('WorkingWaterfronts.view.PointOfInterest', {
	extend		: 'Ext.Panel',
	xtype		: 'PointOfInterestView',
	requires	: [
		'Ext.dataview.List',
		'WorkingWaterfronts.util.Link'
	],
	config		: {
		scrollable: true,
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
				itemId: 'infoText'
			},
			{
				xtype: 'fieldset',
				docked: 'bottom',
				items: [{
					xtype: 'button',
					ui: 'action',
					text: 'Navigate Me',
					itemId: 'navigateButton'
				}]
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
	},

	populate: function (poi) {
		var view = this;

		var Link = WorkingWaterfronts.util.Link;

		var apiHost = 'http://working-waterfronts-staging.osuosl.org';

		var tpl = new Ext.XTemplate(
			'<b>Name:</b> {name}' +
			'</br>' +
			'<b>Description:</b> {description}' +
			'<br/>' +


			'<hr/>' +
			'<b>{categories.length} Categories</b>' +
			'<ul>' +
				'<tpl for="categories">' +
					'<li>{category}</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<b>{hazards.length} Hazards</b>' +
			'<ul>' +
				'<tpl for="hazards">' +
					'<li>' +
						'<b>{name}</b>' +
						'<p>{description}</p>' +
					'</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<b>{images.length} Images</b>' +
			'<ul>' +
				'<tpl for="images">' +
					'<li>' +
						'<p>{name}</p>' +
						'<img src="' + apiHost + '{link}" style="width:100%" />' +
						'<p>{caption}</p>' +
					'</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<b>{videos.length} Videos</b>' +
			'<ul>' +
				'<tpl for="videos">' +
					'<li>' +
						'{caption}' +
						'<a onclick="WorkingWaterfronts.util.Link.openLink(\'{link}\')">' +
							// video image
							'Open' +
						'</a>' +
					'</li>' +
				'</tpl>' +
			'</ul>'
		);

		view.down('#infoText').setTpl(tpl);
		view.down('#infoText').setData(poi);
	}

});
