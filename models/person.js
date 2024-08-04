const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },
  moobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    require: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
