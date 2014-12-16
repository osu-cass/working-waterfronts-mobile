Ext.define('WorkingWaterfronts.store.VendorInventory', {
    extend: 'Ext.data.Store',
    storeId: 'VendorInventory',
 
    config: {
        model: 'WorkingWaterfronts.model.VendorInventories',
        data: [
            {
                "name": "test Fish",
                "preparation": "Skewered"
            },
            {
                "name": "other Fish",
                "preparation": "new"
            }
        ]
    }
});
