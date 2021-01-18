const users = [
  { name: "Jones", email: "jones@gmail.com" },
  { name: "Henrique", email: "henrique@hotmail.com" },
];
const atendimentoController = {
  get(req, res) {
    res.json(users);
  },

  post(req, res) {
    res.send("POST de /controllers/atendimento");
  },
};

module.exports = atendimentoController;
