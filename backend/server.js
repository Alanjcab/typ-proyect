const app = require("./src/app");
const pool = require("./src/config/db");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("Conexión a MySQL exitosa");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con MySQL:", error.message);
  }
};

startServer();