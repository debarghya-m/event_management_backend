//import libraries
const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
//handle shcema
const User = require("../models/user");

router.post("/", cors(), async (req, res) => {
  try {
    let uname = req.body.userName;
    const user = await User.findOne({ userName: uname });
    if (user) {
      res.json({ success: true, message: "login successful", data: user });
    } else {
      res.json({ success: false, message: "wrong username" });
    }
  } catch (err) {}
});

module.exports = router;
