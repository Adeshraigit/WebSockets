import WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("Client connected");
    

    ws.on("message", (message) => {
        if(message.toString() === "ping") {
            ws.send("pong");        
        }
    });
}); 