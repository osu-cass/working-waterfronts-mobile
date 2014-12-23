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

	it('can be created without throwing a tantrum', function () {
		function createNew () { model = Ext.create('WorkingWaterfronts.model.PointOfInterest'); }
		expect(createNew).not.toThrow();
	});

	it('creates with the correct className', function () {
		model = Ext.create('WorkingWaterfronts.model.PointOfInterest');
		expect(model.$className).toEqual('WorkingWaterfronts.model.PointOfInterest');
	});

	it('saves the same info as provided by the API', function () {

		// todo: not verified against docs yet
		data = {
			name					: 'The Gates of Hell',
			description 			: '',
			// contact
			email 					: '',
			website					: '',
			phone					: '',
			contact_name			: '',
			// location
			street					: '',
			city					: '',
			state					: '',
			zip						: '',
			lat						: 44.7889,
			lng						: 666,
			location_description	: '',
			// meta
			created					: Date.now(),
			updated					: Date.now(),
			ext						: '',
			id						: 1
		};

		model = Ext.create('WorkingWaterfronts.model.PointOfInterest', data);

		for (var k in data) {
			// For every key in 'data', ensure the model has a matching field.
			expect(model.get(k)).toEqual(data[k]);
		}
	});

	it('does not save other information', function () {

		data = {
			fish	: 'I\'m a fish.'
		};

		model = Ext.create('WorkingWaterfronts.model.PointOfInterest', data);

		expect(model.get('fish')).not.toBeDefined();
	});

});