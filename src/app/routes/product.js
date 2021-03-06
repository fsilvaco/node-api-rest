const router = require("express").Router();
const productController = require("../controllers/product");

router.post("/", productController.createProduct);
router.get("/", productController.showProducts);
router.get("/:id", productController.showProductById);
router.delete("/:id", productController.deleteProductById);
router.put("/:id", productController.updateProduct);

module.exports = router;
