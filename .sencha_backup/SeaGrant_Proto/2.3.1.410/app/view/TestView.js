Ext.define("SeaGrant_Proto.view.TestView",{
    extend: "Ext.Panel",
    xtype: "test",
    requires: [
        "Ext.dataview.List"
    ],

    config: {
        title: "Test",
        iconCls: "team",
        layout: "fit",
        items:[
            {
                xtype: "titlebar",
                title: "Test",
                docked: "top"
            },
            {
                xtype: "list",
                store: "Vendor",
                itemTpl: "City: {city}  Name: {name}"
                // itemTpl: "Title: {title}"
            }
        ]
    }
});