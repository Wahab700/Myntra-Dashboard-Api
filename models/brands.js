const mongoose = require("mongoose");

const Brands = mongoose.model("Brands", {
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  web_feature_img: {
    type: String,
    require: true,
  },
  mobile_feature_img: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
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
  created_at: { type: Date, default: Date.now },
});

module.exports = { Brands };
