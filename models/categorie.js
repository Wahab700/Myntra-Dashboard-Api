const mongoose = require("mongoose");

// categorie schema
const Categories = mongoose.model("Categories", {
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  web_img: {
    type: String,
    require: true,
  },
  mobile_img: {
    type: String,
    require: true,
  },
  bg_img: {
    type: String,
    require: true,
  },
  note: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },

  updated_at: { type: Date, default: Date.now },
});

module.exports = { Categories };
