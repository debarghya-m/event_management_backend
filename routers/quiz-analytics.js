//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const QuizAnalytics = require("../models/quizAnalytics");

router.get("/", cors(), async (req, res) => {
  try {
    const quiz = await QuizAnalytics.find();
    res.json(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const quiz = await QuizAnalytics.findById(req.params.id);
    res.json(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  const quiz = new QuizAnalytics({
    userName: req.body.userName,
    date_time: req.body.date_time,
    answer: req.body.answer,
    quizId: req.body.quizId,
  });
  try {
    const t1 = await quiz.save();
    res.json(t1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", cors(), async (req, res) => {
  try {
    const quiz = await QuizAnalytics.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const quiz = await QuizAnalytics.deleteOne({ _id: req.params.id });
    res.json({
      message: "deleted",
    });
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
