const express = require("express");
const { test, testcon } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyUser");

const userRouter = express.Router();
userRouter.get("/", test);
userRouter.get("/hello", verifyToken, testcon);

module.exports = { userRouter };
