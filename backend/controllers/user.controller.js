const test = (req, res) => {
  res.json({
    message: "welcome to Yummy recipes server..! and thank you!",
  });
};

const testcon = (req, res, next) => {
  try {
    res.json({
      message:
        "welcome to Yummy recipes server..! and thank you YES cookies are working",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { test, testcon };
