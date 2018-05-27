const WebSocketServer = require('websocket').server;
const express = require('express');
const http = require('http');
const app = express()
const port = 3000


const myServer = http.createServer((req, resp)=>{

});
myServer.listen(8084, 'localhost');

const mySocket = new WebSocketServer({
    httpServer: myServer
});

mySocket.on('request', (request)=>{
    var connection = request.accept('echo-protocol', request.origin);
    connection.on('message', function(message) {
        console.log(message);
        connection.sendUTF('You have sent ' + message.utf8Data);
    });
})