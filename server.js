const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();

const messageRoutes = require("./src/routes");
const { init } = require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", messageRoutes);

init(app);

