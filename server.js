require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");

// Import WebSocket setup
const setupWebSocket = require("./websocket/websocket");

// Create Express App
const app = express();

// Create HTTP Server
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// Health Route
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    });
});

// Initialize WebSocket
setupWebSocket(server);

// Start Server
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("=================================");
    console.log(" Server Started Successfully");
    console.log("=================================");
    console.log(`Server : http://localhost:${PORT}`);
    console.log("=================================");
});
