import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop est un composant utilitaire qui fait défiler la fenêtre 
 * vers le haut à chaque changement de route.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Utilisons un délai minimal pour s'assurer que la navigation est terminée
    // avant de faire défiler vers le haut
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
  }, [pathname]);
  
  return null;
}
