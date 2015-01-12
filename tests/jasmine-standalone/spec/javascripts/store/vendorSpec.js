describe('WorkingWaterfronts.store.Vendor',function() {

	var store;

	beforeEach(function() {
		jasmine.Ajax.install();
		store = Ext.create('WorkingWaterfronts.store.Vendor');
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('exists', function() {
		expect(store.$className).toEqual('WorkingWaterfronts.store.Vendor');
	});

	it('loads an array from an api', function(){
		store.load();
		var vendors = TestData.VendorArray;
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: vendors
		});
		expect(store.getCount()).toEqual(2);
		Helper.compareModelToDefinition(vendors[0], store.getAt(0));
		Helper.compareModelToDefinition(vendors[1], store.getAt(1));
	});

});
