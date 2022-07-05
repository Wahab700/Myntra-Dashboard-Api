const { PaymentMethod } = require("../models/paymentMethod");

// get all paymentMethods
const getAllPaymentMethods = (req, res) => {
  PaymentMethod.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post paymentMethods
const postPaymentMethods = (req, res) => {
  let img_path = req.files.payment_img.map((item) => item.path);

  const new_paymentMethod = new PaymentMethod({
    payment_id: req.body.payment_id,
    name: req.body.name,
    payment_img: img_path[0],
    note: req.body.note,
    status: req.body.status,
  });
  new_paymentMethod.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "Payment Method added successsfully",
        addPaymentMethod: data,
      });
    } else {
      console.log(err);
    }
  });
};

// put or update paymentMethod
const putPaymentMethod = (req, res) => {
  let img_path = req.files.payment_img.map((item) => item.path);

  const new_paymentMethod_data = {
    payment_id: req.body.payment_id,
    name: req.body.name,
    payment_img: img_path[0],
    note: req.body.note,
    status: req.body.status,
  };
  PaymentMethod.findByIdAndUpdate(
    req.params.id,
    { $set: new_paymentMethod_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "payment method updated successfully",
          updatePaymentMethod: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// get paymentMethods for mobil and web
const getSinglePaymentMethods = (req, res) => {
  PaymentMethod.findById(req.params.id).then((response) => {
    const { note, updated_at, ...rest } = response._doc;
    res.status(200).json({
      status: true,
      message: "Payment Methods get Successfully",
      data: rest,
    });
  });
};

module.exports = {
  getAllPaymentMethods,
  postPaymentMethods,
  putPaymentMethod,
  getSinglePaymentMethods,
};
