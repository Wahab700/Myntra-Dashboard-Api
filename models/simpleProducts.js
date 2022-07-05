const mongoose = require("mongoose");

const SimpleProducts = mongoose.model("SimpleProducts", {
  brand_id: {
    type: Number,
    require: true,
  },
  feature_category_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  sku: {
    type: String,
    require: true,
  },
  short_description: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  regular_price: {
    type: Number,
    require: true,
  },
  discounted_price: {
    type: Number,
    require: true,
  },
  discounted_percentage: {
    type: Number,
    require: true,
  },
  attributes: {
    type: String,
    require: true,
  },
  note: {
    type: String,
    require: true,
  },
  feature_image: {
    type: String,
    require: true,
  },
  gallery_images: {
    type: String,
    require: true,
  },
  up_sell_products: {
    type: Array,
    default: [],
    require: true,
  },
  cross_sell_products: {
    type: Array,
    default: [],
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  stock_status: {
    type: Boolean,
    require: true,
  },
  stock_threshold: {
    type: Number,
    require: true,
  },
  onestar_rating: {
    type: Number,
    require: true,
  },
  twostar_rating: {
    type: Number,
    require: true,
  },
  threestar_rating: {
    type: Number,
    require: true,
  },
  fourstar_rating: {
    type: Number,
    require: true,
  },
  fivestar_rating: {
    type: Number,
    require: true,
  },
  meta_tags: {
    type: String,
    require: true,
  },
  meta_title: {
    type: String,
    require: true,
  },
  meta_description: {
    type: String,
    require: true,
  },
  title_description: {
    type: String,
    require: true,
  },
  keywords: {
    type: String,
    require: true,
  },
  custom_field_one: {
    type: String,
    require: true,
  },
  custom_field_one_value: {
    type: String,
    require: true,
  },
  custom_field_two: {
    type: String,
    require: true,
  },
  custom_field_two_value: {
    type: String,
    require: true,
  },
  custom_field_three: {
    type: String,
    require: true,
  },
  custom_field_three_value: {
    type: String,
    require: true,
  },
  custom_field_four: {
    type: String,
    require: true,
  },
  custom_field_four_value: {
    type: String,
    require: true,
  },
  custom_field_five: {
    type: String,
    require: true,
  },
  custom_field_five_value: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { SimpleProducts };
