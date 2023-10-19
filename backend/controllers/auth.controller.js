const User = require("../models/user.model");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });  
  try {
    await newUser.save();
    res.json({ status: "user is created succesfuly" });
  } catch (error) {
    res.json({ error: error, message: error.message });
  }
};

module.exports = { register };
