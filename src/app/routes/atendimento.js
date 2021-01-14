const atendimento = require("express").Router();

atendimento.get("/", (req, res) => {
  res.send("Hello word");
});
