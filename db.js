const mongoose = require("mongoose");
const mongoUrl = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected successfully");
});

db.on("disconnected", () => {
  console.log("disconnected from the mongodb");
});

db.on("error", (err) => {
  console.log("mongodb error" + err);
});

module.exports = db;
