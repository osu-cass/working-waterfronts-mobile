Ext.define('SeaGrant_Proto.store.Vendor', {
	extend: 'Ext.data.Store',
	// requires: 'Ext.data.proxy.LocalStorage',
	// id: 'thisStuff',
	storId: 'Vendor',
	config: {
		model: 'SeaGrant_Proto.model.City',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'newVendors.json',
			reader: {
				type: 'json',
				rootProperty: 'vendors'
			}
		}
	}
});