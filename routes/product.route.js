const express = require("express");
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require("../controller/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = {
    productRoute: router
}