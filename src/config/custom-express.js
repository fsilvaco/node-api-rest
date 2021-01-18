const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const atendimento = require("../app/routes/atendimento");
app.use("/atendimento", atendimento);

module.exports = app;
