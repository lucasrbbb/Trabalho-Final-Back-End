const express = require("express");
const router = express.Router();

const storeController = require("../controllers/StoreConstroller");

router.post("/save", storeController.postData);

router.get("/list", storeController.listData);

router.delete("/delete/:id", storeController.deleteItem);

router.put("/update", storeController.updateItem);

module.exports = router;
