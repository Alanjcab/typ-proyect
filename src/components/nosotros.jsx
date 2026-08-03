import nosotrosImg from "../assets/images/nosotros/nosotros.jpg";

function Nosotros() {
  return (
    <section
      className="nosotros"
      id="nosotros"
    >
      <div className="nosotros-container">
        <div className="nosotros-visual">
          <div className="nosotros-image">
            <img
              src={nosotrosImg}
              alt="Estatua de la Justicia en un estudio jurídico"
            />
          </div>

          <div className="nosotros-experience">
            <strong>5+</strong>

            <span>
              Años de experiencia
            </span>
          </div>
        </div>

        <div className="nosotros-content">
          <p className="section-eyebrow">
            Nuestra experiencia
          </p>

          <h2 className="nosotros-title">
            Asesoramiento claro, profesional y cercano
          </h2>

          <p className="nosotros-description">
            Acompañamos a cada cliente durante todo el proceso,
            brindando información clara y un seguimiento
            personalizado de cada trámite.
          </p>

          <p className="nosotros-description">
            Nuestro objetivo es ofrecer soluciones responsables,
            transparentes y adaptadas a cada situación particular.
          </p>

          <div className="nosotros-values">
            <div className="nosotros-value">
              <span aria-hidden="true">
                01
              </span>

              <div>
                <h3>
                  Atención personalizada
                </h3>

                <p>
                  Analizamos cada caso de manera individual para
                  ofrecer el asesoramiento adecuado.
                </p>
              </div>
            </div>

            <div className="nosotros-value">
              <span aria-hidden="true">
                02
              </span>

              <div>
                <h3>
                  Comunicación transparente
                </h3>

                <p>
                  Explicamos cada etapa del proceso con claridad y
                  mantenemos un contacto permanente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;