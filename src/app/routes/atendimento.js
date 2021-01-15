const atendimento = require("express").Router();
const atendimentoControllers = require("../controllers/atendimento");

atendimento.get("/", atendimentoControllers);

// atendimento.post("/", (req, res) => {
//   res.send("Rota POST /atendimento");
// });

module.exports = atendimento;
