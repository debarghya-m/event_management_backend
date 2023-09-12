//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const Quiz = require("../models/quiz");

router.get("/", cors(), async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.json(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  const quiz = new Quiz({
    userId: req.body.userId,
    date_time: req.body.date_time,
    question: req.body.question,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option2,
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
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(quiz);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const quiz = await Quiz.deleteOne({ _id: req.params.id });
    res.json({
      message: "deleted",
    });
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
