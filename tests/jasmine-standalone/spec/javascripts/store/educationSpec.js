describe('SeaGrant_Proto.store.Education',function() {

    // Ext.require('SeaGrant_Proto.store.Distance');

	 var store;
 
    beforeEach(function() {
        //Set up globals
        // console.log('in before each function');
		jasmine.Ajax.install();
        // console.log('Ajax is installed');
        // for some reason this line doesn't work and store is not created.
		store = Ext.create('SeaGrant_Proto.store.Education');
        // console.log('store created');
        // console.log(store);
    });

    afterEach(function() {
        //Take down globals

        //This looks like it should be leaky, check the sencha API for
        //something like the model.destroy() function.
		jasmine.Ajax.uninstall();
        store = null;
        // console.log('store removed');
    });

	it('exists', function() {
        // console.log('In exists function');
        // console.log(store);
        expect(store.$className).toEqual('SeaGrant_Proto.store.Education');
    });

    it('Is populated with education data', function(){
        // console.log(store.data);
        expect(store.data.items[0].data.text).toEqual('Ed item 1');
    });
});