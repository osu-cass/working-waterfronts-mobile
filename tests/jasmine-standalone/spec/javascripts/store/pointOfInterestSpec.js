/* global Ext */

describe('WorkingWaterfronts.store.PointOfInterest', function () {

	var store;

	beforeEach(function () {
		jasmine.Ajax.install();
		store = Ext.create('WorkingWaterfronts.store.PointOfInterest');
	});

	afterEach(function () {
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('exists', function() {
		expect(store.$className).toEqual('WorkingWaterfronts.store.PointOfInterest');
	});

});