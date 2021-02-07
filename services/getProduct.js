const Product = require("../models/Product");

module.exports = async () => {
  try {
    const result = await Product.find({});
    return result;
  } catch (error) {
    return false;
  }
};
