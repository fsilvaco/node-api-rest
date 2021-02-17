require('dotenv').config();

const app = require("./src/config/custom-express");

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.SERVER_PORT}`);
});
