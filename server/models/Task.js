const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;
const taskScheme = new Schema({
  title: {
    type: String,
    minlength: 3,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Task", taskScheme);
