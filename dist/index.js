"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const wss = new ws_1.default.Server({ port: 8080 });
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (message) => {
        if (message.toString() === "ping") {
            ws.send("pong");
        }
    });
});
