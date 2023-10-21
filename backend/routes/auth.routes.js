const express = require("express");
const {
  register,
  login,
  logout,
  google,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/google", google);

module.exports = { authRouter };
