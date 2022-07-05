const { Customer } = require("../models/customer");

// list all customers
const getAllCustomer = (req, res) => {
  Customer.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      throw err;
    }
  });
};

module.exports = { getAllCustomer };
