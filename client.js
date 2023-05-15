const socketIoClient = require("socket.io-client");

exports.connectUserService = () => {
  const userMSocket = socketIoClient(
    `http://localhost:${process.env.SERVER_PORT}`
  );

  userMSocket.on("connect", () => {
    console.log("Connected to user-service");

    userMSocket.on("user-connected", (data) => {
      console.log(`Received message from user-service: ${data.message}`);
    });
  });
};
