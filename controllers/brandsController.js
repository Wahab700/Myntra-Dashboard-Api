const { Brands } = require("../models/brands");

// get all brands
const getAllBrands = (req, res) => {
  Brands.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post brands
const postBrands = (req, res) => {
  //   console.log("brands post body ===>", req.body);
  //   console.log("brands images --->", req.files);

  let img_1 = req.files.web_feature_img.map((item) => item.path);
  let img_2 = req.files.mobile_feature_img.map((item) => item.path);

  const new_brands = new Brands({
    name: req.body.name,
    description: req.body.discription,
    web_feature_img: img_1[0],
    mobile_feature_img: img_2[0],
    contact: req.body.contact,
    note: req.body.note,
    status: req.body.status,
  });
  new_brands.save((err, data) => {
    res.status(200).json({
      code: 200,
      messsage: "brands added successfully",
      addBrands: data,
    });
  });
};

// put or update brands
const putSingleBrands = (req, res) => {
  let img_1 = req.files.web_feature_img.map((item) => item.path);
  let img_2 = req.files.mobile_feature_img.map((item) => item.path);

  const new_brands_data = {
    name: req.body.name,
    description: req.body.discription,
    web_feature_img: img_1[0],
    mobile_feature_img: img_2[0],
    contact: req.body.contact,
    note: req.body.note,
    status: req.body.status,
  };
  Brands.findByIdAndUpdate(
    req.params.id,
    new_brands_data,
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          messsage: "brands updated successfully",
          Brands: data,
        });
      }
    }
  );
};

// delete brands
const deleteBrands = (req, res) => {
  Brands.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        messsage: "brand deleted successfylly",
        deleteBrands: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = { getAllBrands, postBrands, putSingleBrands, deleteBrands };
