const router = require("express").Router();
const productController = require("../controllers/product");

router.post("/", productController.post);
router.get("/", productController.get);

module.exports = router;
