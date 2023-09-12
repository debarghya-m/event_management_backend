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
    if (user && user.isAdmin) {
      if (user.password === req.body.password)
        res.json({ success: true, message: "login successful", data: user });

      res.json({ success: false, message: "wrong credentials" });
    } else {
      res.json({ success: false, message: "wrong credentials" });
    }
  } catch (err) {}
});

module.exports = router;
