//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const Broadcast = require("../models/broadcast");

router.get("/", cors(), async (req, res) => {
  try {
    const broadcasts = await Broadcast.find();
    res.json(broadcasts);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const broadcasts = await Broadcast.findById(req.params.id);
    res.json(broadcasts);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  const broadcasts = new Broadcast({
    userId: req.body.userId,
    date_time: req.body.date_time,
    message: req.body.message,
    img: req.body.img,
  });
  try {
    const t1 = await broadcasts.save();
    res.json(t1);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", cors(), async (req, res) => {
  try {
    const broadcasts = await Broadcast.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(broadcasts);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const broadcasts = await Broadcast.deleteOne({ _id: req.params.id });
    res.json({
      message: "deleted",
    });
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
