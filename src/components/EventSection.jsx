// src/components/EventSection.jsx
// Sección con información detallada del START Hack 2026

import SectionTitle from '@/components/shared/SectionTitle';

const eventInfo = [
  { icon: 'bi-calendar-event', key: 'Fechas', value: '18 – 20 de marzo, 2026' },
  { icon: 'bi-geo-alt', key: 'Lugar', value: 'St. Gallen, Suiza 🇨🇭' },
  { icon: 'bi-stopwatch', key: 'Duración', value: '36 horas de hackathón' },
  { icon: 'bi-building', key: 'Organizador', value: 'START Global' },
  { icon: 'bi-airplane', key: 'Lo que necesitamos', value: 'Pasajes aéreos (~S/6,500 PEN c/u) + Viaticos (~S/3500 PEN c/u)' }
];

const reasons = [
  { icon: 'bi-globe2', text: 'Networking global con estudiantes de ETH Zürich, Stanford y más' },
  { icon: 'bi-flag', text: 'Representación latinoamericana en la hackathón más grande de Europa' },
  { icon: 'bi-briefcase', text: 'Experiencia directa con empresas de impacto internacional' },
  { icon: 'bi-megaphone', text: 'Visibilidad para la comunidad tech peruana en el mundo' }
];

function EventSection() {
  return (
    <section
      id="evento"
      className="section-alt section-pad"
    >
      <div className="container">
        <SectionTitle
          title="🌍 El Evento"
          subtitle="START Hack 2026 — La hackathon universitaria más grande de Europa"
        />

        <div className="row g-5 align-items-start">
          {/* Columna izquierda: explicación */}
          <div className="col-lg-6">
            <h4
              className="fw-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
            >
              ¿Qué es START Hack?
            </h4>
            <p style={{ color: '#b0b8d0', lineHeight: 1.8, marginBottom: 28 }}>
              START Hack es la hackathon universitaria más grande de Europa, organizado por{' '}
              <strong style={{ color: '#f5c518' }}>START Global</strong> en St. Gallen, Suiza.
              Durante <strong>36 horas continuas</strong>, equipos de élite de universidades como
              ETH Zürich y Stanford resuelven desafíos reales propuestos por empresas de impacto
              internacional.
            </p>

            <h4
              className="fw-bold mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
            >
              ¿Por qué es importante que vayamos?
            </h4>
            <ul className="list-unstyled">
              {reasons.map((r, idx) => (
                <li key={idx} className="d-flex align-items-start gap-3 mb-3">
                  <div
                    style={{
                      minWidth: 40,
                      height: 40,
                      background: 'rgba(245, 197, 24, 0.1)',
                      border: '1px solid rgba(245, 197, 24, 0.2)',
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f5c518',
                      fontSize: '1.1rem'
                    }}
                  >
                    <i className={`bi ${r.icon}`} />
                  </div>
                  <p
                    className="mb-0"
                    style={{ color: '#b0b8d0', lineHeight: 1.6, paddingTop: 8 }}
                  >
                    {r.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha: info cards */}
          <div className="col-lg-6">
            <div className="row g-3">
              {eventInfo.map((item, idx) => (
                <div key={idx} className="col-12">
                  <div
                    style={{
                      background: '#1a1a2e',
                      border: '1px solid #2a2a4a',
                      borderLeft: '3px solid #f5c518',
                      borderRadius: 12,
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ fontSize: '1.3rem', color: '#f5c518', minWidth: 24 }}
                    />
                    <div>
                      <p
                        className="mb-0 small"
                        style={{ color: '#8892b0', marginBottom: 2 }}
                      >
                        {item.key}
                      </p>
                      <p
                        className="mb-0 fw-semibold"
                        style={{ color: '#e6e6e6', fontSize: '0.95rem' }}
                      >
                        {item.value}
                      </p>
                    </div>
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

export default EventSection;
