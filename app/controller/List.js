Ext.define('SeaGrant_Proto.controller.List', {
	extend: 'Ext.app.Controller',
	requires: 'Ext.MessageBox',
	alias: 'cont',
	config: {
		refs: {
			homeView: 'home',
			listView: 'listview',
			detailView: 'detail',			
			infoView: 'info',
			specificView: 'specific'
		},
		control: {
			homeView: {				
				setUseLocation: 'onSetUseLocation',
				chosenLocation: 'onChooseLocation',
				chosenProduct: 'onChooseProduct',
				sortByVendorCommand: 'onSortByVendorCommand',
				sortByProductCommand: 'onSortByProductCommand',
				viewGoCommand: 'onViewGoCommand'				
			},
			listView: {
				viewBackHomeCommand: 'onViewBackHomeCommand',
				viewDetailCommand: 'onViewDetailCommand',
				viewLpageListItemCommand: 'onViewLpageListItemCommand'
			},
			detailView: {
				viewBackListCommand: 'onViewBackListCommand',
				viewInfoCommand: 'onViewInfoCommand',
				viewDpageListItemCommand: 'onViewDpageListItemCommand'
			},
			infoView: {
				viewBackDetailCommand: 'onViewBackDetailCommand',
				viewSpecificCommand: 'onViewSpecificCommand',
				viewIpageListItemCommand: 'onViewIpageListItemCommand'
			},
			specificView: {
				viewBackInfoCommand: 'onViewBackInfoCommand'
			}
		}
	},
	slideLeftTransition: {
		type: 'slide',
		direction: 'left'
	},
	slideRightTransition: {
		type: 'slide',
		direction: 'right'
	},
	// Functions dealing with 
	// HOME
	// stuff
	onSetUseLocation: function(){
		console.log('In controller(home): User Location toggle');
	},	
	onChooseLocation: function(){
		console.log('In controller(home): Drop Down list Location');
	},
	onChooseProduct: function(){
		console.log('In controller(home): Drop Down list Products');
	},	
	onSortByVendorCommand: function(){
		console.log('In controller(home): Vendor checkbox');
	},
	onSortByProductCommand: function(){
		console.log('In controller(home): Product checkbox');
	},
	onViewGoCommand: function(){
		console.log('In controller(home): Go to List Page Button');
		Ext.Viewport.animateActiveItem(this.getListView(), this.slideLeftTransition);
	},
	// Functions dealing with 
	// LIST
	// stuff
	onViewBackHomeCommand: function(){
		console.log('In controller(list): Back to Home Page Button');
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
	},
	onViewDetailCommand: function(){
		console.log('In controller(list): View Detail Page Button');
		Ext.Viewport.animateActiveItem(this.getDetailView(), this.slideLeftTransition);
	},	
	onViewLpageListItemCommand: function(record, list, index){
		console.log('In controller(list): Select list item');
		Ext.Msg.alert(index.data.title, 'This is the selected list item.');
		Ext.ComponentQuery.query('toolbar[itemId=detailPageToolbar]')[0].setTitle(index.data.title);
		Ext.Viewport.animateActiveItem(this.getDetailView(), this.slideLeftTransition);
	},
	// Functions dealing with 
	// DETAIL
	// stuff
	onViewBackListCommand: function(){
		console.log('In controller(detail): Back to List Page Button');
		Ext.Viewport.animateActiveItem(this.getListView(), this.slideRightTransition);
	},
	onViewInfoCommand: function(){
		console.log('In controller(detail): View Info Page Button');
		Ext.Viewport.animateActiveItem(this.getInfoView(), this.slideLeftTransition);
	},	
	onViewDpageListItemCommand: function(record, list, index){
		console.log('In controller(detail): Select list item');
		Ext.Msg.alert(index.data.products, 'This is the selected list item.');
		Ext.ComponentQuery.query('toolbar[itemId=infoPageToolbar]')[0].setTitle(index.data.products);
		Ext.Viewport.animateActiveItem(this.getInfoView(), this.slideLeftTransition);
	},
	// Functions dealing with 
	// INFO 
	// stuff
	onViewBackDetailCommand: function(){
		console.log('In controller(info): Back to Detail Page Button');
		Ext.Viewport.animateActiveItem(this.getDetailView(), this.slideRightTransition);
	},
	onViewSpecificCommand: function(){
		console.log('In controller(info): View Specific Page Button');
		Ext.Viewport.animateActiveItem(this.getSpecificView(), this.slideLeftTransition);
	},	
	onViewIpageListItemCommand: function(record, list, index){
		console.log('In controller(info): Selected');
		Ext.Msg.alert(index.data.listItem, 'This is the stuff I selected.');
		Ext.ComponentQuery.query('toolbar[itemId=specificPageToolbar]')[0].setTitle(index.data.listItem);
		Ext.Viewport.animateActiveItem(this.getSpecificView(), this.slideLeftTransition);
	},
	// Functions dealing with
	// SPECIFIC
	// stuff
	onViewBackInfoCommand: function(){
		console.log('In controller(specific): Back to Info Page Button');
		Ext.Viewport.animateActiveItem(this.getInfoView(), this.slideRightTransition);
	},
	// Initialize functions
	launch: function(){
		this.callParent(arguments);
		// console.log("launch");
	},
	init: function(){
		this.callParent(arguments);
		// console.log("init");
	}
});