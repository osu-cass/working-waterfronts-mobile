Ext.define('WorkingWaterfronts.util.Link', {
	singleton: true,

	openNavigation: function(lat, lng) {
		var data = 'daddr=' + lat + ',' + lng;
		this.openLink('https://maps.google.com/?' + data, 'maps:' + data);
	},

	openVideo: function (id) {
		this.openLink('https://www.youtube.com/watch?v=' + id);
	},

	openLink: function (androidLink, iOSLink) {
		if (!iOSLink) iOSLink = androidLink;
		if (navigator.userAgent.match(/(Android)/)) {
			navigator.app.loadUrl(androidLink, {openExternal: true});
		} else if (navigator.userAgent.match(/(AppleWebKit)/)) {
			window.open(iOSLink);
		} else {
			window.open(androidLink);
		}
	},

	getYoutubeIdFromLink: function (link) {
		var id = link.split('v=')[1];
		var ampersandPosition = id.indexOf('&');
		if (ampersandPosition !== -1) {
			id = id.substring(0, ampersandPosition);
		}
		return id;
	},

	getYoutubeImageFromLink: function (link) {
		var id = this.getYoutubeIdFromLink(link);
		return 'http://img.youtube.com/vi/' + id + '/0.jpg';
	}

});
