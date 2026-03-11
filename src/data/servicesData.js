// src/data/servicesData.js
// Datos de servicios ofrecidos por el equipo

export const services = [
  {
    id: 1,
    icon: "bi-file-earmark-person",
    title: "Revisión de CV",
    subtitle: "Asesoría de Stack Tecnológico",
    price: "S/ 25",
    usd: "~$7 USD",
    description:
      "Revisamos tu CV técnico y te ayudamos a definir el stack tecnológico ideal según tus metas profesionales. Entrega en 48 horas.",
    includes: [
      "Revisión detallada de CV",
      "Feedback con sugerencias concretas",
      "Recomendación de stack personalizado",
      "1 sesión de Q&A por WhatsApp"
    ],
    cta: "Solicitar revisión",
    badge: null
  },
  {
    id: 2,
    icon: "bi-laptop",
    title: "Portafolio Web",
    subtitle: "Sitio profesional personalizado",
    price: "S/ 50",
    usd: "~$14 USD",
    description:
      "Creamos tu portafolio web profesional con tus proyectos, habilidades y datos de contacto. Diseño moderno, responsive y listo para compartir.",
    includes: [
      "Diseño 100% personalizado",
      "Responsive (móvil + desktop)",
      "Secciones: sobre mí, proyectos, contacto",
      "Hosting incluido por 1 año"
    ],
    cta: "Solicitar portafolio",
    badge: "Más popular"
  },
  {
    id: 3,
    icon: "bi-ticket-perforated",
    title: "Rifa Solidaria",
    subtitle: "Apoya y gana",
    price: "S/ 10",
    usd: "~$3 USD",
    description:
      "Participa en nuestra rifa solidaria. Cada boleto te da la oportunidad de ganar el premio y ayuda directamente a financiar el viaje a Suiza.",
    includes: [
      "1 número de rifa registrado",
      "Sorteo en vivo por redes sociales",
      "Premio por confirmar 🎁",
      "Actualización en tiempo real"
    ],
    cta: "Comprar boleto",
    badge: null
  }
];
