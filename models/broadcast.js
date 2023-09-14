const mongoose = require("mongoose");

const broadcastSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date_time: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Broadcast", broadcastSchema);
