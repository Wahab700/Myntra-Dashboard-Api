const mongoose = require("mongoose");

const PaymentMethod = mongoose.model("PaymentMethod", {
  payment_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  payment_img: {
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

module.exports = { PaymentMethod };
