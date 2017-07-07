/**
 * Created by Naitik on 6/24/2017.
 */

Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        localStorage.setItem('personLoggedIn', true);

        this.getView().destroy();

        Ext.create({
           xtype: 'app-main'
        });
    }
});