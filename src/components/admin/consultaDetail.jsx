import { useEffect, useState } from "react";
import { actualizarEstadoConsulta } from "../../services/consultasService";
import { obtenerTextoEstado } from "../../utils/estadoConsulta";

const ConsultaDetail = ({ consulta, onConsultaActualizada }) => {
  const [estado, setEstado] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    if (consulta) {
      setEstado(consulta.estado);
      setMensajeError("");
    }
  }, [consulta]);

  if (!consulta) {
    return (
      <section className="consulta-detail">
        <div className="consulta-detail-empty">
          <h2>Seleccioná una consulta</h2>
          <p>
            Elegí una consulta de la lista para ver toda la información.
          </p>
        </div>
      </section>
    );
  }

  const huboCambios = estado !== consulta.estado;

  const manejarGuardado = async () => {
    try {
      setGuardando(true);
      setMensajeError("");

      const respuesta = await actualizarEstadoConsulta(
        consulta.id,
        estado
      );

      onConsultaActualizada(respuesta.consulta);
    } catch (error) {
      setMensajeError(error.message);
    } finally {
      setGuardando(false);
    }
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="consulta-detail">
      <div className="consulta-detail-header">
        <div>
          <span className="consulta-detail-label">Consulta seleccionada</span>

          <h2>
            {consulta.nombre} {consulta.apellido}
          </h2>
        </div>

        <span className={`estado-badge estado-${consulta.estado}`}>
          {obtenerTextoEstado(consulta.estado)}
        </span>
      </div>

      <div className="consulta-detail-content">
        <div className="consulta-detail-group">
          <span className="consulta-detail-title">
            Información de contacto
          </span>

          <p>
            <strong>Email:</strong> {consulta.email}
          </p>

          <p>
            <strong>Teléfono:</strong> {consulta.telefono}
          </p>

          <p>
            <strong>Medio preferido:</strong>{" "}
            {consulta.medioContactoPreferido}
          </p>
        </div>

        <div className="consulta-detail-group">
          <span className="consulta-detail-title">
            Información de la consulta
          </span>

          <p>
            <strong>Área:</strong> {consulta.areaConsulta}
          </p>

          <p>
            <strong>Fecha:</strong>{" "}
            {formatearFecha(consulta.fechaCreacion)}
          </p>

          <div className="consulta-message">
            <strong>Mensaje</strong>
            <p>{consulta.mensaje}</p>
          </div>
        </div>

        <div className="consulta-detail-group">
          <label htmlFor="estado">
            Estado de la consulta
          </label>

          <select
            id="estado"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
            disabled={guardando}
          >
            <option value="nueva">Nueva</option>
            <option value="contactada">Contactada</option>
            <option value="en_seguimiento">
              En seguimiento
            </option>
            <option value="cerrada">Cerrada</option>
          </select>
        </div>

        {mensajeError && (
          <p className="admin-error">{mensajeError}</p>
        )}

        <button
          type="button"
          className="save-button"
          onClick={manejarGuardado}
          disabled={!huboCambios || guardando}
        >
          {guardando ? "Guardando..." : "Guardar cambios"}
        </button>
      </div>
    </section>
  );
};

export default ConsultaDetail;