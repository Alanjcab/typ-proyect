const pool = require("../config/db");

//para crear y guardar una nueva consult en la db
const crearConsulta = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      email,
      telefono,
      areaConsulta,
      mensaje,
      medioContactoPreferido,
    } = req.body;

    if (
      !nombre ||
      !apellido ||
      !email ||
      !telefono ||
      !areaConsulta ||
      !mensaje ||
      !medioContactoPreferido
    ) {
      return res.status(400).json({
        message: "Todos los campos obligatorios deben estar completos",
      });
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email.trim())) {
      return res.status(400).json({
        message: "El email ingresado no es válido",
      });
    }

    const mediosPermitidos = ["whatsapp", "telefono", "email"];

    if (!mediosPermitidos.includes(medioContactoPreferido)) {
      return res.status(400).json({
        message: "El medio de contacto seleccionado no es válido",
      });
    }

    const [result] = await pool.query(
      `
      INSERT INTO consultas (
        nombre,
        apellido,
        email,
        telefono,
        areaConsulta,
        mensaje,
        medioContactoPreferido
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        nombre.trim(),
        apellido.trim(),
        email.trim().toLowerCase(),
        telefono.trim(),
        areaConsulta.trim(),
        mensaje.trim(),
        medioContactoPreferido,
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
};

//obtengo las consultas de la db
const obtenerConsultas = async (req, res) => {
  try {
    const [consultas] = await pool.query(`
      SELECT
        id,
        nombre,
        apellido,
        email,
        telefono,
        areaConsulta,
        mensaje,
        medioContactoPreferido,
        estado,
        fechaCreacion,
        fechaActualizacion
      FROM consultas
      ORDER BY fechaCreacion DESC
    `);

    res.status(200).json(consultas);
  } catch (error) {
    console.error("Error al obtener las consultas:", error);

    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

const actualizarEstadoConsulta = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const estadosPermitidos = [
      "nueva",
      "contactada",
      "en_seguimiento",
      "cerrada",
    ];

    if (!estadosPermitidos.includes(estado)) {
      return res.status(400).json({
        message: "El estado seleccionado no es válido",
      });
    }

    const [consultas] = await pool.query(
      `
      SELECT id
      FROM consultas
      WHERE id = ?
      `,
      [id]
    );

    if (consultas.length === 0) {
      return res.status(404).json({
        message: "La consulta no existe",
      });
    }

    await pool.query(
      `
      UPDATE consultas
      SET estado = ?
      WHERE id = ?
      `,
      [estado, id]
    );

    const [consultaActualizada] = await pool.query(
      `
      SELECT
        id,
        nombre,
        apellido,
        email,
        telefono,
        areaConsulta,
        mensaje,
        medioContactoPreferido,
        estado,
        fechaCreacion,
        fechaActualizacion
      FROM consultas
      WHERE id = ?
      `,
      [id]
    );

    res.status(200).json({
      message: "Estado actualizado correctamente",
      consulta: consultaActualizada[0],
    });
  } catch (error) {
    console.error("Error al actualizar el estado:", error);

    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  crearConsulta,
  obtenerConsultas,
  actualizarEstadoConsulta,
};