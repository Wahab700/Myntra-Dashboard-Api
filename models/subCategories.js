const mongoose = require("mongoose");

// sub categorie schema
const SubCategories = mongoose.model("SubCategories", {
  name: {
    type: String,
    require: true,
  },
  feature_categorie: {
    type: String,
    require: true,
  },
  parent_categorie: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  feature_web_img: {
    type: String,
    require: true,
  },
  feature_mob_img: {
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

module.exports = { SubCategories };
