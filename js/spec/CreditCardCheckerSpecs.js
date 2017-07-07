describe ("ExtJS Question App Test Suite", function () {
    var mainPanel = null;
    var questionStore = null;
    var questionStore = null;
    var storeLength = -1;
    var controller = null;
    /* Setup method to be called before each Test case.*/
    beforeEach (function () {
        // Initializing the mainPanel.
        mainPanel = Ext.create ('MyApp.view.main.MainModel');
        questionStore = Ext.StoreManager.lookup ('Personnel');
        controller = Ext.create ('MyApp.view.main.MainController');
        storeLength = questionStore.data.items.length;
    }); // before each

    /* Test if View is created Successfully.*/
    it ('Main View is loaded', function () {
        expect (mainPanel != null).toBeTruthy ();
    });

    /* Test if store is loaded successfully.*/
    it ('Store shouldn’t be null', function () {
        expect (questionStore != null).toBeTruthy();
    });

    /* Test controller is initialized successfully.*/
    it ('Controller shouldn’t be null', function () {
        expect (controller != null).toBeTruthy();
    });

    /* Test if Grid in MainPanel is loaded successfully.*/
    it ('Grid should be loaded', function () {
        expect (Ext.getCmp ("app-main") != null).toBeTruthy ();
    });

    /* Test if Grid in MainPanel is loaded successfully.*/
    it ('Store has items', function () {

        expect (questionStore.data.items.length).toBe (storeLength);
    });

    /* Test if new item is added to store.*/
    it ('New item should be added to store', function () {
        var record = Ext.create ("MyApp.model.Personnel");
        record.id = 1;
        record.question = 'Credit Card number';
        questionStore.add (record);
        expect (questionStore.data.items.length).toBe (storeLength + 1);
        questionStore.removeAt (storeLength);
    });

    /* Item should be removed from store via controller.*/
    it ('Item should be removed from store', function () {
        var record = Ext.create ("MyApp.model.Personnels");
        record.id = 1;
        record.question = 'Credit Card number';
        questionStore.add (record);

        /* Removing item from controller API.*/
        controller.deleteQuestionFromStore(record);
        questionStore.removeAt (storeLength);
        expect (questionStore.data.items.length).toBe (storeLength);
    });

});