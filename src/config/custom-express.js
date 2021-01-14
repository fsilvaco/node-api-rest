const express = require("express");
const app = express();

const atendimento = require("../app/routes/atendimento");
app.use("/atendimento", atendimento);

module.exports = app;
