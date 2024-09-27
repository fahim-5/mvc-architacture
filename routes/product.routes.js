const express = require("express");
const { getproducts, postproducts } = require("../controllers/product.controller");
const router = express.Router();

router.get("/products",getproducts );

router.post("/products", postproducts);

module.exports = router;
