const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connection = mongoose.connect(process.env.MONGO);
//   .then(() => {
//     console.log(`connected to MongoDB`);
//   })
//   .catach((err) => {
//     console.log(err, err.message);
//   });
module.exports;
{
  connection;
}
