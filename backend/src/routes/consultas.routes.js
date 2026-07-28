const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      telefono,
      motivo,
      mensaje,
    } = req.body;

    if (!nombre || !apellido || !email || !motivo || !mensaje) {
      return res.status(400).json({
        message: "Todos los campos obligatorios deben estar completos",
      });
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      return res.status(400).json({
        message: "El email ingresado no es válido",
      });
    }

    const [result] = await pool.query(
      `
      insert into consultas
      (nombre, apellido, email, telefono, motivo, mensaje)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        nombre.trim(),
        apellido.trim(),
        email.trim(),
        telefono?.trim() || null,
        motivo.trim(),
        mensaje.trim(),
      ]
    );

    res.status(201).json({
      message: "Consulta guardada correctamente",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error al guardar la consulta:", error);

    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
});

module.exports = router;