const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  quizId: {
    type: String,
    required: false,
  },
  date_time: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  rightOption: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
