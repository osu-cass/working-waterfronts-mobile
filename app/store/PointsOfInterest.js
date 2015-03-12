var hostUrl = 'http://working-waterfronts-api.osuosl.org/';

Ext.define('WorkingWaterfronts.store.PointsOfInterest', {
	extend: 'Ext.data.Store',
	hostUrl: hostUrl,
	config: {
		hostUrl: hostUrl,
		model: 'WorkingWaterfronts.model.PointOfInterest',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: hostUrl + '1/pois',
			noCache: false,
			pageParam: false,
			limitParam: false,
			startParam: false,
			reader: {
				type: 'json',
				rootProperty: 'pointsofinterest'
			}
		}
	}
});
