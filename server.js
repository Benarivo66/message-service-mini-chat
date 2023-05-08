const express = require('express');
const http = require('http');
const socketIoClient = require('socket.io-client');
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const messageRoutes = require("./src/routes");
require("dotenv").config()
const { init } = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", messageRoutes);

init();

const server = http.createServer(app);

const userMSocket = socketIoClient(`http://localhost:${process.env.SERVER_PORT}`);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`message-service is running on port ${PORT}`);
});

userMSocket.on('connect', () => {
  console.log('Connected to user-service');

  userMSocket.on('user-connected', (data) => {
    console.log(`Received message from user-service: ${data.message}`);
  });
});

userMSocket.on('disconnect', () => {
  console.log('Disconnected from user-service');
});


