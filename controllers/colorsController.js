const { Colors } = require("../models/colors");

// get all colors
const getAllColors = (req, res) => {
  Colors.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// post colors
const postAllColors = (req, res) => {
  console.log("colors body ===>", req.body);

  const new_colors = new Colors({
    name: req.body.name,
    hex: req.body.hex,
    status: req.body.status,
  });

  new_colors.save((err, data) => {
    res.status(200).json({
      code: 200,
      message: "colors added successfully",
      addColors: data,
    });
  });
};

// get single colors
const getSingleColor = (req, res) => {
  Colors.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

// put or edit colors
const putSingleColors = (req, res) => {
  const new_colors_data = {
    name: req.body.name,
    hex: req.body.hex,
    status: req.body.status,
  };
  Colors.findByIdAndUpdate(
    req.params.id,
    { $set: new_colors_data },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "colors updated ssuccssfully",
          updateColors: data,
        });
      } else {
        console.log(err);
      }
    }
  );
};

// delete single colors
const deleteSingleColor = (req, res) => {
  Colors.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        messsage: "color deleted successfully",
        deleteColors: data,
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  getAllColors,
  postAllColors,
  putSingleColors,
  getSingleColor,
  deleteSingleColor,
};
