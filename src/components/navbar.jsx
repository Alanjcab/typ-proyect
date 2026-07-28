import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          TP Estudio Jurídico
        </Link>

        <nav className="navbar-links">
          <a href="/#nosotros">Nosotros</a>
          <a href="/#servicios">Servicios</a>
          <Link to="/contacto">Contacto</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;