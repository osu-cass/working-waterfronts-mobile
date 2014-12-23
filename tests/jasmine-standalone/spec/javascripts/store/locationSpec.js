describe('WorkingWaterfronts.store.Location',function() {

	var store;

	beforeEach(function() {
		jasmine.Ajax.install();
		store = Ext.create('WorkingWaterfronts.store.Location');
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('exists', function() {
		expect(store.$className).toEqual('WorkingWaterfronts.store.Location');
	});

	it('calls out to the proper url', function() {
		store.load();
		var request = jasmine.Ajax.requests.mostRecent();
		var url = 'http://seagrant-staging.osuosl.org/1/locations';
		expect(request.url).toEqual(url);
	});

	it('loads data from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: [MOCK_LocationArray[0]]
		});

		expect(store.getCount()).toEqual(1);

		var location = store.getAt(0);
		expect(location).toBeDefined();
		// For each key in the test_data (expected, definition)
		for (var k in MOCK_LocationArray[0]) {
			// test that the model contains a matching element (actual)
			expect(location.get(k)).toBeDefined();
			expect(location.get(k)).toEqual(MOCK_LocationArray[0][k]);
		}
	});

	it('loads multiple datas from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: MOCK_LocationArray
		});

		expect(store.getCount()).toEqual(2);

		var location = store.getAt(0);
		expect(location).toBeDefined();
		// For each key in the test_data (expected, definition)
		for (var k in MOCK_LocationArray[0]) {
			// test that the model contains a matching element (actual)
			expect(location.get(k)).toBeDefined();
			expect(location.get(k)).toEqual(MOCK_LocationArray[0][k]);
		}

		location = store.getAt(1);
		expect(location).toBeDefined();
		// For each key in the test_data (expected, definition)
		for (var k2 in MOCK_LocationArray[1]) {
			// test that the model contains a matching element (actual)
			expect(location.get(k2)).toBeDefined();
			expect(location.get(k2)).toEqual(MOCK_LocationArray[1][k2]);
		}
	});

	it('automatically populates itself with API data', function() {

		pending(); // Feature not  yet implemented.

		store = Ext.create('WorkingWaterfronts.store.Location');

		//Let's test this with sample data.
		console.log(store);
		expect(store.data.length).toBeGreaterThan(0);
	});
});
