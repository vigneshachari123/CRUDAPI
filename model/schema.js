const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  empcode: {
    type: Number,
    required: true,
  },

  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", empSchema);
