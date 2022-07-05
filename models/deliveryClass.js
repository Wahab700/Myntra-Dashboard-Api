const mongoose = require("mongoose");

const DeliveryClass = mongoose.model("DeliveryClass", {
  class_name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  updated_at: { type: Date, default: Date.now },
});

module.exports = { DeliveryClass };
