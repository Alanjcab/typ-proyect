import apiFetch from "./api";

export const crearConsulta = async (datosConsulta) => {
  return apiFetch("/consultas", {
    method: "POST",
    body: JSON.stringify(datosConsulta),
  });
};

export const obtenerConsultas = async () => {
  return apiFetch("/consultas");
};

export const actualizarEstadoConsulta = async (id, estado) => {
  return apiFetch(`/consultas/${id}/estado`, {
    method: "PUT",
    body: JSON.stringify({
      estado,
    }),
  });
};