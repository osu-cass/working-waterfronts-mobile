/*
	Depth-1 Object Equivilence Test for Sencha Models

	For each key and value in the expected object,
	there should be matching key and value in the actual.
*/

window.Helper = {};

Helper.compareModelToDefinition = function (definition, model) {

	expect(definition).toBeDefined();
	expect(model).toBeDefined();
	expect(model.get).toBeDefined();

	for (var k in definition) {
		expect(model.get(k)).toBeDefined();
		expect(model.get(k)).toEqual(definition[k]);
	}

};
