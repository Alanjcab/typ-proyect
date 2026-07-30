import { useState } from "react";
import { crearConsulta } from "../services/consultasService";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    areaConsulta: "",
    mensaje: "",
    medioContactoPreferido: "whatsapp",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await crearConsulta(formData);

      console.log(data);

      alert("Consulta enviada correctamente");

      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        areaConsulta: "",
        mensaje: "",
        medioContactoPreferido: "whatsapp",
      });
    } catch (error) {
      console.error(error);
      alert("No se pudo enviar la consulta");
    }
  };

  return (
    <>
      <main className="contacto-page">
        <section className="contacto-container">
          <div className="contacto-header">
            <h1>Contacto</h1>
            <p>
              Dejanos tu consulta y nos pondremos en contacto con vos.
            </p>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="areaConsulta">Área de consulta</label>

              <select
                id="areaConsulta"
                name="areaConsulta"
                value={formData.areaConsulta}
                onChange={handleChange}
                required
              >
                <option value="">Seleccioná un área</option>
                <option value="laboral">Derecho Laboral</option>
                <option value="civil">Derecho Civil</option>
                <option value="familia">Derecho de Familia</option>
                <option value="sucesiones">Sucesiones</option>
                <option value="penal">Derecho Penal</option>
                <option value="asesoramiento">Asesoramiento General</option>
              </select>
            </div>

            <div className="form-group">
              <label>¿Cómo preferís que nos comuniquemos con vos?</label>

              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="medioContactoPreferido"
                    value="whatsapp"
                    checked={
                      formData.medioContactoPreferido === "whatsapp"
                    }
                    onChange={handleChange}
                  />
                  WhatsApp
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="medioContactoPreferido"
                    value="telefono"
                    checked={
                      formData.medioContactoPreferido === "telefono"
                    }
                    onChange={handleChange}
                  />
                  Teléfono
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="medioContactoPreferido"
                    value="email"
                    checked={
                      formData.medioContactoPreferido === "email"
                    }
                    onChange={handleChange}
                  />
                  Email
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">
                Descripción de la consulta
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>

            <button className="form-button" type="submit">
              Enviar consulta
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contacto;