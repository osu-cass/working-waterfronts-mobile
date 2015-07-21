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
						iconCls: 'maps',
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
					tpl:	'{description}'
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
					tpl:	'{history}'
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
				itemId: 'poiFieldLocation',
				items: [{
					xtype	: 'label',
					styleHtmlContent: true,
					tpl:	'{location_description}'
				}]
			},
			{
				xtype: 'fieldset',
				items: [{
					xtype	: 'label',
					itemId	: 'poiFieldContact',
					styleHtmlContent: true,
					tpl		: '{contact_name}'
				}]
			},
			{
				xtype: 'fieldset',
				itemId	: 'poiFieldVideos',
				id		: 'poiFieldVideos',
				items: [{
					xtype	: 'label',
					styleHtmlContent: true
				}]
			},
			{
				xtype: 'toolbar',
				docked: 'bottom',
				layout:{ pack: 'center' },
				items: [{
					width: '80%',
					style: {'font-size':'1.2em'},
					xtype: 'button',
					ui: 'action',
					text: 'Open in Maps',
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
						'<p>{caption}</p>' +
						'<br/>' +
					'</li>' +
				'</tpl>' +
			'</ul>'
		);

		view.down('#poiFieldImages').setTpl(imagesTpl).setData(poi);

		view.down('#poiFieldHistory').setData(poi);

		view.down('#poiFieldFacts').setData(poi);

		if (poi.location_description) {
			view.down('#poiFieldLocation').down('label').setData(poi);
			view.down('#poiFieldLocation').show();
		} else {
			view.down('#poiFieldLocation').hide();
		}

		/*
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
		*/

		view.down('#poiFieldContact').setData(poi);


		if (poi.videos && poi.videos.length) {
			var videosTpl = new Ext.XTemplate(
				'<ul>' +
					'<tpl for="videos">' +
						'<li style="list-style-type: none;">' +
							'<a href="{link}" target="_blank"><div class="video" style="background-image:url({[WorkingWaterfronts.util.Link.getYoutubeImageFromLink(values.link)]})">' +
								'<img alt="video" src="resources/images/play.png">' +
							'</div></a>' +
							'<p>{caption}</p>' +
						'</li>' +
					'</tpl>' +
				'</ul>'
			);
			view.down('#poiFieldVideos').down('label').setTpl(videosTpl).setData(poi);
			view.down('#poiFieldVideos').show();
		} else {
			view.down('#poiFieldVideos').hide();
		}

	}

});
