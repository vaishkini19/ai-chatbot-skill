const WebSocket = require("ws");

const askAI = require("../services/aiService");


function setupWebSocket(server) {


    const wss = new WebSocket.Server({
        server
    });


    console.log("WebSocket Server Initialized");



    wss.on("connection", (ws) => {


        console.log("New Client Connected");


        ws.send("Welcome to AI ChatBot");



        ws.on("message", async (message) => {


            const userMessage = message.toString();


            console.log("User:", userMessage);



            const aiResponse = await askAI(userMessage);



            console.log("AI:", aiResponse);



            ws.send(aiResponse);


        });




        ws.on("close", () => {


            console.log("Client Disconnected");


        });




        ws.on("error", (error) => {


            console.log("WebSocket Error:", error);


        });



    });



}
module.exports=setupWebSocket;

