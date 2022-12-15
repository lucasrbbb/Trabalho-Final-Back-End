const express = require("express");
const router = express.Router();

const storeController = require("../controllers/StoreController");

router.get("/", userController.obterDados);

router.get("/:id", userController.obterPorId);

router.post("/", userController.postarDados);

router.delete("/:id", userController.deletarUsuario);

router.put("/:id", userController.alterarUsuario);

module.exports = router;
