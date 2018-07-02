var LabelTransalation = (function(){
    var cache= null;

    function fetchCache() {
        var promise = zebutils.ServerPromise("","",{});
        promise.then(function(resultSet) {
            //parse logic
            cache = resultSet;
        });
    }

    function getCache() {
        return cache;
    }

    function translate(labels) {
        if(! (labels instanceof Array)){
            return match(labels);
        }
        var translatedLabels = [];
        labels.forEach(function(label, index){
            translatedLabels.push(match(label));
        });
        return translatedLabels;
    }

    function match(label){
        var match = cache[label];
        if(!match){
            console.log('Label translation not found for Label: "'+ label + '"')
        }
        return match || "";
    }

    return {
        fetchCache: fetchCache,
        getCache: getCache,
        translate: translate
    }

})();