describe('WorkingWaterfronts.store.Distance',function() {

	// Ext.require('WorkingWaterfronts.store.Distance');

	var store;

	beforeEach(function() {
	   jasmine.Ajax.install();
	   store = Ext.create('WorkingWaterfronts.store.Distance');
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
		store = null;
	});

	it('exists', function() {
		expect(store.$className).toEqual('WorkingWaterfronts.store.Distance');
	});

	it('Is populated with distance data', function(){
		expect(store.data.items[0].data.value).toEqual(200);
		expect(store.data.items[1].data.value).toEqual(175);
		expect(store.data.items[2].data.value).toEqual(150);
		expect(store.data.items[3].data.value).toEqual(125);
		expect(store.data.items[4].data.value).toEqual(100);
		expect(store.data.items[5].data.value).toEqual(75);
		expect(store.data.items[6].data.value).toEqual(50);
		expect(store.data.items[7].data.value).toEqual(25);
		expect(store.data.items[8].data.value).toEqual(20);
		expect(store.data.items[9].data.value).toEqual(15);
		expect(store.data.items[10].data.value).toEqual(10);
		expect(store.data.items[11].data.value).toEqual(5);
	});

});
