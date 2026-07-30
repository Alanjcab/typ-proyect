export const obtenerTextoEstado = (estado) => {
  switch (estado) {
    case "nueva":
      return "Nueva";
    case "contactada":
      return "Contactada";
    case "en_seguimiento":
      return "En seguimiento";
    case "cerrada":
      return "Cerrada";
    default:
      return estado;
  }
};