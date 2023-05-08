const express = require('express');
const router = express.Router();

const { createMessage } = require("./controller");

router.post("/:receiverUserId", createMessage);

module.exports = router;
