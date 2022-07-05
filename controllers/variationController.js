const { Variation } = require("../models/variation");

// get variations
const getAllVariation = (req, res) => {
  Variation.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post variations
const postSingleVariation = async (req, res) => {
  let file_1 = req.files.variation_feature_img.map((item) => item.path);
  let file_2 = req.files.variation_gallery_imgs.map((item) => item.path);

  try {
    const new_variation = await Variation.create({
      sku: req.body.sku,
      product_id: req.body.product_id,
      color_id: req.body.color_id,
      size_id: req.body.size_id,
      quantity: req.body.quantity,
      stock_status: req.body.stock_status,
      stock_threshold: req.body.stock_threshold,
      regular_price: req.body.regular_price,
      discounted_price: req.body.discounted_price,
      discounted_percentage: req.body.discounted_percentage,
      variation_feature_img: file_1[0],
      variation_gallery_imgs: file_2[0],
      status: req.body.status,
    });
    if (new_variation) {
      return res.status(200).send({
        status: true,
        message: "Variation Created Successfully",
        data: new_variation,
      });
    } else {
      return res.status(400).send({
        status: false,
        error: "Variation Creation Failed",
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: false,
      error: error.message,
    });
  }
};

// put or update sub variation
const putVariation = (req, res) => {
  let file_1 = req.files.variation_feature_img.map((item) => item.path);
  let file_2 = req.files.variation_gallery_imgs.map((item) => item.path);

  const new_variation_data = {
    sku: req.body.sku,
    product_id: req.body.product_id,
    color_id: req.body.color_id,
    size_id: req.body.size_id,
    quantity: req.body.quantity,
    stock_status: req.body.stock_status,
    stock_threshold: req.body.stock_threshold,
    regular_price: req.body.regular_price,
    discounted_price: req.body.discounted_price,
    discounted_percentage: req.body.discounted_percentage,
    variation_feature_img: file_1[0],
    variation_gallery_imgs: file_2[0],
    status: req.body.status,
  };
  Variation.findByIdAndUpdate(
    req.params.id,
    new_variation_data,
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Variation Updated Successfully",
          SubVariation: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete variation
const deleteVariation = (req, res) => {
  Variation.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        status: true,
        message: "Variation Deleted Successfully",
        deleteVariation: data,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Variation Deletion Failed",
      });
    }
  });
};

module.exports = {
  getAllVariation,
  postSingleVariation,
  putVariation,
  deleteVariation,
};
