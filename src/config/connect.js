const mongoose = require("mongoose");
require("dotenv/config");

const connectDB = mongoose
  .connect("mongodb://127.0.0.1:27017/DeepDive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log("Connected Successful"))
  .catch((err) => console.log(err));

module.exports = connectDB;
