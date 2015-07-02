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
						iconCls: 'search',
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
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldTitle',
					styleHtmlContent: true,
					tpl:	'<h3>{name}</h3>' +
							'<p>{description}</p>'
				}]
			},
			{
				xtype	: 'fieldset',
				itemId	: 'poiFieldImages',
				id		: 'poiFieldImages'
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldHistory',
					styleHtmlContent: true,
					tpl:	'<p>{history}</p>'
				}]
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldFacts',
					styleHtmlContent: true,
					tpl:	'{facts}'
				}]
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldContact',
					styleHtmlContent: true
				}]
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldVideos',
					id		: 'poiFieldVideos'
				}]
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

		view.down('#poiFieldTitle').setData(poi);

		var imagesTpl = new Ext.XTemplate(
			'<ul>' +
				'<tpl for="images">' +
					'<li style="list-style-type: none;">' +
						'<img src="' + Ext.getStore('PointsOfInterest').hostUrl + '{link}"/>' +
						'<br/>' +
					'</li>' +
				'</tpl>' +
			'</ul>'
		);

		view.down('#poiFieldImages').setTpl(imagesTpl).setData(poi);

		view.down('#poiFieldHistory').setData(poi);

		view.down('#poiFieldFacts').setData(poi);

		var contactTpl = new Ext.XTemplate(
			'<h6>Contact Info</h6>' +
			'<p>' +
				'{contact_name}<br/>' +
				'<tpl if="email">' +
					'<a href="#" onclick="WorkingWaterfronts.util.Link.openLink(\'{email}\')">{email}</a>' +
				'</tpl><tpl if="!email">' +
					'No email address.' +
				'</tpl><br/>' +

				'<tpl if="phone">' +
					'<a href="#" onclick="WorkingWaterfronts.util.Link.openLink(\'{phone}\')">{phone}</a>' +
				'</tpl><tpl if="!phone">' +
					'No phone number.' +
				'</tpl><br/>' +

				'<tpl if="website">' +
					'<a href="#" onclick="WorkingWaterfronts.util.Link.openLink(\'{website}\')">Website</a>' +
				'</tpl><tpl if="!website">' +
					'No website.' +
				'</tpl><br/>' +
			'</p>'
		);

		view.down('#poiFieldContact').setTpl(contactTpl).setData(poi);

		var videosTpl = new Ext.XTemplate(
			'<ul>' +
				'<tpl for="videos">' +
					'<li style="list-style-type: none;">' +
						'<a href="#" onclick="WorkingWaterfronts.util.Link.openLink(\'{link}\')"><div class="video">' +
							'<img alt="video" src="{[WorkingWaterfronts.util.Link.getYoutubeImageFromLink(values.link)]}">' +
						'</div></a>' +
					'</li>' +
				'</tpl>' +
			'</ul>'
		);

		view.down('#poiFieldVideos').setTpl(videosTpl).setData(poi);
	}

});
