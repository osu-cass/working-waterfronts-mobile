Ext.define('WorkingWaterfronts.store.Location', {
	extend: 'Ext.data.Store',
	config: {
	model: 'WorkingWaterfronts.model.Locations',
	autoLoad: {
			callback: function() {
				var locationStore = Ext.getStore('Location');
				var locationIndex = locationStore.data.length;
				locationStore.insert(0,
					{
						name: '-- Anywhere --',
						location: locationIndex,
						is_not_filterable: true
					}
				);
				//console.log("Location Store: autoload result records:");
				//console.log(locationStore.data);
				locationStore.fireEvent('refresh');
			}
		},
		proxy: {
			type: 'ajax',
			url: 'http://seagrant-staging.osuosl.org/1/locations',
			noCache: false,
			pageParam: false,
			limitParam: false,
			startParam: false,
			reader: {
				type: 'json',
				rootProperty: 'locations'
			}
		}
	}
});
