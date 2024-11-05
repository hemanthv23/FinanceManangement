const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: "Email is needed" },
});

module.exports = mongoose.model("User", userSchema);
