Ext.define('WorkingWaterfronts.model.PointsOfInterest', {
	extend: 'Ext.data.Model',
	config: {
		fields:[
			{ name: 'name',			type: 'string' },
			{ name: 'description',	type: 'string' },

			{ name: 'email',		type: 'string' },
			{ name: 'website',		type: 'string' },
			{ name: 'phone',		type: 'string' },
			{ name: 'contact_name',	type: 'string' },

			{ name: 'street',		type: 'string' },
			{ name: 'city',			type: 'string' },
			{ name: 'state',		type: 'string' },
			{ name: 'zip',			type: 'string' },
			{ name: 'lat',			type: 'number' },
			{ name: 'lng',			type: 'number' },
			{ name: 'location_description', type: 'string' },

			{ name: 'created',		type: 'datetime' },
			{ name: 'updated',		type: 'datetime' },
			{ name: 'ext',			type: 'string' },
			{ name: 'id',			type: 'number' }
		]
	}
});
