const Message = require("./model");
const { verifyToken } = require("./helper/auth");

exports.createMessage = async (req, res) => {
  try {
    const decodedToken = verifyToken(req, res);

    const senderUserId = decodedToken.id;
    const { receiverUserId } = req.params;

    const { messageBody } = req.body;

    const message = new Message({
      senderUserId,
      receiverUserId,
      messageBody,
    });

    await message.save();

    res.status(201).json({
      message: "Message created successfully",
      data: message
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the message",
    });
  }
};
