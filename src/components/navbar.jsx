import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    controlarScroll();
    window.addEventListener("scroll", controlarScroll);

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logoTyP.png" alt="Logo del Estudio Jurídico" />
          <span className="navbar-logo-text">Estudio Jurídico</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/#nosotros">Nosotros</Link>
          <Link to="/#servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;