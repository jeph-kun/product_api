const mongoose = require("mongoose");
const Schema = mongoose.Schema; //declare a database structure

const ProductSchema = new Schema({
  //table structure
  user_id: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_quantity: {
    type: Number,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  product_variants: {
    type: Array,
    default: [],
  },
  product_image: {
    type: Array,
    default: [],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", ProductSchema); // "tablename in the db"
