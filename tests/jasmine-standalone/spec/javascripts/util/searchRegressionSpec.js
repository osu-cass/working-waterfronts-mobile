describe('WorkingWaterfronts.util.Search REGRESSION', function () {

	Ext.require('WorkingWaterfronts.util.Search');
	/* global WorkingWaterfronts */

	var store;
	var Search = WorkingWaterfronts.util.Search;
	var PointOfInterestClass = 'WorkingWaterfronts.store.PointOfInterest';

	beforeEach(function () {
		jasmine.Ajax.install();
		store = Ext.create(PointOfInterestClass);
		store.load();
		var pois = TestData.PointOfInterestArray;
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status			: 200,
			responseText	: { 'pois': pois }
		});
		Search.options.location = null;
		Search.options.distance = null;
		Search.options.position = null;
		Search.applyFilterToStore(store);
	});

	afterEach(function () {
		store.clearFilter();
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('is filtered', function () {
		expect(store.isFiltered()).toBe(true);
	});

	it('has nothing filtered by default', function () {
		expect(store.getCount()).toBe(3);
	});

	it('has 1/3 when filtered by location', function () {
		var Search = WorkingWaterfronts.util.Search;
		Search.options.location = TestData.LocationArray[0];
		store.filter();
		expect(Search.canFilterByLocation()).toBe(true);
		expect(store.getCount()).toBe(1);
	});

	it('has 2/3 when filtered by 50 miles', function () {
		var Search = WorkingWaterfronts.util.Search;
		Search.options.position = {
			coords: {
				latitude	: 44.0,
				longitude	: 120.0
			}
		};
		Search.options.distance = { value: 50, unit: 'miles' };
		store.filter();
		expect(Search.canFilterByDistance()).toBe(true);
		expect(store.getCount()).toBe(2);
	});

});
