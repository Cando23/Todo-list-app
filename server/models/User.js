const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
  login: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userScheme);
