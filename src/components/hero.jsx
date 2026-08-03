import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero/hero.jpg";

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
              <span
                className="hero-benefit-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>Atención personalizada</span>
            </div>

            <div className="hero-benefit">
              <span
                className="hero-benefit-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>Seguimiento permanente</span>
            </div>

            <div className="hero-benefit">
              <span
                className="hero-benefit-icon"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>Respuesta rápida</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImg}
            alt="Balanza de la justicia sobre un escritorio jurídico"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;