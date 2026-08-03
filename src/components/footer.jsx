function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>TyP Estudio Jurídico</h3>
          <p>Asesoramiento en derecho previsional.</p>
        </div>

        <div>
          <p>Mar del Plata, Buenos Aires</p>
          <p>Argentina</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} TyP Estudio Jurídico. Todos los derechos reservados.
        </p>

        <p className="footer-credit">
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/alan-julian-cabrera-567273228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alan Cabrera
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;