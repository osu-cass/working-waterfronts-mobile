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
			'<b>Alternate Name:</b> {alt_name}' +
			'</br>' +
			'<b>Description:</b></br>' +
			'{description}</br>' +
			'<hr/>' +
			'<b>History:</b></br>' +
			'{history}</br>' +
			'<b>Facts:</b></br>' +
			'{facts}</br>' +
			'<b>Address:</b> ' +
			'<br/>{street}' +
			'<br/>{city}' +
			'<br/>{state}' +
			'<br/>{zip}' +
			'<br/>' +
			'<hr/>' +
			'<p style="text-align:center;"><b>{categories.length} Categories</b></p>' +
			'<ul>' +
				'<tpl for="categories">' +
					'<li>{category}</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<p style="text-align:center;"><b>{hazards.length} Hazards</b></p>' +
			'<ul>' +
				'<tpl for="hazards">' +
					'<li>' +
						'<hr/>' +
						'<b>{name}</b>' +
						'<p>{description}</p>' +
					'</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<p style="text-align:center;"><b>{images.length} Images</b></p>' +
			'<ul>' +
				'<tpl for="images">' +
					'<li>' +
						'<hr/>' +
						'<b>{name}</b><br/>' +
						'"{caption}"' +
						'<img src="' + apiHost + '{link}" style="width:100%" />' +
					'</li>' +
				'</tpl>' +
			'</ul>' +


			'<hr/>' +
			'<p style="text-align:center;"><b>{videos.length} Videos</b></p>' +
			'<ul>' +
				'<tpl for="videos">' +
					'<li>' +
						'<hr/>' +
						'<b>{name}</b></br>' +
						'"{caption}"' +
						'<a onclick="WorkingWaterfronts.util.Link.openLink(\'{link}\')">' +
							'<img alt="video" src="{[WorkingWaterfronts.util.Link.getYoutubeImageFromLink(values.link)]}" width="100%">' +
						'</a>' +
					'</li>' +
				'</tpl>' +
			'</ul>'
		);

		view.down('#infoText').setTpl(tpl);
		view.down('#infoText').setData(poi);
	}

});
