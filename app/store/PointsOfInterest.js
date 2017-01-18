Ext.define('WorkingWaterfronts.store.PointsOfInterest', {
    extend: 'Ext.data.Store',
    require: ['WorkingWaterfronts.util.API'],
	config: {
		model: 'WorkingWaterfronts.model.PointOfInterest',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: WorkingWaterfronts.util.API.url + '/1/pois',
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
