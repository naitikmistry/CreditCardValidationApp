/**
 * Created by Naitik on 6/24/2017.
 */
Ext.define('MyApp.view.main.CardView', {
    extend: 'Ext.window.Window',
    xtype: 'visacard',

    requires: [
        'MyApp.view.main.MainController',
        'Ext.form.Panel'
    ],
    controller: 'main',
    bodyPadding: 10,
    title: 'Card payment',
    closable: true,
    autoShow: true,
    fullscreen: true,
    height: '100%',
    width: '100%',

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'displayfield',
                itemId: 'makeDisplay',
                id: 'makeDisplay',
                hideEmptyLabel: false,
                value: '',
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Enter Credit Card number',
                itemId: 'cardValue',
                id: 'cardValue',
                allowBlank: false,
                width: '100%',

            },
            {
                xtype: 'button',
                formBind: true,
                text: 'Submit',
                hideEmptyLabel: false,
                listeners: {
                    click: 'onSubmitClick'
                }
            }
        ],

    }


});
