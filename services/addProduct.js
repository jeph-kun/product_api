const Product = require("../models/Product");

module.exports = async (productObj) => {
  try {
    await Product.insertMany(productObj);
    return true;
  } catch (error) {
    return false;
  }
};
