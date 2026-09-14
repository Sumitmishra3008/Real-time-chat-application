import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    setInterval(() => console.log("New client connected"), 1000);
    socket.send("Welcome to the WebSocket server!");
    socket.on("message", (message) => {
        console.log(`Received message: ${message}`);
        socket.send(`You said: ${message}`);
    });
})