describe('WorkingWaterfronts.store.Education',function() {

    // Ext.require('WorkingWaterfronts.store.Distance');

    var store;
 
    beforeEach(function() {
	jasmine.Ajax.install();
	store = Ext.create('WorkingWaterfronts.store.Education');
    });

    afterEach(function() {
	jasmine.Ajax.uninstall();
        store = null;
    });

    it('exists', function() {
        expect(store.$className).toEqual('WorkingWaterfronts.store.Education');
    });

    it('Is populated with education data', function(){
        expect(store.data.items[0].data.text).toEqual('Ed item 1');
    });
    it('Is populated with education data', function(){
        expect(store.data.items[1].data.text).toEqual('Ed item 2');
    });   
    it('Is populated with education data', function(){
        expect(store.data.items[2].data.text).toEqual('Ed item 3');
    });
    it('Is populated with education data', function(){
        expect(store.data.items[3].data.text).toEqual('Ed item 4');
    });
    it('Is populated with education data', function(){
        expect(store.data.items[4].data.text).toEqual('Ed item 5');
    });
});
