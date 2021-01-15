const atendimentoController = {
  get(req, res) {
    res.send("GET de /controllers/atendimento");
  },

  post(req, res) {
    res.send("POST de /controllers/atendimento");
  },
};

module.exports = atendimentoController;
