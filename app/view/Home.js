Ext.define('SeaGrant_Proto.view.Home', {
	extend: 'Ext.form.Panel',
	require: ['Ext.field.Toggle', 'Ext.form.FieldSet', 'Ext.field.Select'],
    fullscreen: true,
    xtype: 'Home',
	alias: 'widget.home',
	config: {
		items: [
			{
				xtype: 'toolbar',
				title: 'Whats Fresh?',
				itemId: 'homePageToolbar',
				docked: 'top'
			},
			{
				xtype: 'togglefield',
				name: 'userlocation',
				label: 'Use Current Locaton',
				itemId: 'userlocation'
			},
	        {
	            xtype: 'fieldset',
	            items: [
	                {
						xtype: 'selectfield',			
						itemId: 'selectlocation',
						label: 'Location',
						labelWrap: true,
						displayField: 'title',
						store: 'Location',
						// valueField: 'id'
					},				
	                {
						xtype: 'selectfield',			
						itemId: 'selectproduct',
						label: 'Product',
						labelWrap: true,
						displayField: 'name',
						store: 'Product',
						// valueField: 'title'
					}					
	            ]	                  
	        },
	        {
	   			// Checkboxes for sorting data on list page
	        	items: [
        	        {
        	        	xtype: 'checkboxfield',
	        			label: 'Vendors',
	        			name: 'vendors',
	        			inputValue: '1',
	        			itemId: 'vendor'
	        		},
	        		{
	        			xtype: 'checkboxfield',
	        			label: 'Products',
	        			name: 'products',
	        			inputValue: '2',
	        			itemId: 'product'
	        		}
		        ]
	        },
	        {
				xtype: 'button',
				ui: 'action',
				text: 'Go',
				itemId: 'goButton'
			}
	    ],
	    listeners: [			
			{
				delegate: '#userlocation',
				event: 'change',
				fn: 'onUseLocation'
			},
			{
				delegate: '#selectlocation',
				event: 'change',
				fn: 'onSelectLocation'
			},
			{
				delegate: '#selectproduct',
				event: 'change',
				fn: 'onSelectProduct'
			},
			{
				delegate: '#vendor',
				event: 'change',
				fn: 'onVendorSelect'
			},
			{
				delegate: '#product',
				event: 'change',
				fn: 'onProductSelect'
			},
			{
				delegate: '#goButton',
				event: 'tap',
				fn: 'onGoButtonTap'
			}
		]	      
	},
	onUseLocation: function(record){
		console.log('setUseLocation');
		this.fireEvent('setUseLocation', this, record);
	},
	onSelectLocation: function(record){
		console.log('chosenLocation');
		this.fireEvent('chosenLocation', this, record);
	},
	onSelectProduct: function(record){
		console.log('chosenProduct');
		this.fireEvent('chosenProduct', this, record);
	},
	onVendorSelect: function(record){
		console.log('sortByVendorCommand');
		this.fireEvent('sortByVendorCommand', this, record);
	},
	onProductSelect: function(record){
		console.log('sortByProductCommand');
		this.fireEvent('sortByProductCommand', this, record);
	},
	onGoButtonTap: function(list, record, target, index, evt, options){
		console.log('viewGoCommand');
		this.fireEvent('viewGoCommand', this, record);
	}
});