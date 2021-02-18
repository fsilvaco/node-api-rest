require('dotenv').config();
const app = require("./src/config/custom-express");

const port = process.env.SERVER_PORT

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
