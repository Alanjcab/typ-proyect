import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contacto from "./pages/contacto";
import WhatsappButton from "./components/whatsappButton";
import ScrollTop from "./components/scrollTop";
import Login from "./pages/login";
import Admin from "./pages/admin";
import ProtectedRoute from "./components/protectedRoutes";

function App() {
  return (
    <>
      <ScrollTop />

      <Routes>

        {/* Sitio público */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
              <WhatsappButton />
            </>
          }
        />

        <Route
          path="/contacto"
          element={
            <>
              <Navbar />
              <Contacto />
              <Footer />
              <WhatsappButton />
            </>
          }
        />

        {/* Login */}

        <Route path="/login" element={<Login />} />

        {/* Panel */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;