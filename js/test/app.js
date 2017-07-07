Ext.Loader.setConfig ({enabled: true});

// Loading different components like controller, model, view..
Ext.application ({
    controllers:[ 'MainController' ],
    models: ['MainModel'],
    stores: ['Personnel'],
    views: ['CardView', 'Main'],
    autoCreateViewport: false,
    name: 'MyApp',
    launch: function () {
        debugger;
        var jasmineEnv = jasmine.getEnv ();
        jasmineEnv.updateInterval = 1000;
        var htmlReporter = new jasmine.HtmlReporter ();
        jasmineEnv.addReporter (htmlReporter);
        jasmineEnv.execute ();
    }
});