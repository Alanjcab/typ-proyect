import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { obtenerConsultas } from "../services/consultasService";
import "../styles/admin.css";
import Header from "../components/admin/header";
import DashboardCards from "../components/admin/dashboardCards";
import ConsultasList from "../components/admin/consultasList";
import ConsultaDetail from "../components/admin/consultaDetail";

const Admin = () => {
    const navigate = useNavigate();

    const [consultas, setConsultas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensajeError, setMensajeError] = useState("");
    const [consultaSeleccionada, setConsultaSeleccionada] = useState(null);
    const [busqueda, setBusqueda] = useState("");
    const detalleRef = useRef(null);

    const usuarioGuardado = localStorage.getItem("usuario");

    const usuario = usuarioGuardado
        ? JSON.parse(usuarioGuardado)
        : null;

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");

        navigate("/login");
    };

    useEffect(() => {
        const cargarConsultas = async () => {
            try {
                setMensajeError("");

                const data = await obtenerConsultas();

                setConsultas(data);
            } catch (error) {
                console.error(error);

                setMensajeError(
                    error.message || "No se pudieron cargar las consultas"
                );
            } finally {
                setCargando(false);
            }
        };

        cargarConsultas();
    }, []);

    const manejarConsultaActualizada = (consultaActualizada) => {
        setConsultas((consultasAnteriores) =>
            consultasAnteriores.map((consulta) =>
                consulta.id === consultaActualizada.id
                    ? consultaActualizada
                    : consulta
            )
        );

        setConsultaSeleccionada(consultaActualizada);
    };

    const seleccionarConsulta = (consulta) => {
        setConsultaSeleccionada(consulta);
    };

    useEffect(() => {
        if (!consultaSeleccionada) return;

        const esResponsive = window.matchMedia(
            "(max-width: 900px)"
        ).matches;

        if (esResponsive) {
            detalleRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [consultaSeleccionada]);


    const textoBusqueda = busqueda.trim().toLowerCase();

    const consultasFiltradas = consultas.filter((consulta) =>
        `${consulta.nombre || ""} ${consulta.apellido || ""}`
            .toLowerCase()
            .includes(textoBusqueda)
    );

    return (
        <main className="admin-page">
            <Header
                usuario={usuario}
                cerrarSesion={cerrarSesion}
            />

            <DashboardCards consultas={consultas} />

            {cargando ? (
                <p className="admin-message">
                    Cargando consultas...
                </p>
            ) : mensajeError ? (
                <p className="admin-message admin-error">
                    {mensajeError}
                </p>
            ) : consultas.length === 0 ? (
                <p className="admin-message">
                    No hay consultas registradas.
                </p>
            ) : (
                <>
                    <div className="consultas-toolbar">
                        <input
                            type="search"
                            placeholder="Buscar por nombre o apellido..."
                            value={busqueda}
                            onChange={(event) =>
                                setBusqueda(event.target.value)
                            }
                        />
                    </div>

                    <section className="dashboard-content">
                        <div className="dashboard-list">
                            {consultasFiltradas.length === 0 ? (
                                <p className="admin-message">
                                    No se encontraron consultas.
                                </p>
                            ) : (
                                <ConsultasList
                                    consultas={consultasFiltradas}
                                    consultaSeleccionada={
                                        consultaSeleccionada
                                    }
                                    seleccionarConsulta={
                                        seleccionarConsulta
                                    }
                                />
                            )}
                        </div>
                        <div ref={detalleRef}>
                            <ConsultaDetail
                                consulta={consultaSeleccionada}
                                onConsultaActualizada={
                                    manejarConsultaActualizada
                                }
                            />
                        </div>
                    </section>
                </>
            )}
        </main>
    );
};

export default Admin;