const router = require("express").Router();
const productController = require("../controllers/product");

router.post("/", productController.createProduct);
router.get("/", productController.showProducts);
router.get("/:id", productController.showProductById);

module.exports = router;
