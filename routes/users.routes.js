const express = require("express");
const { postUser, getuser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/users",getuser );

router.post("/users", postUser);

module.exports = router;
