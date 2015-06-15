Ext.define('WorkingWaterfronts.model.PointOfInterest', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'name',			type: 'string' },
			{ name: 'alt_name',		type: 'string' },
			{ name: 'summary',		type: 'string' },

			{ name: 'lat',			type: 'number' },
			{ name: 'lng',			type: 'number' },
			{ name: 'street',		type: 'string' },
			{ name: 'city',			type: 'string' },
			{ name: 'state',		type: 'string' },
			{ name: 'zip',			type: 'string' },

			{ name: 'description',	type: 'string' },
			{ name: 'location_description', type: 'string' },
			{ name: 'history',		type: 'string' },
			{ name: 'facts',		type: 'string' },

			{ name: 'contact_name',	type: 'string' },
			{ name: 'phone',		type: 'string' },
			{ name: 'website',		type: 'string' },

			{ name: 'categories',	type: 'auto' },
			{ name: 'hazards',		type: 'auto' },
			{ name: 'images',		type: 'auto' },
			{ name: 'videos',		type: 'auto' },

			{ name: 'email',		type: 'string' },
			{ name: 'created',		type: 'datetime' },
			{ name: 'modified',		type: 'datetime' },
			{ name: 'ext',			type: 'auto' }
		],
		hasMany: [
			{
				associationKey	: 'categories',
				model			: 'WorkingWaterfronts.model.POICategory'
			},
			{
				associationKey	: 'hazards',
				model			: 'WorkingWaterfronts.model.POIHazard'
			},
			{
				associationKey	: 'images',
				model			: 'WorkingWaterfronts.model.POIImage'
			},
			{
				associationKey	: 'videos',
				model			: 'WorkingWaterfronts.model.POIVideo'
			}
		]
	}
});

Ext.define('WorkingWaterfronts.model.POIHazard', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'name',			type: 'string' },
			{ name: 'description',	type: 'string' }
		],
		belongsTo: 'WorkingWaterfronts.model.PointOfInterest'
	}
});

Ext.define('WorkingWaterfronts.model.POICategory', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'category',		type: 'string' }
		],
		belongsTo: 'WorkingWaterfronts.model.PointOfInterest'
	}
});

Ext.define('WorkingWaterfronts.model.POIImage', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'link',			type: 'string' },
			{ name: 'name',			type: 'string' },
			{ name: 'caption',		type: 'string' }
		],
		belongsTo: 'WorkingWaterfronts.model.PointOfInterest'
	}
});

Ext.define('WorkingWaterfronts.model.POIVideo', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'link',			type: 'string' },
			{ name: 'name',			type: 'string' },
			{ name: 'caption',		type: 'string' }
		],
		belongsTo: 'WorkingWaterfronts.model.PointOfInterest'
	}
});
