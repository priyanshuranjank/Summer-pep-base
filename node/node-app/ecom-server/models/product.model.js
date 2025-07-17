const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: "text"
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 10
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString()
  }
});

const product = mongoose.model("Product", productSchema);

module.exports = product;