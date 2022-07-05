const { SimpleProducts } = require("../models/simpleProducts");

// post simpleProducts
const postSimpleProduct = async (req, res) => {
  let file_1 = req.files.feature_image.map((item) => item.path);
  let file_2 = req.files.gallery_images.map((item) => item.path);

  try {
    const new_simpleProducts = await SimpleProducts.create({
      brand_id: req.body.brand_id,
      feature_category_id: req.body.feature_category_id,
      name: req.body.name,
      url: req.body.url,
      sku: req.body.sku,
      short_description: req.body.short_description,
      description: req.body.description,
      type: req.body.type,
      regular_price: req.body.regular_price,
      discounted_price: req.body.discounted_price,
      discounted_percentage: req.body.discounted_percentage,
      attributes: req.body.attributes,
      note: req.body.note,
      feature_image: file_1[0],
      gallery_images: file_2[0],
      up_sell_products: req.body.up_sell_products,
      cross_sell_products: req.body.cross_sell_products,
      quantity: req.body.quantity,
      stock_status: req.body.stock_status,
      stock_threshold: req.body.stock_threshold,
      onestar_rating: req.body.onestar_rating,
      twostar_rating: req.body.twostar_rating,
      threestar_rating: req.body.threestar_rating,
      fourstar_rating: req.body.fourstar_rating,
      fivestar_rating: req.body.fivestar_rating,
      meta_tags: req.body.meta_tags,
      meta_title: req.body.meta_title,
      meta_description: req.body.meta_description,
      title_description: req.body.title_description,
      keywords: req.body.keywords,
      custom_field_one: req.body.custom_field_one,
      custom_field_one_value: req.body.custom_field_one_value,
      custom_field_two: req.body.custom_field_two,
      custom_field_two_value: req.body.custom_field_two_value,
      custom_field_three: req.body.custom_field_three,
      custom_field_three_value: req.body.custom_field_three_value,
      custom_field_four: req.body.custom_field_four,
      custom_field_four_value: req.body.custom_field_four_value,
      custom_field_five: req.body.custom_field_five,
      custom_field_five_value: req.body.custom_field_five_value,
      status: req.body.status,
    });
    if (new_simpleProducts) {
      return res.status(200).send({
        status: true,
        message: "product created successfully",
        data: new_simpleProducts,
      });
    } else {
      return res.status(400).send({
        status: false,
        error: "Product creation failed",
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: false,
      error: error.message,
    });
  }
};

// update status simpleProducts
const putSimpleProducts = (req, res) => {
  let file_1 = req.files.feature_image.map((item) => item.path);
  let file_2 = req.files.gallery_images.map((item) => item.path);

  const new_simpleProducts_data = {
    brand_id: req.body.brand_id,
    feature_category_id: req.body.feature_category_id,
    name: req.body.name,
    url: req.body.url,
    sku: req.body.sku,
    short_description: req.body.short_description,
    description: req.body.description,
    type: req.body.type,
    regular_price: req.body.regular_price,
    discounted_price: req.body.discounted_price,
    discounted_percentage: req.body.discounted_percentage,
    attributes: req.body.attributes,
    note: req.body.note,
    feature_image: file_1[0],
    gallery_images: file_2[0],
    up_sell_products: req.body.up_sell_products,
    cross_sell_products: req.body.cross_sell_products,
    quantity: req.body.quantity,
    stock_status: req.body.stock_status,
    stock_threshold: req.body.stock_threshold,
    onestar_rating: req.body.onestar_rating,
    twostar_rating: req.body.twostar_rating,
    threestar_rating: req.body.threestar_rating,
    fourstar_rating: req.body.fourstar_rating,
    fivestar_rating: req.body.fivestar_rating,
    meta_tags: req.body.meta_tags,
    meta_title: req.body.meta_title,
    meta_description: req.body.meta_description,
    title_description: req.body.title_description,
    keywords: req.body.keywords,
    custom_field_one: req.body.custom_field_one,
    custom_field_one_value: req.body.custom_field_one_value,
    custom_field_two: req.body.custom_field_two,
    custom_field_two_value: req.body.custom_field_two_value,
    custom_field_three: req.body.custom_field_three,
    custom_field_three_value: req.body.custom_field_three_value,
    custom_field_four: req.body.custom_field_four,
    custom_field_four_value: req.body.custom_field_four_value,
    custom_field_five: req.body.custom_field_five,
    custom_field_five_value: req.body.custom_field_five_value,
    status: req.body.status,
  };
  SimpleProducts.findByIdAndUpdate(
    req.params.id,
    { $set: new_simpleProducts_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Status Updated successfully",
          updateSimpleProducts: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete simpleProducts
const deleteSimpleProduct = (req, res) => {
  SimpleProducts.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        messsage: "product deleted successfully",
        deleteSimpleProducts: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = { postSimpleProduct, deleteSimpleProduct, putSimpleProducts };
