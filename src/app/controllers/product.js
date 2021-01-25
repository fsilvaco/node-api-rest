const Product = require("../models/product");

const productController = {
  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.send(`Product ${product.name} created`);
    } catch (err) {
      return res.status(400).send({ erro: "Product failed" });
    }
  },

  async showProducts(req, res) {
    try {
      const product = await Product.find();
      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ erro: "Product not found" });
    }
  },
  async showProductById(req, res) {
    try {
      const urlParameter = req.params.id;
      const product = await Product.findById(urlParameter);
      return res.send(product);
    } catch (err) {
      return res.status(400).send({ erro: "Product not found" });
    }
  },

  async deleteProductById(req, res) {
    try {
      const urlParameter = req.params.id;
      const product = await Product.findByIdAndDelete(urlParameter);
      return res.send(`Product ${product.id} deleted`);
    } catch {
      return res.status(400).send({ erro: "Product not found" });
    }
  },

  async updateProduct(req, res) {
    try {
      const urlParameter = req.params.id;
      const product = await Product.findByIdAndUpdate(urlParameter, req.body);
      return res.send(`Product ${product.id} updated`);
    } catch {
      return res.status(400).send({ erro: "Product not updated" });
    }
  },
};

module.exports = productController;
