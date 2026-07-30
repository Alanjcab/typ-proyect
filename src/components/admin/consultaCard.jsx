import { obtenerTextoEstado } from "../../utils/estadoConsulta";

const ConsultaCard = ({
  consulta,
  seleccionada,
  seleccionarConsulta,
}) => {
  const verDetalle = () => {
    seleccionarConsulta(consulta);
  };

  return (
    <article
      className={`consulta-card ${
        seleccionada ? "consulta-card-selected" : ""
      }`}
    >
      <div className="consulta-main">
        <div className="consulta-info">
          <h3>
            {consulta.nombre} {consulta.apellido}
          </h3>

          <p>{consulta.email}</p>

          <div className="consulta-meta">
            <span>{consulta.areaConsulta}</span>

            <span>
              {consulta.telefono || "Sin teléfono"}
            </span>
          </div>
        </div>

        <div className="consulta-actions">
          <span
            className={`estado-badge estado-${consulta.estado}`}
          >
            {obtenerTextoEstado(consulta.estado)}
        </span>

          <button
            type="button"
            className="detail-button"
            onClick={verDetalle}
          >
            Ver detalle
          </button>
        </div>
      </div>
    </article>
  );
};

export default ConsultaCard;