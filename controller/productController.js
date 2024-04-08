const Product = require("../models/Product");
const getProducts = async (req, res) => {
  try {
    const getProducts = await Product.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await Product.findById(id);
    res.status(200).json(getProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // await product.save();
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    // await product.save();
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
