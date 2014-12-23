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

	it('loads an array from an api', function (){
		store.load();
		var locations = TestData.LocationArray;
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText: locations
		});
		expect(store.getCount()).toEqual(2);
		Helper.compareModelToDefinition(locations[0], store.getAt(0));
		Helper.compareModelToDefinition(locations[1], store.getAt(1));
	});

});
