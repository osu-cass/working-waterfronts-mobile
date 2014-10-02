describe('SeaGrant_Proto.store.Location',function() {

    var store;

    beforeEach(function() {
        //Set up globals
        // console.log('in before each function');
		jasmine.Ajax.install();
		// console.log('Ajax is installed');
		store = Ext.create('SeaGrant_Proto.store.Location');
		// console.log('store created');
  //       console.log(store);
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
      //   console.log(store);
        expect(store.$className).toEqual('SeaGrant_Proto.store.Location');
    });

	it('calls out to the proper url', function() {
		store.load();
		var request = jasmine.Ajax.requests.mostRecent();
		expect(request.url).toEqual('/newLocations.json');
	});

	it('loads data from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText:[
			{
				title: 'Test',
				text: 'New test stuff',
				value: 1,
				products: 'test prod',
				Latlng: null,
				id: 1,
				address: 'new test address',
				desc: 'test description'
			}
		]
        });
		expect(store.getCount()).toEqual(1);
		expect(store.getAt(0).get('title')).toEqual('Test');
		expect(store.getAt(0).get('text')).toEqual('New test stuff');
		expect(store.getAt(0).get('value')).toEqual(1);
		expect(store.getAt(0).get('products')).toEqual('test prod');
		expect(store.getAt(0).get('Latlng')).toEqual(null);
		expect(store.getAt(0).get('id')).toEqual(1);
		expect(store.getAt(0).get('address')).toEqual('new test address');
		expect(store.getAt(0).get('desc')).toEqual('test description');
    });

	it('loads multiple datas from an api', function(){
		store.load();
		var mockedRequest = jasmine.Ajax.requests.mostRecent();
		mockedRequest.response({
			status: 200,
			responseText:[
			{
				title: 'Test',
				text: 'New test stuff',
				value: 1,
				products: 'test prod',
				Latlng: null,
				id: 1,
				address: 'new test address',
				desc: 'test description'
			},
			{
				title: 'Test',
				text: 'New test stuff',
				value: 1,
				products: 'test prod',
				Latlng: null,
				id: 1,
				address: 'new test address',
				desc: 'test description'
			}
		]
        });
		expect(store.getCount()).toEqual(1);
		expect(store.getAt(0).get('title')).toEqual('Test');
		expect(store.getAt(0).get('text')).toEqual('New test stuff');
		expect(store.getAt(0).get('value')).toEqual(1);
		expect(store.getAt(0).get('products')).toEqual('test prod');
		expect(store.getAt(0).get('Latlng')).toEqual(null);
		expect(store.getAt(0).get('id')).toEqual(1);
		expect(store.getAt(0).get('address')).toEqual('new test address');
		expect(store.getAt(0).get('desc')).toEqual('test description');
		//data store 2
		expect(store.getCount()).toEqual(1);
		expect(store.getAt(0).get('title')).toEqual('Test');
		expect(store.getAt(0).get('text')).toEqual('New test stuff');
		expect(store.getAt(0).get('value')).toEqual(1);
		expect(store.getAt(0).get('products')).toEqual('test prod');
		expect(store.getAt(0).get('Latlng')).toEqual(null);
		expect(store.getAt(0).get('id')).toEqual(1);
		expect(store.getAt(0).get('address')).toEqual('new test address');
		expect(store.getAt(0).get('desc')).toEqual('test description');
    });

	//Currently not a feature, waiting on getting an api set up. Keeping test
	//as failure for a reminder.
    // it('automatically populates itself with API data', function() {
    //     // store = Ext.create('SeaGrant_Proto.store.Location');
    //     //Let's test this with sample data.
    //     console.log(store);
    //     expect(store.data.length).toBeGreaterThan(0);
    // });
});
