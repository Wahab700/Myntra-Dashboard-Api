const mongoose = require("mongoose");

const Sizes = mongoose.model("Sizes", {
  name: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { Sizes };
