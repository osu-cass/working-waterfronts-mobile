describe('WorkingWaterfronts.model.PointsOfInterest', function () {

	var model;
	var PointOfInterestClass = 'WorkingWaterfronts.model.PointsOfInterest';

	beforeEach(function () {
		expect(model).toBeUndefined();
	});

	afterEach(function () {
		model = model.destroy();
	});

	it('exists and can be created', function () {
		function createModel () {
			model = Ext.create(PointOfInterestClass);
			expect(model).toBeDefined();
			expect(model.$className).toEqual(PointOfInterestClass);
		}
		expect(createModel).not.toThrow();
	});

	it('has a schema matching the mock test data', function () {
		var data  = TestData.PointOfInterestArray[0];
		model = Ext.create(PointOfInterestClass, data);
		Helper.compareModelToDefinition(data, model);
	});

});
