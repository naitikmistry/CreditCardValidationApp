/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',
    
    launch: function () {
        var loggedIn= localStorage.getItem('personLoggedIn');
        console.log(loggedIn);

        if(loggedIn != null) {
            Ext.create({
                xtype: 'app-main'
            });
        }
        else {
            Ext.create({
                xtype: 'app-main'
            });
        }

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
