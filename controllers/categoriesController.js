const { Categories } = require("../models/categorie");

// get all categories
const getAllCategories = (req, res) => {
  Categories.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post categories with images
const postCategories = (req, res) => {
  console.log("--->", req);

  let file1 = req.files.web_img[0].path;
  let file2 = req.files.mobile_img[0].path;
  let file3 = req.files.bg_img[0].path;

  const new_categories = new Categories({
    name: req.body.name,
    description: req.body.email,
    web_img: file1[0],
    mobile_img: file2[0],
    bg_img: file3[0],
    note: req.body.note,
    status: req.body.status,
  });
  new_categories.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "category added successfully",
      addCategories: data,
    });
  });
};

// get single categorie
const getSingleCategorie = (req, res) => {
  Categories.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// put or update categorie
const putSingleCategorie = (req, res) => {
  let file1 = req.files.web_img.map((item) => item.path);
  let file2 = req.files.mobile_img.map((item) => item.path);
  let file3 = req.files.bg_img.map((item) => item.path);

  const new_categorie_data = {
    name: req.body.name,
    description: req.body.email,
    web_img: file1[0],
    mobile_img: file2[0],
    bg_img: file3[0],
    note: req.body.note,
    status: req.body.status,
  };
  Categories.findByIdAndUpdate(
    req.params.id,
    { $set: new_categorie_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "category updated successfully",
          updateCategories: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete single categorie
const deleteSingleCategorie = (req, res) => {
  Categories.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "category deleted succeffully",
        deleteCategories: data,
      });
    }
  });
};

module.exports = {
  getAllCategories,
  postCategories,
  getSingleCategorie,
  putSingleCategorie,
  deleteSingleCategorie,
};
