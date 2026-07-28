import { Link } from "react-router-dom";

/*guardo la informacion de las tarjetas en un array*/
const servicios = [
  {
    numero: "01",
    titulo: "Jubilaciones",
    descripcion:
      "Asesoramiento y gestión integral de trámites jubilatorios.",
  },
  {
    numero: "02",
    titulo: "Pensiones",
    descripcion:
      "Acompañamiento en la gestión de pensiones y beneficios.",
  },
  {
    numero: "03",
    titulo: "Reajustes",
    descripcion:
      "Análisis de haberes y asesoramiento en reclamos previsionales.",
  },
  {
    numero: "04",
    titulo: "Reconocimientos",
    descripcion:
      "Gestión de reconocimiento de servicios y aportes laborales.",
  },
  {
    numero: "05",
    titulo: "Moratorias",
    descripcion:
      "Evaluación de alternativas para regularizar aportes previsionales.",
  },
  {
    numero: "06",
    titulo: "Asesoramiento integral",
    descripcion:
      "Atención personalizada para resolver cada situación previsional.",
  },
];

function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">
        <div className="servicios-header">
          <p className="section-eyebrow">Servicios</p>

          <h2 className="servicios-title">
            Soluciones pensadas para cada necesidad previsional
          </h2>

          <p className="servicios-intro">
            Brindamos un acompañamiento profesional, claro y cercano durante
            cada etapa del trámite.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <article className="servicio-card" key={servicio.numero}>
              <div className="servicio-card-top">
                <span className="servicio-number">{servicio.numero}</span>

                <span className="servicio-icon" aria-hidden="true">
                  ⚖
                </span>
              </div>

              <h3 className="servicio-title">{servicio.titulo}</h3>

              <p className="servicio-description">
                {servicio.descripcion}
              </p>

            <Link to="/contacto" className="servicio-link">
                Consultar
                <span aria-hidden="true">→</span>
            </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;