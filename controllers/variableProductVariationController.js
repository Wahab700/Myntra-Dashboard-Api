const {
  VariableProductVariation,
} = require("../models/variableProductVariation");

// post VariableProductVariation
const postVariableProductVariation = async (req, res) => {
  let file_1 = req.files.productVariation_feature_img.map((item) => item.path);
  let file_2 = req.files.productVariation_gallery_imgs.map((item) => item.path);

  try {
    const new_VariableProductVariation = await VariableProductVariation.create({
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
      productVariation_feature_img: file_1[0],
      productVariation_gallery_imgs: file_2[0],
    });
    if (new_VariableProductVariation) {
      return res.status(200).send({
        status: true,
        message: "variation created successfully",
        data: new_VariableProductVariation,
      });
    } else {
      return res.status(400).send({
        status: false,
        error: "variation creation failed",
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: false,
      error: error.message,
    });
  }
};

// update status VariableProductVariation
const putVariableProductVariation = (req, res) => {
  let file_1 = req.files.productVariation_feature_img.map((item) => item.path);
  let file_2 = req.files.productVariation_gallery_imgs.map((item) => item.path);

  const new_VariableProductVariation_data = {
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
    productVariation_feature_img: file_1[0],
    productVariation_gallery_imgs: file_2[0],
  };
  VariableProductVariation.findByIdAndUpdate(
    req.params.id,
    { $set: new_VariableProductVariation_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          status: true,
          message: "Status Updated successfully",
          updateVariableProductVariation: data,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Status Updated successfully",
        });
      }
    }
  );
};

// delete VariableProductVariation
const deleteVariableProductVariation = (req, res) => {
  VariableProductVariation.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        status: true,
        messsage: "variations deleted successfully",
        deleteVariableProductVariation: data,
      });
    } else {
      res.status(400).json({
        status: false,
        messsage: "variations deletion Failed",
      });
    }
  });
};

module.exports = {
  postVariableProductVariation,
  putVariableProductVariation,
  deleteVariableProductVariation,
};
