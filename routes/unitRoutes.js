const express = require("express");
const router = express.Router();

const unitController = require("../controllers/UnitController");

router.get("/", unitController.getData);

module.exports = router;
