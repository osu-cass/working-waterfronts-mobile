Ext.define('WorkingWaterfronts.util.Search', {

	singleton: true,

	options: {
		position	: null,
		distance	: null,
		location	: null,
	},

	buildFilter: function () {
		var options = this.options;
		console.log('buildFilter with options:', options);
	}

});