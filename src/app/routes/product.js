const router = require("express").Router();
const productController = require("../controllers/product");

router.post("/", productController.post);
router.get("/", productController.get);
router.get("/:id", productController.searchById);

module.exports = router;
