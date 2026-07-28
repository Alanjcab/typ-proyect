import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import WhatsappButton from "./components/whatsappButton";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
        <WhatsappButton />
      </div>
    </BrowserRouter>
  );
}

export default App;