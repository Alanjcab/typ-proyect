import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elemento = document.querySelector(hash);

      if (elemento) {
        setTimeout(() => {
          elemento.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);
      }

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollTop;