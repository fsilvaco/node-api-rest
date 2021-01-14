const atendimento = require("express").Router();

atendimento.get("/", (req, res) => {
  res.send("Rota GET atendimento");
});

module.exports = atendimento;
