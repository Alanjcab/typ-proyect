import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iniciarSesion } from "../services/authService";
import "../styles/login.css";
const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [mensaje, setMensaje] = useState("");
    const [cargando, setCargando] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setMensaje("");
        setCargando(true);

        try {
            const data = await iniciarSesion(
                formData.email,
                formData.password
            );

            localStorage.setItem("token", data.token);
            localStorage.setItem(
                "usuario",
                JSON.stringify(data.usuario)
            );

            navigate("/admin");
        } catch (error) {
            setMensaje(error.message);
        } finally {
            setCargando(false);
        }
    };

    return (
        <main className="login-page">
            <section className="login-visual">
                <div className="login-brand">
                    <div className="login-brand-icon">
                        <img
                            src="/logoTyP.png"
                            alt="Logo TyP"
                            className="login-logo"
                        />
                    </div>

                    <div>
                        <p className="login-brand-name">
                            Estudio Jurídico
                        </p>

                        <p className="login-brand-subtitle">
                            Gestión de consultas
                        </p>
                    </div>
                </div>

                <div className="login-visual-content">
                    <span>Panel de gestión</span>

                    <h2>
                        Todo lo que necesitás, en un solo lugar.
                    </h2>

                    <p>
                        Administrá las consultas de tus clientes de forma
                        segura, ordenada y eficiente.
                    </p>

                    <div className="login-features">
                        <div className="login-feature">
                            <strong>Consultas centralizadas</strong>
                            <p>
                                Accedé rápidamente a toda la información de cada
                                cliente.
                            </p>
                        </div>

                        <div className="login-feature">
                            <strong>Seguimiento organizado</strong>
                            <p>
                                Actualizá el estado de cada consulta sin perder
                                información.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="login-visual-footer">
                    Acceso exclusivo para personal autorizado.
                </p>
            </section>

            <section className="login-form-section">
                <div className="login-card">
                    <div className="login-card-header">
                        <span className="login-card-label">
                            Acceso administrativo
                        </span>

                        <h1>Bienvenido</h1>

                        <p>
                            Ingresá con tu cuenta para gestionar las consultas.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">
                                Correo electrónico
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nombre@correo.com"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                Contraseña
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Ingresá tu contraseña"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {mensaje && (
                            <p className="login-message">
                                {mensaje}
                            </p>
                        )}

                        <button type="submit" disabled={cargando}>
                            {cargando ? "Ingresando..." : "Iniciar sesión"}
                        </button>
                    </form>

                    <p className="login-help">
                        Si tenés problemas para ingresar, comunicate con el
                        administrador del sistema.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;