const { SubCategories } = require("../models/subCategories");

// get all sub categorie
const getAllSubCategories = (req, res) => {
  SubCategories.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post sub categories
const postSubCategories = (req, res) => {
  let file_1 = req.files.feature_web_img.map((item) => item.path);
  let file_2 = req.files.feature_mob_img.map((item) => item.path);

  const new_SubCategories = new SubCategories({
    name: req.body.name,
    feature_categorie: req.body.feature_categorie,
    parent_categorie: req.body.parent_categorie,
    description: req.body.description,
    feature_web_img: file_1[0],
    feature_mob_img: file_2[0],
    note: req.body.note,
    status: req.body.status,
  });
  new_SubCategories.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "sub category added successfully",
      addSubCategories: data,
    });
  });
};

// get single sub categorie
const getSingleSubCategorie = (req, res) => {
  SubCategories.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// put or update sub categorie
const putSubCategorie = (req, res) => {
  let file_1 = req.files.feature_web_img.map((item) => item.path);
  let file_2 = req.files.feature_mob_img.map((item) => item.path);

  let new_sub_categorie_data = {
    name: req.body.name,
    feature_categorie: req.body.feature_categorie,
    parent_categorie: req.body.parent_categorie,
    description: req.body.description,
    feature_web_img: file_1[0],
    feature_mob_img: file_2[0],
    note: req.body.note,
    status: req.body.status,
  };
  SubCategories.findByIdAndUpdate(
    req.params.id,
    new_sub_categorie_data,
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "sub category updated successfully",
          SubCategories: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete sub categorie
const deleteSubCategorie = (req, res) => {
  SubCategories.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "sub categorie deleted successfully",
        deleteSubCategories: data,
      });
    }
  });
};

module.exports = {
  getAllSubCategories,
  postSubCategories,
  getSingleSubCategorie,
  putSubCategorie,
  deleteSubCategorie,
};
