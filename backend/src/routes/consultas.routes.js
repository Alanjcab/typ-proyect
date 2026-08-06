const express = require("express");

const {
  crearConsulta,
  obtenerConsultas,
  actualizarEstadoConsulta,
} = require("../controllers/consultasController");

const {
  verificarToken,
} = require("../middleware/authMiddleware");

const validarConsulta = require("../validators/consultaValidator");
const consultaRateLimit = require("../middleware/consultaRateLimit");

const router = express.Router();

// Ruta pública: permite enviar una consulta
router.post("/",consultaRateLimit, validarConsulta, crearConsulta);

// Ruta privada: permite ver las consultas
router.get("/", verificarToken, obtenerConsultas);

// Ruta privada: permite actualizar el estado
router.put(
  "/:id/estado",
  verificarToken,
  actualizarEstadoConsulta
);

module.exports = router;