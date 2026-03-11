// src/components/HeroSection.jsx
// Sección hero principal con foto del equipo y stat cards

import styles from '@/styles/components/Hero.module.css';
import teamPhoto from '@/assets/team/team.jpeg';

const stats = [
  {
    emoji: '🏆',
    value: 'Top Hackathón',
    label: 'START Hack 2026'
  },
  {
    emoji: '✈️',
    value: '10,430 km',
    label: 'Lima → Suiza'
  },
  {
    emoji: '🎓',
    value: 'ETH Zürich + Stanford',
    label: 'Competidores'
  }
];

function HeroSection() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${teamPhoto})` }}
    >
      {/* Círculos decorativos */}
      <div className={`${styles.decorCircle} ${styles.decorCircle1}`} aria-hidden="true" />
      <div className={`${styles.decorCircle} ${styles.decorCircle2}`} aria-hidden="true" />

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">

            {/* Badge */}
            <div className="text-center mb-4 fade-in-up">
              <span className={styles.badge}>
                🌍 Representando al Perú en Europa
              </span>
            </div>

            {/* Título */}
            <h1 className={`${styles.title} text-center fade-in-up`}>
              De Perú a{' '}
              <span className={styles.titleAccent}>Suiza</span>
            </h1>

            {/* Subtítulo */}
            <p className={`${styles.subtitle} text-center mx-auto fade-in-up`}>
              4 estudiantes peruanos seleccionados entre miles para competir en{' '}
              <strong style={{ color: '#f5c518' }}>START Hack 2026</strong> —
              la hackathon más grande de Europa
            </p>

            {/* Descripción */}
            <p className={`${styles.description} text-center mx-auto`}>
              100% de las ganancias van a financiar nuestro viaje a START Hack 2026 
              en Suiza, donde representaremos a Perú en el hackathon más grande de Europa.
            </p>

            {/* Botones CTA */}
            <div className={`${styles.ctaGroup} justify-content-center`}>
              <button
                onClick={() => handleScroll('rifa')}
                className="btn btn-warning btn-lg fw-bold px-5"
                style={{ borderRadius: 12 }}
              >
                🎟️ Participar en la Rifa — S/10
              </button>
              <button
                onClick={() => handleScroll('servicios')}
                className="btn btn-outline-light btn-lg px-5"
                style={{ borderRadius: 12 }}
              >
                💼 Ver Servicios
              </button>
            </div>

            {/* Stat Cards */}
            <div className="row g-3 justify-content-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="col-6 col-md-4">
                  <div className={`${styles.statCard} glass-card`}>
                    <span className={styles.statEmoji} aria-hidden="true">
                      {stat.emoji}
                    </span>
                    <p className={styles.statValue}>{stat.value}</p>
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
