const { get } = require("mongoose");
const Product = require("../models/product");

const productController = {
  async post(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ erro: "Product failed" });
    }
  },

  async get(req, res) {
    try {
      const product = await Product.find();
      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ erro: "Product find failed" });
    }
  },
};

module.exports = productController;
