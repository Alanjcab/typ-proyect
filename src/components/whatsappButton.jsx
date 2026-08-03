import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const telefono = "5492235563845"; /*nuemro del cleinte*/
  const mensaje =
    "Hola, quisiera realizar una consulta sobre asesoramiento previsional.";

  const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;