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
		var data = TestData.LocationArray[0];
		model = Ext.create('WorkingWaterfronts.model.Locations', data);
		Helper.compareModelToDefinition(data, model);
	});

});
