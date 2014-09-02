#Siesta Testing

* Necessary Siesta files

index.html
	The index.html contains the layout and design of the Siesta testing environment.

index.js
	This file defines all of your preloads and declares your tests. One very important note on this file, your preloads must be defined in the correct order or you will get errors that will make your tests fail. ORDER OF PRELOADS IS KEY!

siesta-2.0.8-lite
	This folder contains all of the Siesta backend files that we will need for testing using Siesta.

* Test files

home_test.t.js
	This file tests that all of the elements on our homepage exist and that they send the correct data to the correct location in the controller when they fire events.

list_test.t.js
	This file tests that all of the elements on our list page exist and that they send the correct data to the correct location in the controller when they fire events.

detail_test.t.js
	This file tests that all of the elements on our detail page exist and that they send the correct data to the correct location in the controller when they fire events.

info_test.t.js
	This file tests that all of the elements on our info page exist and that they send the correct data to the correct location in the controller when they fire events.

specific_test.t.js
	This file tests that all of the elements on our specific page exist and that they send the correct data to the correct location in the controller when they fire events.

