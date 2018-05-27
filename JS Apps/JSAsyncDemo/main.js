import { MessageAPI } from './MessageAPI.js';
import { SocketAPI } from './socket.js';
import { WeatherAPI } from './FetchWeath.js'

document.addEventListener("DOMContentLoaded", init);


function init() {
    console.log("Demo initiated");
    const messagePromise = MessageAPI.getServerMessage();
    updateDOMWithMessge(messagePromise);


    messagePromise.then((resp) => {
        document.body.appendChild(resp);
    }, (e) => {
        const elem = document.createElement('div');
        elem.innerHTML = e.toString();
        document.body.appendChild(elem);

    });

    SocketAPI.init();
    updateWeather();
    logWeather();
}



async function updateDOMWithMessge(messagePromise) {
    console.log("before trigger");
    try {
        var message = await messagePromise;
    } catch (e) {
        var message = e.toString();
    }
    console.log("triggered");
    var elem = document.createElement("div");
    elem.innerHTML = message;
    document.body.appendChild(elem);
}

function numberlogger() {
    var n = 0;
    setInterval(() => {
        console.log(n++); Request
    }, 100);
}


function updateWeather() {
    var weatherPromise = WeatherAPI.getLondonWeather();
    var weatherData = '';
    weatherPromise.then((resp) => {
        resp.json().then((data) => {
            console.log(data.main)
            for (var key in data.main) {
                console.log(key)
                weatherData += `${key}: ${data.main[key]} </br>`;
            }
            const elem = document.createElement('div');
            elem.innerHTML = weatherData;
            document.body.appendChild(elem);
        })
    });

}

async function logWeather() {
    var data = await WeatherAPI.xhrGetLondonWeather();
    const elem = document.createElement('div');
    elem.innerHTML = JSON.stringify(data.main);
    document.body.appendChild(elem);
}