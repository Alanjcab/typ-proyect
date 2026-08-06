const { body, validationResult } = require("express-validator");

const areasPermitidas = [
  "laboral",
  "civil",
  "familia",
  "sucesiones",
  "penal",
  "asesoramiento",
];

const mediosPermitidos = [
  "whatsapp",
  "telefono",
  "email",
];

const camposPermitidos = [
  "nombre",
  "apellido",
  "email",
  "telefono",
  "areaConsulta",
  "mensaje",
  "medioContactoPreferido",
];

const validarCamposPermitidos = (req, res, next) => {
  const camposRecibidos = Object.keys(req.body);

  const camposNoPermitidos = camposRecibidos.filter(
    (campo) => !camposPermitidos.includes(campo)
  );

  if (camposNoPermitidos.length > 0) {
    return res.status(400).json({
      message: "La solicitud contiene campos no permitidos.",
    });
  }

  next();
};

const validarConsulta = [
  validarCamposPermitidos,

  body("nombre")
    .trim()
    .isLength({ min: 2, max: 60 })
    .withMessage("El nombre debe tener entre 2 y 60 caracteres.")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü' -]+$/)
    .withMessage("El nombre contiene caracteres no permitidos."),

  body("apellido")
    .trim()
    .isLength({ min: 2, max: 60 })
    .withMessage("El apellido debe tener entre 2 y 60 caracteres.")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü' -]+$/)
    .withMessage("El apellido contiene caracteres no permitidos."),

  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("El email ingresado no es válido.")
    .isLength({ max: 150 })
    .withMessage("El email es demasiado largo."),

  body("telefono")
    .trim()
    .isLength({ min: 8, max: 20 })
    .withMessage("El teléfono no es válido.")
    .matches(/^[0-9+\-\s()]+$/)
    .withMessage("El teléfono contiene caracteres no permitidos."),

  body("areaConsulta")
    .trim()
    .isIn(areasPermitidas)
    .withMessage("El área de consulta seleccionada no es válida."),

  body("medioContactoPreferido")
    .trim()
    .isIn(mediosPermitidos)
    .withMessage("El medio de contacto seleccionado no es válido."),

  body("mensaje")
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage(
      "La descripción debe tener entre 10 y 2000 caracteres."
    ),

  (req, res, next) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      return res.status(400).json({
        message: "Los datos enviados no son válidos.",
        errores: errores.array(),
      });
    }

    next();
  },
];

module.exports = validarConsulta;