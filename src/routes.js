const express = require('express');
const router = express.Router();

const { createMessage } = require("./controller");

router.post("/:receiverUserId", createMessage);
router.get("/", (req, res) => res.send("Welcome to Message Mini Chat Service"))

module.exports = router;
