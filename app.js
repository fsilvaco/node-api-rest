const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false })); //Aceita apenas dados simples
app.use(bodyParser.json()); //Aceita apenas JSON na entrada do body

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

//Tratamento de erro para quando não encontrar nenhuma rota
app.use((req, res, next) => {
  const error = new Error("Rota não encontrada");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = app;
