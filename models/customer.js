const mongoose = require("mongoose");

const Customer = mongoose.model("Customer", {
  customer_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  default_address_id: {
    type: Number,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = { Customer };
