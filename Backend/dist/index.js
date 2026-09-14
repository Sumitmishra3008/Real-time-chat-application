"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    setInterval(() => console.log("New client connected"), 1000);
    socket.send("Welcome to the WebSocket server!");
    socket.on("message", (message) => {
        console.log(`Received message: ${message}`);
        socket.send(`You said: ${message}`);
    });
});
