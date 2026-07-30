const express = require("express");

const {
  iniciarSesion,
} = require("../controllers/authController");

const router = express.Router();

// Inicia sesión
router.post("/login", iniciarSesion);

module.exports = router;