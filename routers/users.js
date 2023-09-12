//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
//handle shcema
const User = require("../models/user");

router.get("/", cors(), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.get("/:id", cors(), async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.post("/", cors(), async (req, res) => {
  const isNew = await User.isThisUserNameInUse(req.body.userName);
  if (!isNew)
    return res.json({ success: false, message: "userName already in use" });
  const user = new User({
    name: req.body.name,
    userName: req.body.userName,
    password: req.body.password,
    profilePicture: req.body.profilePicture,
    status: req.body.status,
    createdAt: req.body.createdAt,
    isAdmin: req.body.isAdmin,
  });
  try {
    const u1 = await user.save();
    res.json({ success: true, data: u1 });
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.patch("/:id", cors(), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // req.body.name ? (user.name = req.body.name) : null;
    // req.body.userName ? (user.userName = req.body.userName) : null;
    // req.body.password ? (user.password = req.body.password) : null;
    // req.body.profilePicture
    //   ? (user.profilePicture = req.body.profilePicture)
    //   : null;
    // req.body.status ? (user.status = req.body.status) : null;
    // req.body.isAdmin ? (user.isAdmin = req.body.isAdmin) : null;
    // const u1 = await user.save();
    res.send(user);
  } catch (err) {
    res.send("Error: " + err);
  }
});

router.delete("/:id", cors(), async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.json({
      message: "deleted",
    });
  } catch (err) {
    res.send("Error: " + err);
  }
});

module.exports = router;
