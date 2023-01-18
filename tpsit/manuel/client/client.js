const WebSocket = require("ws"); // per includere un modulo usiamo
const promt = require('prompt-sync')({sigint: true});

const ServerAddress="ws://127.0.0.1:5000";

const socket = new WebSocket(ServerAddress);

socket.on("message", function (msg) {
   const messaggio=promt("metti un messaggio: "); 
   socket.send(messaggio);
});

socket.on("message", function (){
   console.log("hai ricevuto dal serve:"+msg)
   const txt=prompt("inserisci un messaggio");
   socket.send(txt);
   
});

