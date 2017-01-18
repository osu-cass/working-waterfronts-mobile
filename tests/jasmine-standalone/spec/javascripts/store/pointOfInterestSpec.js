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
			status			: 200,
			responseText	: { 'pois': pois }
		});
		expect(store.getCount()).toEqual(3);
		Helper.compareModelToDefinition(pois[0], store.getAt(0));
		Helper.compareModelToDefinition(pois[1], store.getAt(1));
		Helper.compareModelToDefinition(pois[2], store.getAt(2));
	});
});
