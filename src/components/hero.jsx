import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-eyebrow">
                        Especialistas en
                    </p>

                    <h1 className="hero-title">
                        Derecho Previsional
                    </h1>

                    <p className="hero-description">
                        Brindamos asesoramiento profesional, claro y personalizado
                        para acompañarte en cada etapa de tu trámite.
                    </p>

                    <Link to="/contacto" className="hero-button">
                        Solicitar asesoramiento
                        <span aria-hidden="true">→</span>
                    </Link>

                    <div className="hero-benefits">
                        <div className="hero-benefit">
                            <span className="hero-benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <span>Atención personalizada</span>
                        </div>

                        <div className="hero-benefit">
                            <span className="hero-benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <span>Seguimiento permanente</span>
                        </div>

                        <div className="hero-benefit">
                            <span className="hero-benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <span>Respuesta rápida</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-placeholder" aria-label="Imagen pendiente">
                    <div className="image-placeholder-frame">
                        <div className="image-placeholder-content">
                            <span className="image-placeholder-icon" aria-hidden="true">
                                ▧
                            </span>

                            <p className="image-placeholder-title">Imagen del estudio</p>
                            <p className="image-placeholder-size">900 × 1100 px</p>
                            <p className="image-placeholder-status">Pendiente del cliente</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;