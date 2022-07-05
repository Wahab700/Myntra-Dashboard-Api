const { Coupens } = require("../models/coupens");

// post single coupen
const postSingleCoupens = (req, res) => {
  console.log("coupen body ===>", req.body);

  const new_coupens = new Coupens({
    code: req.body.code,
    description: req.body.description,
    discount_type: req.body.discount_type,
    minimum_order_value: req.body.minimum_order_value,
    coupon_amount: req.body.coupon_amount,
    allow_free_shipping: req.body.allow_free_shipping,
    expiry_date: req.body.expiry_date,
    usage_limit: req.body.usage_limit,
    usage_restrictions_products: req.body.usage_restrictions_products,
    usage_restrictions_categories: req.body.usage_restrictions_categories,
    usage_restrictions_brands: req.body.usage_restrictions_brands,
    use_by_users: req.body.use_by_users,
    Status: req.body.Status,
  });
  new_coupens.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "coupens added successfully",
      addCoupens: data,
    });
  });
};

// put or update coupens
const putSingleCoupens = (req, res) => {
  const new_coupens_data = {
    code: req.body.code,
    description: req.body.description,
    discount_type: req.body.discount_type,
    minimum_order_value: req.body.minimum_order_value,
    coupon_amount: req.body.coupon_amount,
    allow_free_shipping: req.body.allow_free_shipping,
    expiry_date: req.body.expiry_date,
    usage_limit: req.body.usage_limit,
    usage_restrictions_products: req.body.usage_restrictions_products,
    usage_restrictions_categories: req.body.usage_restrictions_categories,
    usage_restrictions_brands: req.body.usage_restrictions_brands,
    use_by_users: req.body.use_by_users,
    Status: req.body.Status,
  };
  Coupens.findByIdAndUpdate(
    req.params.id,
    { $set: new_coupens_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "coupen updated successfully",
          updateCoupens: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete coupens
const deleteSingleCoupens = (req, res) => {
  Coupens.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "coupens deleted successfully",
        deleteCouopens: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = { postSingleCoupens, putSingleCoupens, deleteSingleCoupens };
