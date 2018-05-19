export const WeatherAPI = {};

WeatherAPI.getLondonWeather = function () {
    return fetch(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`, {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        mode: 'cors',
        method: 'GET'
    })
}

WeatherAPI.xhrGetLondonWeather = function(){
    var promise = new Promise((promise_resolve) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (resp) => {
            promise_resolve(JSON.parse(xhr.response));
        });
        xhr.open('GET', `http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`);
        xhr.send();
    });
   
    return promise;
}