const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

// Inicia sesión y genera un token de acceso
const iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "El email y la contraseña son obligatorios",
      });
    }

    const [usuarios] = await pool.query(
      `
      SELECT
        id,
        nombre,
        email,
        passwordHash,
        rol,
        activo
      FROM usuarios
      WHERE email = ?
      LIMIT 1
      `,
      [email.trim().toLowerCase()]
    );

    if (usuarios.length === 0) {
      return res.status(401).json({
        message: "Email o contraseña incorrectos",
      });
    }

    const usuario = usuarios[0];

    if (!usuario.activo) {
      return res.status(403).json({
        message: "El usuario se encuentra deshabilitado",
      });
    }

    const passwordValida = await bcrypt.compare(
      password,
      usuario.passwordHash
    );

    if (!passwordValida) {
      return res.status(401).json({
        message: "Email o contraseña incorrectos",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    res.status(200).json({
      message: "Inicio de sesión correcto",
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);

    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  iniciarSesion,
};