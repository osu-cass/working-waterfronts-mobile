Ext.define('WorkingWaterfronts.store.Vendor', {
    extend: 'Ext.data.Store',
    config: {
	model: 'WorkingWaterfronts.model.Vendors',
	autoLoad: true,
	proxy: {
	    type: 'ajax',
	    url: 'http://seagrant-staging.osuosl.org/1/vendors',
	    noCache: false,
            pageParam: false,
            limitParam: false,
            startParam: false,
	    reader: {
		type: 'json',
		rootProperty: 'vendors'
	    }
	}
    }
});
