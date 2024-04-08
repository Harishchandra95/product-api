const express = require("express");
const mongoose = require("mongoose");
const { productRoute } = require("./routes/product.route");
const app = express();
//middlerware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res) => {
  res.send("healthy");
});
mongoose.connect("mongodb://localhost:27017/men");
app.use('/api/product', productRoute)
app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
