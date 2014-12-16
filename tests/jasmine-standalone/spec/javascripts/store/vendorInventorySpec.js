describe('WorkingWaterfronts.store.VendorInventory',function() {

    var store;
 
    beforeEach(function() {
	jasmine.Ajax.install();
	store = Ext.create('WorkingWaterfronts.store.VendorInventory');
    });

    afterEach(function() {
	jasmine.Ajax.uninstall();
        store = null;
    });

	it('exists', function() {
        expect(store.$className).toEqual('WorkingWaterfronts.store.VendorInventory');
    });

    it('Is populated with first test item for vendorInventory', function(){
        expect(store.data.items[0].data.name).toEqual("test Fish");
    });
});
