Ext.define('WorkingWaterfronts.util.Search', {

	singleton: true,

	requires: ['WorkingWaterfronts.util.Geography'],

	options: {
		position	: null,
		distance	: null,
		location	: null
	},

	constructor: function () { },

	/* ------------------------------------------------------------------------
		Filter Definition
	------------------------------------------------------------------------ */

	buildFilterFunction: function () {
		var singleton = WorkingWaterfronts.util.Search;
		var Geo = WorkingWaterfronts.util.Geography;
		var filter = function (pointOfInterestRecord) {
			var pos		= singleton.options.position;
			var dist	= singleton.options.distance;
			var loc		= singleton.options.location;
			var poi		= pointOfInterestRecord;

			// If position and distance are set, filter on those.
			if (singleton.canFilterByDistance()) {
				var lat1		= pos.coords.latitude;
				var lng1		= pos.coords.longitude;
				var lat2		= poi.get('lat');
				var lng2		= poi.get('lng');
				var dMax	= Geo.standardizeDistance(dist);
				var dCurr	= Geo.getDistance(lat1,lng1,lat2,lng2);
				var isNear	= dMax - dCurr >= 0;
				return isNear;
			}

			// If location is set, filter on that instead.
			if (singleton.canFilterByLocation()) {
				return loc.name.toLowerCase() === poi.get('city').toLowerCase();
			}

			// Otherwise, include everything.
			return true;
		};
		return filter;
	},

	// Call only once!
	applyFilterToStore: function (store) {
		var singleton = WorkingWaterfronts.util.Search;
		var filterFunction = singleton.buildFilterFunction();
		var criteria = new Ext.util.Filter({
			filterFn	: filterFunction,
			root		: 'data'
		});

		store.clearFilter();
		store.filter(criteria);
	},

	/* ------------------------------------------------------------------------
		Utility and Helper Functions
	------------------------------------------------------------------------ */

	canFilterByDistance: function () {
		var opt = this.options;
		var hasPosition = !!opt.position && !!opt.position.coords;
		var hasDistance = !!opt.distance && !!opt.distance.value;
		return hasPosition && hasDistance;
	},

	canFilterByLocation: function () {
		var opt = this.options;
		var isValidLocation = !!opt.location && !opt.location.is_not_filterable;
		return !this.canFilterByDistance() && isValidLocation;
	}

});
