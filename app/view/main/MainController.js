/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
   //
    // requires: ['MyApp.view.main.CardView'],
    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Are you sure?', 'This will re-direct you to payment conformation page', 'onConfirm', this, record);
        Ext.create({
            xtype: 'visacard'
        });
        console.log(record);
        Ext.getCmp('makeDisplay').setValue('Purchasing ' + record.data.make);

        //document.getElementById('makeDisplay').setHtml(record.data.make);
    },

    onSubmitClick: function () {
        var cardValue = Ext.getCmp('cardValue').getValue();
        var newCardValue = cardValue.replace(/\D/g,'');
        //debugger;
        var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var masterCard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        var americanExpress = /^3[47][0-9]{13}$/;
        var arr = [visa, masterCard, americanExpress];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].test(newCardValue)) {
                console.log('valid ' + arr[i] + 'card');
                switch (i) {
                    case 0:
                        Ext.Msg.alert('Info', 'Valid VISA card');
                        console.log('valid visa card');
                        break;

                    case 1:
                        Ext.Msg.alert('Info', 'Valid MASTERCARD card');
                        console.log('valid master card');
                        break;
                        //return false;
                    case 2:
                        Ext.Msg.alert('Info', 'Valid AMERICAN EXPRESS card');
                        console.log('valid amex card');
                        break;
                        //return false;
                } //switch case end
                return false;
            } // if block- end
            else {
                Ext.Msg.alert('Error', 'Card not valid');
            } // else bloack - end
        } // for loop -end
    },
    onConfirm: function (choice, rec) {
        console.log(rec);
        if (choice === 'yes') {

            Ext.create({
                xtype: 'visacard'
            });
        }
    },

    onClickButton: function () {
        localStorage.removeItem('personLoggedIn');

        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});
