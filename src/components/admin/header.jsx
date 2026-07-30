const Header = ({ usuario, cerrarSesion }) => {
  return (
    <header className="admin-header">
      <div>
        <p className="admin-eyebrow">TP Estudio Jurídico</p>

        <h1>Panel administrativo</h1>

        <p className="admin-welcome">
          Bienvenido, {usuario?.nombre || "Administrador"}
        </p>
      </div>

      <button
        type="button"
        className="logout-button"
        onClick={cerrarSesion}
      >
        Cerrar sesión
      </button>
    </header>
  );
};

export default Header;