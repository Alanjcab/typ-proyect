const DashboardCards = ({ consultas }) => {
  const total = consultas.length;

  const nuevas = consultas.filter(
    (consulta) => consulta.estado === "nueva"
  ).length;

  const seguimiento = consultas.filter(
    (consulta) => consulta.estado === "en_seguimiento"
  ).length;

  const cerradas = consultas.filter(
    (consulta) => consulta.estado === "cerrada"
  ).length;

  return (
    <section className="admin-summary">
      <article className="summary-card">
        <span>Total de consultas</span>
        <strong>{total}</strong>
      </article>

      <article className="summary-card">
        <span>Nuevas</span>
        <strong>{nuevas}</strong>
      </article>

      <article className="summary-card">
        <span>En seguimiento</span>
        <strong>{seguimiento}</strong>
      </article>

      <article className="summary-card">
        <span>Cerradas</span>
        <strong>{cerradas}</strong>
      </article>
    </section>
  );
};

export default DashboardCards;