/* global describe */
/* global Ext */

describe('WorkingWaterfronts.model.PointOfInterest', function () {

	var model;

	beforeEach(function () {
		expect(model).toBeUndefined();
	});

	afterEach(function () {
		model = model.destroy();
	});

	it('can be created', function () {
		function createNew () { model = Ext.create('WorkingWaterfronts.model.PointOfInterest'); }
		expect(createNew).not.toThrow();
	});

	it('creates with the correct className', function () {
		model = Ext.create('WorkingWaterfronts.model.PointOfInterest');
		expect(model.$className).toEqual('WorkingWaterfronts.model.PointOfInterest');
	});

	it('saves the same info as provided by the API', function () {

		// todo: not verified against docs yet
		data = MOCK_PointOfInterestArray[0];

		model = Ext.create('WorkingWaterfronts.model.PointOfInterest', data);

		for (var k in data) {
			// For every key in 'data', ensure the model has a matching field.
			expect(model.get(k)).toEqual(data[k]);
		}
	});

});
