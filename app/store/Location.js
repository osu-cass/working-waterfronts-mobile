Ext.define('SeaGrant_Proto.store.Location', {
    extend: 'Ext.data.Store',
    config: {
	model: 'SeaGrant_Proto.model.Locations',
	autoLoad: {
            callback: function(records, operation, success) {
                Ext.getStore('Location').insert( 0, [
                    {
                        name: "Please choose a location",
                        id: 0
                    }
                ]);
                console.log("Location Store: autoload result records:");
                console.log(records);
            }
        },
	proxy: {
	    type: 'ajax',
	    url: 'http://seagrant-staging.osuosl.org/1/locations',
	    noCache: false,
            pageParam: false,
            limitParam: false,
            startParam: false,
	    reader: {
		type: 'json',
		rootProperty: 'locations'
	    }
	}
    }
});
