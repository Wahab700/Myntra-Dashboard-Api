const mongoose = require("mongoose");

const Coupens = mongoose.model("Coupens", {
  code: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  discount_type: {
    type: String,
    require: true,
  },
  minimum_order_value: {
    type: Number,
    require: true,
  },
  coupon_amount: {
    type: Number,
    require: true,
  },
  allow_free_shipping: {
    type: Boolean,
    require: true,
  },
  expiry_date: {
    type: Date,
    require: true,
  },
  usage_limit: {
    type: Number,
    require: true,
  },
  usage_restrictions_products: {
    type: String,
    require: true,
  },
  usage_restrictions_categories: {
    type: String,
    require: true,
  },
  usage_restrictions_brands: {
    type: String,
    require: true,
  },
  use_by_users: {
    type: String,
    require: true,
  },
  Status: {
    type: String,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { Coupens };
