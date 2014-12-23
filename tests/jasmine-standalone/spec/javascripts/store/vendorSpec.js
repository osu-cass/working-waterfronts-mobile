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

	it('calls out to the proper url', function() {
		store.load();
		var request = jasmine.Ajax.requests.mostRecent();
		var url = 'http://seagrant-staging.osuosl.org/1/vendors';
		expect(request.url).toEqual(url);
	});

	it('loads data from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: [MOCK_VendorArray[0]]
		});

		expect(store.getCount()).toEqual(1);

		var vendor = store.getAt(0);
		expect(vendor).toBeDefined();
		// For each key in the test_data (expected, definition)
		for (var k in MOCK_VendorArray[0]) {
			// test that the model contains a matching element (actual)
			expect(vendor.get(k)).toBeDefined();
			expect(vendor.get(k)).toEqual(MOCK_VendorArray[0][k]);
		}
	});

	it('loads multiple datas from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: MOCK_VendorArray // test_data.js
		});

		expect(store.getCount()).toEqual(2);

		var vendor = store.getAt(0);
		expect(vendor).toBeDefined();
		// For each key in the test_data (expected, definition)
		for (var k in MOCK_VendorArray[0]) {
			// test that the model contains a matching element (actual)
			expect(vendor.get(k)).toBeDefined();
			expect(vendor.get(k)).toEqual(MOCK_VendorArray[0][k]);
		}

		vendor = store.getAt(1);
		// For each key in the test_data (expected, definition)
		for (var k2 in MOCK_VendorArray[1]) {
			// test that the model contains a matching element (actual)
			expect(vendor.get(k2)).toBeDefined();
			expect(vendor.get(k2)).toEqual(MOCK_VendorArray[1][k2]);
		}
	});

	it('automatically populates itself with API data', function() {

		pending(); //Feature not yet implemented.

		store = Ext.create('WorkingWaterfronts.store.Product');
		// This data will need to be stubbed or mocked.
		expect(store.data.length).toBeGreaterThan(0);
	});
});
