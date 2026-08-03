import { useState } from "react";
import { crearConsulta } from "../services/consultasService";
import contactoImg from "../assets/images/contacto/contacto.jpg";

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

  const [modal, setModal] = useState({
    visible: false,
    tipo: "",
    titulo: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  const cerrarModal = () => {
    setModal({
      visible: false,
      tipo: "",
      titulo: "",
      mensaje: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (enviando) return;

    setEnviando(true);

    try {
      await crearConsulta(formData);

      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        areaConsulta: "",
        mensaje: "",
        medioContactoPreferido: "whatsapp",
      });

      setModal({
        visible: true,
        tipo: "exito",
        titulo: "Consulta enviada",
        mensaje:
          "Recibimos tu consulta correctamente. Nos comunicaremos con vos a la brevedad.",
      });
    } catch (error) {
      console.error(error);

      setModal({
        visible: true,
        tipo: "error",
        titulo: "No pudimos enviar la consulta",
        mensaje:
          error.message ||
          "Ocurrió un inconveniente. Por favor, intentá nuevamente en unos minutos.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contacto-page">
      <section className="contacto-layout">
        <div className="contacto-visual">
          <img
            src={contactoImg}
            alt="Mazo de juez sobre un escritorio jurídico"
          />

          <div className="contacto-visual-overlay" />

          <div className="contacto-visual-content">
            <p className="contacto-visual-eyebrow">
              Asesoramiento profesional
            </p>

            <h2>Estamos para escucharte</h2>

            <p>
              Contanos tu situación y nos comunicaremos con vos para
              brindarte una orientación clara y personalizada.
            </p>
          </div>

          <div className="contacto-trust-card">
            <strong>Tu consulta es confidencial</strong>

            <ul>
              <li>Atención personalizada</li>
              <li>Comunicación clara</li>
              <li>Seguimiento del trámite</li>
            </ul>
          </div>
        </div>

        <div className="contacto-container">
          <div className="contacto-header">
            <p className="section-eyebrow">
              Contacto
            </p>

            <h1>Realizá tu consulta</h1>

            <p>
              Completá el formulario y nos pondremos en contacto con vos.
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
                  disabled={enviando}
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
                  disabled={enviando}
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
                  disabled={enviando}
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
                  disabled={enviando}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="areaConsulta">
                Área de consulta
              </label>

              <select
                id="areaConsulta"
                name="areaConsulta"
                value={formData.areaConsulta}
                onChange={handleChange}
                disabled={enviando}
                required
              >
                <option value="">
                  Seleccioná un área
                </option>

                <option value="laboral">
                  Derecho Laboral
                </option>

                <option value="civil">
                  Derecho Civil
                </option>

                <option value="familia">
                  Derecho de Familia
                </option>

                <option value="sucesiones">
                  Sucesiones
                </option>

                <option value="penal">
                  Derecho Penal
                </option>

                <option value="asesoramiento">
                  Asesoramiento General
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>
                ¿Cómo preferís que nos comuniquemos con vos?
              </label>

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
                    disabled={enviando}
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
                    disabled={enviando}
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
                    disabled={enviando}
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
                disabled={enviando}
                rows="6"
                required
              />
            </div>

            <button
              className="form-button"
              type="submit"
              disabled={enviando}
            >
              {enviando ? "Enviando..." : "Enviar consulta"}
            </button>
          </form>
        </div>
      </section>

      {modal.visible && (
        <div
          className="consulta-modal-overlay"
          role="presentation"
          onClick={cerrarModal}
        >
          <section
            className={`consulta-modal consulta-modal-${modal.tipo}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consulta-modal-titulo"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="consulta-modal-close"
              onClick={cerrarModal}
              aria-label="Cerrar mensaje"
            >
              ×
            </button>

            <div
              className="consulta-modal-icon"
              aria-hidden="true"
            >
              {modal.tipo === "exito" ? "✓" : "!"}
            </div>

            <h2 id="consulta-modal-titulo">
              {modal.titulo}
            </h2>

            <p>{modal.mensaje}</p>

            <button
              type="button"
              className="consulta-modal-button"
              onClick={cerrarModal}
            >
              Entendido
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default Contacto;