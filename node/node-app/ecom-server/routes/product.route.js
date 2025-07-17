const express = require("express");
const { getAllProducts, getProduct, createProduct } = require("../controller/product.controller");

const router = express.Router();

router.get("/all", getAllProducts);

router.get("/", getProduct);

router.post("/", createProduct);

module.exports = router;