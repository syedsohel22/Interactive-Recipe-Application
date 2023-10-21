const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email: email });

    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY);

    const { password: hashedPassword, ...rest } = validUser._doc;

    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("auth_token", token, { expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token").status(200).json("logout success..!");
};

module.exports = { register, login, logout };
