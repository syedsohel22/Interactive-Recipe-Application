const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8008;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
