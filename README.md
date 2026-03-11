# 🚀 RifaStartHack

> Landing page de recaudación de fondos para el equipo LEAD UTP seleccionado para **START Hack 2026** en St. Gallen, Suiza.

## ¿Qué es este proyecto?

Cuatro estudiantes peruanos de la **Universidad Tecnológica del Perú (UTP)** y líderes de la comunidad **LEAD UTP** fueron seleccionados para competir presencialmente en START Hack 2026 — uno de los hackathones más prestigiosos de Europa. La organización cubre entrada, estadía y alimentación. Solo necesitamos cubrir los **pasajes aéreos (~$1,400 USD por persona)**.

## Stack Tecnológico

- **React 19** + Vite 7
- **Bootstrap 5.3** + React Bootstrap
- **Google Fonts**: Inter (cuerpo) + Space Grotesk (títulos)
- **Bootstrap Icons** (via CDN)
- CSS Modules para estilos por componente

---

## Instalación

```
npm install
npm run dev
npm run build
npm run preview
```

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx           # Barra de navegación sticky con scroll suave
│   ├── HeroSection.jsx      # Hero con gradiente espacial y stat cards
│   ├── ProgressBar.jsx      # Barra de progreso de recaudación animada
│   ├── TeamSection.jsx      # Grid de tarjetas del equipo
│   ├── EventSection.jsx     # Información de START Hack 2026
│   ├── RaffleSection.jsx    # Rifa solidaria con calculadora
│   ├── ServicesSection.jsx  # Servicios tech del equipo
│   ├── PaymentSection.jsx   # Métodos de pago
│   ├── Footer.jsx           # Pie de página
│   └── shared/
│       ├── SectionTitle.jsx # Título de sección reutilizable
│       ├── TeamCard.jsx     # Tarjeta de miembro del equipo
│       └── ServiceCard.jsx  # Tarjeta de servicio
├── data/
│   ├── teamData.js          # Datos del equipo
│   ├── servicesData.js      # Datos de servicios ofrecidos
│   └── paymentData.js       # Métodos de pago + progreso de recaudación
├── hooks/
│   └── useCountUp.js        # Hook de animación de números
└── styles/
    ├── global.css
    └── components/
        ├── Hero.module.css
        ├── Raffle.module.css
        └── Payment.module.css
```

---

## 🔧 Cómo actualizar datos

### Actualizar el progreso de recaudación

Edita `src/data/paymentData.js` y modifica:

```js
export const fundraisingProgress = {
  raised: 1400,    // <- monto recaudado en USD
  goal: 5600,
  supporters: 8    // <- cantidad de personas que apoyaron
};
```

### Completar datos de pago

En `src/data/paymentData.js`, reemplaza todos los campos `[COMPLETAR]` con los datos reales.

### Actualizar links del equipo

En `src/data/teamData.js`, reemplaza los `"#"` con URLs reales de LinkedIn y GitHub.

### Premio de la rifa

En `src/components/RaffleSection.jsx`, busca el badge "Premio próximamente" y actualízalo cuando esté confirmado.

---

## Equipo

| Nombre | Rol |
|--------|-----|
| Daniel Ibañez | Líder del equipo |
| Shay Fernando Guzman Vara | Desarrollador |
| Jose Hurtado Rivas | Desarrollador |
| Matthew Zegarra Ramos | Desarrollador |

**LEAD UTP · Universidad Tecnológica del Perú · Lima, Perú**

© 2026 RifaStartHack — Hecho con ❤️ desde Lima para el mundo.
