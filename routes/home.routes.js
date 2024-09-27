const express = require("express");
const { gethome } = require("../controllers/home.controller"); 

const router = express.Router();


router.get("/", gethome); 

module.exports = router;
