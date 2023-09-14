const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: false,
  },
  option2: {
    type: String,
    required: false,
  },
  option3: {
    type: String,
    required: false,
  },
  option4: {
    type: String,
    required: false,
  },
  rightOption: {
    type: String,
    required: false,
  },
  date_time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
