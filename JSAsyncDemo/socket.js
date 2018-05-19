
export const SocketAPI = {};

SocketAPI.init = function() {
    SocketAPI.instance = new WebSocket("ws://localhost:8084", "echo-protocol");
    SocketAPI.instance.onopen = function (event) {
        SocketAPI.instance.send("Here's some text that the server is urgently awaiting!"); 
        SocketAPI.instance.onmessage = SocketAPI.RenderMessage;
      };
      SocketAPI.BindSend();
}

SocketAPI.RenderMessage = function(message){
    const elem = document.createElement('div');
    elem.innerHTML = message.data;
    document.body.appendChild(elem);
}

SocketAPI.BindSend = function(){
    document.getElementById('sendMessage').addEventListener("click",((e)=>{
        var message = document.getElementById('chatMessage').value;
        SocketAPI.instance.send(message);
        document.getElementById('chatMessage').value= "";
    }));
}