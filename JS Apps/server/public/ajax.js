var POXHR =  (function(){
    var xhr = new XMLHttpRequest();
    
    function xhrFetch(url, method, cb) {
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = handleResponse.bind(this, cb);
    }

    function handleResponse (cb) {
        if(xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.response);
            cb(data);
            
        } else if(xhr.readyState === 4 && xhr.status !== 200){

            console.log('Error downloading: status: '+xhr.status );
        }
    }

    return {
        fetch: xhrFetch
    };
}());
