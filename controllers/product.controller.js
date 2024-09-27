const path = require("path");


const products = require("../models/product.model");



exports.getproducts = (req, res) => {
  res.sendFile(path.join(__dirname+"/../views/product.html"));
};



exports.postproducts = (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
      name,
      price,
    };
    products.push(product);
    res.status(201).json({
      success: true,
      products,
  });
};
