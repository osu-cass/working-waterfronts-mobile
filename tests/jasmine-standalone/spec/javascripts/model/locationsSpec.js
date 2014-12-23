describe('WorkingWaterfronts.model.Locations', function() {

	var model;

	beforeEach(function() {
		//Set up test resources
		expect(model).toBeUndefined();
	});

	afterEach(function() {
		//Dispose of test resources
		model = model.destroy();
	});

	it('exists', function() {
		model = Ext.create('WorkingWaterfronts.model.Locations');
		expect(model.$className).toEqual('WorkingWaterfronts.model.Locations');
	});

	it('stores profile data on locations', function() {

		// test_data.js
		data = MOCK_LocationArray[0];

		model = Ext.create('WorkingWaterfronts.model.Locations', data);

		for (var k in data) {
			// For every key in 'data', ensure the model has a matching field.
			expect(model.get(k)).toEqual(data[k]);
		}
	});

});
