describe('WorkingWaterfronts.store.PointOfInterest', function () {

	var store;
	var PointOfInterestClass = 'WorkingWaterfronts.store.PointOfInterest';

	beforeEach(function () {
		jasmine.Ajax.install();
		store = Ext.create(PointOfInterestClass);
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('exists', function() {
		expect(store.$className).toEqual(PointOfInterestClass);
	});

	it('loads an array from an api', function () {
		store.load();
		var pois = TestData.PointOfInterestArray;
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: pois
		});
		expect(store.getCount()).toEqual(1);
		Helper.compareModelToDefinition(pois[0], store.getAt(0));
	});
});
