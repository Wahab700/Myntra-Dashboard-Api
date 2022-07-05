const mongoose = require("mongoose");

const Colors = mongoose.model("Colors", {
  name: {
    type: String,
    require: true,
  },
  hex: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { Colors };
