const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connection } = require("./config/db");
dotenv.config();
const port = process.env.PORT || 8008;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, async () => {
  try {
    await connection;
    console.log(`server listening on port ${port}`);
    console.log(`connected to DB`);
  } catch (error) {
    console.log(error);
  }
});
