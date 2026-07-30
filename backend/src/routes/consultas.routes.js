const express = require("express");

const {
  crearConsulta,
  obtenerConsultas,
  actualizarEstadoConsulta,
} = require("../controllers/consultasController");

const {
  verificarToken,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Ruta pública: permite enviar una consulta
router.post("/", crearConsulta);

// Ruta privada: permite ver las consultas
router.get("/", verificarToken, obtenerConsultas);

// Ruta privada: permite actualizar el estado
router.put(
  "/:id/estado",
  verificarToken,
  actualizarEstadoConsulta
);

module.exports = router;