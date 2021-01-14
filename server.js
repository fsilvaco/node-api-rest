const app = require("./src/config/express");

app.listen(3000, () => {
  console.log(`App rodando na porta 3000`);
});

app.get("/", (req, res) => {
  res.send("Hello word");
});
