import ConsultaCard from "./consultaCard";

const ConsultasList = ({
  consultas,
  consultaSeleccionada,
  seleccionarConsulta,
}) => {
  return (
    <div className="consultas-list">
      {consultas.map((consulta) => (
        <ConsultaCard
          key={consulta.id}
          consulta={consulta}
          seleccionada={consultaSeleccionada?.id === consulta.id}
          seleccionarConsulta={seleccionarConsulta}
        />
      ))}
    </div>
  );
};

export default ConsultasList;