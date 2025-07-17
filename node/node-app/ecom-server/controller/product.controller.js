const Product = require("../models/product.model");

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
}

async function getProduct(req, res) {
  try {
    const { query } = req.query;
    const product = await Product.find({ $text: { $search: query } });
    console.log({ product });
    res.status(200).json(product);
  } catch (error) {
    console.log({ error });
    res.status(500).json(error);
  }
}

async function createProduct(req, res) {
  try {
    const { title, description, price, category } = req.body;
    const productRes = await Product.create({
      title,
      description,
      price,
      category
    });

    console.log(`Product Created: `, JSON.stringify(productRes));
    res.status(200).send(productRes);
  } catch (error) {
    console.log({ error });
    res.status(error.status).send(error.message);
  }
}

module.exports = { getAllProducts, getProduct, createProduct };