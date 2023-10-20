const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connection } = require("./config/db");
dotenv.config();
const port = process.env.PORT || 8008;

const userRouter = require("./routes/user.routes");
const { authRouter } = require("./routes/auth.routes");
/*******************************************************************************************************************/
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
/*******************************************************************************************************************/
app.listen(port, async () => {
  try {
    await connection;
    console.log(`server listening on port ${port}`);
    console.log(`connected to DB`);
  } catch (error) {
    console.log(error);
  }
});
