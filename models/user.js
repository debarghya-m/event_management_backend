const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: String,
    required: false,
  },
});

userSchema.statics.comparePassword = async function (password) {
  if (!password) throw new Error("Invalid password");
  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    return false;
  }
};
userSchema.statics.isThisUserNameInUse = async function (userName) {
  try {
    const user = await this.findOne({ userName });
    if (user) return false;
    return true;
  } catch (error) {
    console.log("error inside isThisUserNameInUse", error.message);
    return false;
  }
};
module.exports = mongoose.model("User", userSchema);
