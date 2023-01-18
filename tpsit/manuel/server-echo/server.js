const WebSocket = require("ws"); // per includere un modulo usiamo
const PORT = 5000;
const wsServer = new WebSocket.Server({ 
    port: PORT
});
console.log("Il Server è attivo e aspetta pacchetti sulla porta " + wsServer.options.port );

wsServer.on("connection" , function(socket) 
{
    console.log("un client si e connesso , i dati del client sono:");
    let operazione="";
   
    socket.on("message", function(msg)

    {
        let res=1;
      console.log("messaggio del client"+ msg);
      if(isNaN(msg)==false)
      {

      
      if(operazione="moltiplica");
        
        {
           
            socket.send(msg*msg);
        }
         if (operazione="raddoppia");
        {
            
            socket.send(msg*2);
        }
         if(operazione=="fattoriale");

        {
            for(i=msg;i>1;i--)
            {
                res=res*i;
            }
            console.log(res);
            socket.send(res);
        }
      
    }
       else if(msg=="fattoriale" ||msg=="raddoppia" ||msg=="moltiplica") 
    operazione=msg;
    socket.send("operazione scelta:"+msg)
   
   })
});
// console.log(wsServer.options.port);
