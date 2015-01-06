Ext.define('WorkingWaterfronts.store.PointOfInterest', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WorkingWaterfronts.model.PointsOfInterest',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'http://seagrant-staging.osuosl.org/1/pois',
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
