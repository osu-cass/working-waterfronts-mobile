Ext.define('WorkingWaterfronts.util.Link', {
	singleton: true,

	openNavigation: function(lat, lng) {
		var data = 'daddr=' + lat + ',' + lng;
		if (window.device.platform === 'Android') {
			this.openLink('https://maps.google.com/?' + data);
		} else {
			this.openLink('maps:' + data);
		}
	},

	openVideo: function (id) {
		this.openLink('https://www.youtube.com/watch?v=' + id);
	},

	openLink: function (link) {
		// Requires inAppBrowser plugin!
		window.open(link, '_system');
	},

	getYoutubeIdFromLink: function (link) {
		var id = '';
		if (link.indexOf('youtu.be') > -1) {
			id = link.split('/')[3];
		} else {
			id = link.split('v=')[1];
			var ampersandPosition = id.indexOf('&');
			if (ampersandPosition !== -1) {
				id = id.substring(0, ampersandPosition);
			}
		}
		return id;
	},

	getYoutubeImageFromLink: function (link) {
		var id = this.getYoutubeIdFromLink(link);
		return 'http://img.youtube.com/vi/' + id + '/0.jpg';
	}

});
