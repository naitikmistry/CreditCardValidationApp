Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'person',
    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

   /* data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},*/
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../inventory.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    listeners: {
        load: function (e) {

            Ext.getStore('person').each(function (record) {
                //console.log(record.data)
               /* Ext.getCmp('myList').add({
                    html: '<img src=' + record.data.picture + '/>'

                });*/
            }, this);
        }

    }
});
