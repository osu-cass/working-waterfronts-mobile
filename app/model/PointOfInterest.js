Ext.define('WorkingWaterfronts.model.PointOfInterest', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'name',			type: 'string' },
			{ name: 'alt-name',		type: 'string' },
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

			{ name: 'hazards',		type: 'auto' },
			{ name: 'categories',	type: 'auto' },
			{ name: 'images',		type: 'auto' },
			{ name: 'videos',		type: 'auto' },

			{ name: 'email',		type: 'string' },
			{ name: 'email',		type: 'string' },
			{ name: 'email',		type: 'string' },
			{ name: 'ext',			type: 'auto' },
		],
		hasMany: [
			{
				associationKey	: 'hazards',
				model			: 'WorkingWaterfronts.model.POIHazard',
				name			: 'hazards'
			},
			{
				associationKey	: 'categories',
				model			: 'WorkingWaterfronts.model.POICategory',
				name			: 'categories'
			},
			{
				associationKey	: 'images',
				model			: 'WorkingWaterfronts.model.POIImage',
				name			: 'images'
			},
			{
				associationKey	: 'videos',
				model			: 'WorkingWaterfronts.model.POIVideo',
				name			: 'videos'
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
