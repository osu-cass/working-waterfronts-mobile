describe('WorkingWaterfronts.model.Vendors', function() {

    var model;

    beforeEach(function() {
        //Set up globals
        expect(model).toBeUndefined();
    });

    afterEach(function() {
        //Take down globals
        model = model.destroy();
    });

    it('exists', function() {
        model = Ext.create('WorkingWaterfronts.model.Vendors');
        expect(model.$className).toEqual('WorkingWaterfronts.model.Vendors');
    });

    it('stores profile data on vendors', function() {
		// test_data.js
		data = MOCK_VendorArray[0];

		model = Ext.create('WorkingWaterfronts.model.Vendors', data);

		for (var k in data) {
			// For every key in 'data', ensure the model has a matching field.
			expect(model.get(k));
			expect(model.get(k)).toEqual(data[k]);
		}
    });
});
