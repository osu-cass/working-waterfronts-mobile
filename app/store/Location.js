Ext.define('WorkingWaterfronts.store.Location', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WorkingWaterfronts.model.Locations',
		data: [
{
	location				: 0,
	name					: '-- Anywhere --',
	is_not_filterable		: true
},
{
	location				: 1,
	name					: 'Coos Bay'
},
{
	location				: 2,
	name					: 'North Bend'
}
		]
	}
});
