import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const irASeccion = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
         <Link to="/" className="navbar-logo">
        <img src="/logoTyP.png" alt="Logo Estudio Jurídico" />
        <span>Estudio Jurídico</span>
        </Link>

        <nav className="navbar-links">
          <button
            type="button"
            className="navbar-link-button"
            onClick={() => irASeccion("nosotros")}
          >
            Nosotros
          </button>

          <button
            type="button"
            className="navbar-link-button"
            onClick={() => irASeccion("servicios")}
          >
            Servicios
          </button>

          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
