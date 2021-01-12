const express = require("express");
const router = express.Router();

//Retorna todos os produtos da lista
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Todos os pedidos",
  });
});

//Retorna apenas um produto da lista
router.get("/:id_pedido", (req, res, next) => {
  const id = req.params.id_pedido;
  res.status(200).send({
    mensagem: "Um pedido especifico",
    id: id,
  });
});

router.post("/", (req, res, next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade: req.body.quantidade,
  };
  res.status(200).send({
    mensagem: "Novo pedido adicionado",
    pedidoCriado: pedido,
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Pedido removido",
  });
});

module.exports = router;
