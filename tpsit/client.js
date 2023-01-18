const WebSocket = require("ws"); // per includere un modulo usiamo

const ServerAddress="ws://127.0.0.1:5000";

const socket = new WebSocket(ServerAddress);

socket.on("message", function (msg) {
   console.log("hai ricevuto:" + msg); 
});