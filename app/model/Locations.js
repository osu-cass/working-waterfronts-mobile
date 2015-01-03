Ext.define('WorkingWaterfronts.model.Locations', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'location',				type: 'int' },
			{ name: 'name',					type: 'string' },
			{ name: 'is_not_filterable',	type: 'bool' }
		]
	}
});
