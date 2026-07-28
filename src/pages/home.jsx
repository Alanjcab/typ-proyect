import Hero from "../components/hero";
import Nosotros from "../components/nosotros";
import Servicios from "../components/servicios";
import PorQueElegirnos from "../components/porQueElegirnos";

function Home() {
  return (
    <main>
      <Hero />
      <Nosotros />
      <Servicios />
      <PorQueElegirnos />
    </main>
  );
}

export default Home;