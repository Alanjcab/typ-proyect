import {FaUserTie,FaScaleBalanced,FaComments,FaShieldHalved} from "react-icons/fa6";

function porQueElegirnos() {
  const motivos = [
    {
      id: 1,
      icono: <FaUserTie />,
      titulo: "Atención personalizada",
      descripcion:
        "Analizamos cada situación de manera particular y brindamos un acompañamiento cercano durante todo el proceso.",
    },
    {
      id: 2,
      icono: <FaScaleBalanced />,
      titulo: "Experiencia y compromiso",
      descripcion:
        "Trabajamos con responsabilidad y dedicación para ofrecer soluciones jurídicas acordes a cada necesidad.",
    },
    {
      id: 3,
      icono: <FaComments />,
      titulo: "Respuestas claras",
      descripcion:
        "Explicamos cada etapa en un lenguaje sencillo, para que siempre sepas cómo avanza tu caso.",
    },
    {
      id: 4,
      icono: <FaShieldHalved />,
      titulo: "Confianza y transparencia",
      descripcion:
        "Mantenemos una comunicación honesta y permanente, desde la primera consulta hasta la resolución.",
    },
  ];

  return (
    <section className="porque-elegirnos">
      <div className="porque-elegirnos-container">
        <div className="porque-elegirnos-header">
          <span className="section-label">Nuestro compromiso</span>

          <h2>¿Por qué elegirnos?</h2>

          <p>
            Brindamos un servicio jurídico cercano, responsable y orientado a
            encontrar la mejor solución para cada cliente.
          </p>
        </div>

        <div className="porque-elegirnos-grid">
          {motivos.map((motivo) => (
            <article className="motivo-card" key={motivo.id}>
              <div className="motivo-icono" aria-hidden="true">
                {motivo.icono}
              </div>

              <h3>{motivo.titulo}</h3>

              <p>{motivo.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default porQueElegirnos;