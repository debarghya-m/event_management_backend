const mongoose = require("mongoose");

const quizAnalyticsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  quizId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("QuizAnalytics", quizAnalyticsSchema);
