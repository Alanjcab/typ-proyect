import apiFetch from "./api";

export const iniciarSesion = async (email, password) => {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};