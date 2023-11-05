const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connection } = require("./config/db");
dotenv.config();
const port = process.env.PORT || 8008;
const cookieParser = require("cookie-parser");
const { userRouter } = require("./routes/user.routes");
const { authRouter } = require("./routes/auth.routes");

const path = require("path");
/*******************************************************************************************************************/
__dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/users", userRouter);

app.use("/api/v1/auth", authRouter);
// testing
app.get("/api/test", (req, res) => {
  res.send({ message: "I am working" });
});

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
