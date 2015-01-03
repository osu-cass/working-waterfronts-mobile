// Creates global objects that contain test data.
// This is to be kept up-to-date with the API

// Assign the Global Variable
window.TestData = {};

// Please don't judge me.
// This function adds a get() method to the object to
// make it look like a store model/record.
TestData.modelify = function (obj) {
	obj = JSON.parse(JSON.stringify(obj));
	obj.get = function (key) { return this[key]; };
	return obj;
};

TestData.PointOfInterestArray = [
	{
		name					: 'Somewhere Within Reach',
		description 			: 'Where you are!',
		// contact
		email 					: '',
		website					: '',
		phone					: '',
		contact_name			: '',
		// location
		street					: '',
		city					: '',
		state					: '',
		zip						: '',
		lat						: 44.0,
		lng						: 120.0,
		location_description	: '',
		// meta
		created					: Date.now(),
		updated					: Date.now(),
		ext						: ''
	},
	{
		name					: 'The Limit Of Visiblity',
		description 			: 'About 80km away from Somewhere',
		// contact
		email 					: '',
		website					: '',
		phone					: '',
		contact_name			: '',
		// location
		street					: '',
		city					: 'Coos Bay',
		state					: '',
		zip						: '',
		lat						: 44.0,
		lng						: 121.0,
		location_description	: '',
		// meta
		created					: Date.now(),
		updated					: Date.now(),
		ext						: ''
	},
	{
		name					: 'A Place Beyond Sight',
		description 			: 'About 136km away from Somewhere',
		// contact
		email 					: '',
		website					: '',
		phone					: '',
		contact_name			: '',
		// location
		street					: '',
		city					: 'Newport',
		state					: '',
		zip						: '',
		lat						: 45.0,
		lng						: 121.0,
		location_description	: '',
		// meta
		created					: Date.now(),
		updated					: Date.now(),
		ext						: ''
	}
];

TestData.VendorArray = [
	{
		city					: 'Newport',
		updated					: true,
		description				: 'a place with stuff',
		zip						: '97523',
		created					: true,
		ext						: false,
		location_description	: 'its a place with a thing',
		lng						: '45',
		lat						: '45',
		email					: 'user@email.com',
		website					: 'site.com',
		phone					: '555-555-5555',
		state					: 'OR',
		street					: 'corner street',
		products				: ['fish', 'shellfish', 'more fish'],
		contact_name			: 'John Doe',
		story					: 'see other side',
		name					: 'fish place'
	},
	{
		city					: 'Coos Bay',
		updated					: false,
		description				: 'stuff',
		zip						: '97420',
		created					: true,
		ext						: false,
		location_description	: 'its a place with a thing2',
		lng						: '47',
		lat						: '47',
		email					: 'user@email.com2',
		website					: 'site.com2',
		phone					: '555-555-2222',
		state					: 'OR',
		street					: 'corner street2',
		products				: ['fish', 'shellfish', '2'],
		contact_name			: 'J.D. Smith',
		story					: 'none',
		name					: 'fishy'
	}
];

TestData.LocationArray = [
	{
		location				: 1,
		name					: 'Newport'
	},
	{
		location				: 2,
		name					: 'Coos Bay'
	}
];
