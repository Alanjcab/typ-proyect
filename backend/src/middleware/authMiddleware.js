const jwt = require("jsonwebtoken");

//chequeo que la petición tenga un token válido
const verificarToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token de acceso no proporcionado",
      });
    }

    const partes = authHeader.split(" ");

    if (partes.length !== 2 || partes[0] !== "Bearer") {
      return res.status(401).json({
        message: "Formato de token inválido",
      });
    }

    const token = partes[1];

    const usuarioDecodificado = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.usuario = usuarioDecodificado;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido o vencido",
    });
  }
};

module.exports = {
  verificarToken,
};