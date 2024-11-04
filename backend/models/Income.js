const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  source: { type: String, required: true },
  amount: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Income", incomeSchema);
