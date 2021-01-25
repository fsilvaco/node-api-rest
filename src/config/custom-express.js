const express = require("express");
const bodyParser = require("body-parser");
const product = require("../app/routes/product");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/product", product);

module.exports = app;
