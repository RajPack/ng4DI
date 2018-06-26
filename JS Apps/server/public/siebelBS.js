ServerPromise = (function () {
     function BSCall(BSName, BSMethod, INp) {
        var dfd = void 0,
            config = void 0,
            serv = void 0;
        dfd = $.Deferred();
        config = { async: true, cb: BSCB.bind(dfd) };
        serv = SiebelApp.S_App.GetService(BSName);
        serv.InvokeMethod(BSMethod, INp, config);
        return dfd.promise();
    };
    function BSCB(MethodName, INp, OUTp) {
        var resultSet = void 0,
            orig = { dataArr: arguments };
        try {
            resultSet = OUTp.GetChildByType("ResultSet");
            this.resolve(resultSet, orig);
        } catch (e) {
            console.log(e);
            this.reject(e, orig);
        }
    }
    return BSCall;
}());


//usage
var ps = SiebelApp.S_App.NewPropertySet();  
window.translationPromise = window.translationPromise || ServerPromise("Zebra BS 1" , "getTranslations", ps );

window.translationPromise.then(function(transationDataPS, args) {
    //chart api
    //render here 
});

