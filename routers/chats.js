//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const Chat = require("../models/chat");

router.get("/", cors(), async (req, res) => {
  try {
    const chats = await Chat.find();
    res.json(chats);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const chats = await Chat.findById(req.params.id);
    res.json(chats);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  const chats = new Chat({
    userId: req.body.userId,
    date_time: req.body.date_time,
    message: req.body.message,
    roomId: req.body.roomId,
    quizId: req.body.quizId,
    rightOption: req.body.rightOption,
    img: req.body.img,
  });
  try {
    const t1 = await chats.save();
    res.json(t1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", cors(), async (req, res) => {
  try {
    const chats = await Chat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(chats);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const chats = await Chat.deleteOne({ _id: req.params.id });
    res.json({
      message: "deleted",
    });
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
