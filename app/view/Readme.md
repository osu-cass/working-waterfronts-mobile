# Views

* Home.js  
	The Home page is the first page users will encounter when they start interacting with the application. On this page the user can search for a vendor/item by their location within a specified range. Users can also search by a pre-specified location, or search by product and then sort their searches by either vendor or product.

* ListView.js  
	The ListView page displays a list of the userss queries as well as a map with pins relating to those list items. Users can then select list items or choose to see more info on the pins in order to view more detailed information on their queries.

* Detail.js  
	The Detail page displays more information on the vendor/product the user has chosen to find out more about, such as what products a specific vendor carries or which vendors carry a specific product. The detail page will also contain more information such as vendor location and hours or product details such as price and availability.

* Info.js  
	The Info page is a menu of educational content options that provides links to information about the products such as how they are caught, packaged, their history, how to prepare them, and when they are in season.

* Specific.js  
	The Specific page displays a menu item selected on the Info page.

* Map.js  
	The Map page creates a Google map using the Google maps API, this map can then be inserted into any view using the xtype: SeaGrantMap.
