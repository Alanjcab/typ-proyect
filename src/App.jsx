import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import WhatsappButton from "./components/whatsappButton";
import ScrollTop from "./components/scrollTop";

function App() {
  return (
    <div className="app-container">
      <ScrollTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;