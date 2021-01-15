const router = require("express").Router();
const atendimentoController = require("../controllers/atendimento");

router.get("/", atendimentoController.get);
router.post("/", atendimentoController.post);

module.exports = router;
