const bcrypt = require("bcrypt");
const pool = require("./config/db");

const crearAdministrador = async () => {
  try {
    const nombre = "Administrador";
    const email = "cabreraalan986@gmail.com";
    const password = "typ123";

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    const [usuarioExistente] = await pool.query(
      "SELECT id FROM usuarios WHERE email = ?",
      [email]
    );

    if (usuarioExistente.length > 0) {
      console.log("Ya existe un usuario con ese email");
      return;
    }

    const [result] = await pool.query(
      `
      INSERT INTO usuarios (
        nombre,
        email,
        passwordHash,
        rol,
        activo
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        nombre,
        email,
        passwordHash,
        "administrador",
        true,
      ]
    );

    console.log("Administrador creado correctamente");
    console.log("ID:", result.insertId);
    console.log("Email:", email);
  } catch (error) {
    console.error("Error al crear el administrador:", error);
  } finally {
    await pool.end();
  }
};

crearAdministrador();