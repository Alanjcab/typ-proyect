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

    const [result] = await pool.execute(
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
        nombre,
        apellido,
        email,
        telefono,
        areaConsulta,
        mensaje,
        medioContactoPreferido,
      ]
    );

    return res.status(201).json({
      message: "Consulta guardada correctamente",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error al guardar la consulta:", error);

    return res.status(500).json({
      message:
        "No se pudo guardar la consulta en este momento",
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

    const idConsulta = Number(id);

    if (!Number.isInteger(idConsulta) || idConsulta <= 0) {
      return res.status(400).json({
        message: "El identificador de la consulta no es válido",
      });
    }

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

    const [consultas] = await pool.execute(
      `
      SELECT id
      FROM consultas
      WHERE id = ?
      `,
      [idConsulta]
    );

    if (consultas.length === 0) {
      return res.status(404).json({
        message: "La consulta no existe",
      });
    }

    await pool.execute(
      `
      UPDATE consultas
      SET estado = ?
      WHERE id = ?
      `,
      [estado, idConsulta]
    );

    const [consultaActualizada] = await pool.execute(
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
      [idConsulta]
    );

    return res.status(200).json({
      message: "Estado actualizado correctamente",
      consulta: consultaActualizada[0],
    });
  } catch (error) {
    console.error("Error al actualizar el estado:", error);

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  crearConsulta,
  obtenerConsultas,
  actualizarEstadoConsulta,
};