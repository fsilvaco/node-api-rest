const express = require("express");
const router = express.Router();

//Retorna todos os produtos da lista
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Todos os produtos",
  });
});

//Retorna apenas um produto da lista
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;
  res.status(200).send({
    mensagem: "Um produto especifico",
    id: id,
  });
});

router.post("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Novo produto adicionado",
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Produto atualizado",
  });
});
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Produto removido",
  });
});

module.exports = router;
