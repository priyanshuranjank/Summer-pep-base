const express = require("express")

const prodRouter = express.Router();

prodRouter.get("/", (req, res) => {
  res.status(200).send("this is the product root.")
})
prodRouter.get("/id", (req, res) => {
  res.status(200).send("this is the id.")
})
prodRouter.get("/seller", (req, res) => {
  res.status(200).send("this is the seller.")
})

module.exports = prodRouter;