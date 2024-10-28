const express = require("express");
const fruitController = require("../controller/fruitController");

const router = express.Router();

router.get("/", fruitController.getAllFruits);

module.exports = router;
