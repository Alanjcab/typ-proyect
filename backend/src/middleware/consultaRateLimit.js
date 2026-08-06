const { rateLimit } = require("express-rate-limit");

const consultaRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,

  standardHeaders: "draft-8",
  legacyHeaders: false,

  message: {
    message:
      "Se enviaron demasiadas consultas desde este dispositivo. Por favor, intentá nuevamente dentro de unos minutos.",
  },
});

module.exports = consultaRateLimit;