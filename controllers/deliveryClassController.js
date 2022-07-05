const { DeliveryClass } = require("../models/deliveryClass");

// get all deliveryClass
const getAllDeliveryClass = (req, res) => {
  DeliveryClass.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post single deliveryClass
const postSingleDeliveryClass = (req, res) => {
  const new_DeliveryClass = new DeliveryClass({
    class_name: req.body.class_name,
    price: req.body.price,
  });
  new_DeliveryClass.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "deliveryClass added successfullly",
        addDeliveryClass: data,
      });
    } else {
      throw err;
    }
  });
};

// put or update deliveryClass
const putSingleDeliveryClass = (req, res) => {
  const new_DeliveryClass_data = {
    class_name: req.body.class_name,
    price: req.body.price,
  };
  DeliveryClass.findByIdAndUpdate(
    req.params.id,
    { $set: new_DeliveryClass_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "deliveryClass updated successfully",
          updateDeliveryClass: data,
        });
      } else {
        throw err;
      }
    }
  );
};

// delete single deliveryClass
const deleteSingleDeliveryClass = (req, res) => {
  DeliveryClass.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      throw err;
    }
  });
};

module.exports = {
  getAllDeliveryClass,
  postSingleDeliveryClass,
  putSingleDeliveryClass,
  deleteSingleDeliveryClass,
};
