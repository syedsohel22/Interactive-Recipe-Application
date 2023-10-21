const express = require("express");
const { test, testcon } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyUser");

const userRouter = express.Router();
userRouter.get("/", test);
userRouter.get("/hello", verifyToken, testcon);
userRouter.patch("/saved", verifyToken, savedRecipe);
userRouter.patch("/unsaved", verifyToken, unsavedRecipe);
module.exports = { userRouter };
