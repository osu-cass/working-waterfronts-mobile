// Creates global objects that contain test data.
// This is to be kept up-to-date with the API

// Assign the Global Variable
window.TestData = {};

TestData.PointOfInterestArray = [{
	name					: 'The Gates of Hell',
	description 			: '',
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
	lat						: 44.7889,
	lng						: 666,
	location_description	: '',
	// meta
	created					: Date.now(),
	updated					: Date.now(),
	ext						: '',
	id						: 1
}];

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
	title: 'Test',
    text: 'test',
    value: 1,
    products: 'test prod',
    Latlng: null,
    id: 1,
    address: 'this is a test address',
    desc: 'test description'
},
{
	title: 'Test2',
	text: 'New test stuff2',
	value: 2,
	products: 'test prod2',
	Latlng: null,
	id: 2,
	address: 'new test address2',
	desc: 'test description2'
}
];
