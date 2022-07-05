const { Sizes } = require("../models/sizes");

// get all sizes
const getAllSizes = (req, res) => {
  Sizes.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post sizes
const postSingleSizes = (req, res) => {
  const new_sizes = new Sizes({
    name: req.body.name,
    value: req.body.value,
    status: req.body.status,
  });
  new_sizes.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "sizes added successfully",
      addColors: data,
    });
  });
};

// put or edit sizes
const putSingleSizes = (req, res) => {
  const new_sizes_data = {
    name: req.body.name,
    value: req.body.hex,
    status: req.body.status,
  };
  Sizes.findByIdAndUpdate(
    req.params.id,
    { $set: new_sizes_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "sizes updated ssuccssfully",
          updateSizes: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// get single sizes
const getSingleSizes = (req, res) => {
  Sizes.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// delete single colors
const deleteSingleSizes = (req, res) => {
  Sizes.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        messsage: "sizes deleted successfully",
        deleteSizes: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  getAllSizes,
  postSingleSizes,
  putSingleSizes,
  getSingleSizes,
  deleteSingleSizes,
};
