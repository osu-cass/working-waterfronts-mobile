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
		var data = TestData.VendorArray[0];
		model = Ext.create('WorkingWaterfronts.model.Vendors', data);
		Helper.compareModelToDefinition(data, model);
    });
});
