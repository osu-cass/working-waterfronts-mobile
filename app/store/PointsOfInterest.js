Ext.define('WorkingWaterfronts.store.PointsOfInterest', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WorkingWaterfronts.model.PointOfInterest',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'http://working-waterfronts-staging.osuosl.org/1/pois',
			noCache: false,
			pageParam: false,
			limitParam: false,
			startParam: false,
			reader: {
				type: 'json',
				rootProperty: 'pois'
			}
		}
	}
});
