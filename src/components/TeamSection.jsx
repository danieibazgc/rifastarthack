// src/components/TeamSection.jsx
// Sección del equipo con grid de tarjetas

import SectionTitle from '@/components/shared/SectionTitle';
import TeamCard from '@/components/shared/TeamCard';
import { team } from '@/data/teamData';

function TeamSection() {
  return (
    <section
      id="equipo"
      className="section-pad"
      style={{ background: '#0d0d0d' }}
    >
      <div className="container">
        <SectionTitle
          title="El Equipo 🤝"
          subtitle="Cuatro estudiantes de la UTP listos para representar al Perú en el escenario tech más competitivo de Europa"
        />

        <div className="row g-4 justify-content-center">
          {team.map(member => (
            <div key={member.id} className="col-sm-6 col-lg-3">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Tagline del equipo */}
        <div className="text-center mt-5">
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#8892b0',
              fontSize: '0.95rem',
              maxWidth: 480,
              margin: '0 auto'
            }}
          >
            Miembros de{' '}
            <strong style={{ color: '#f5c518' }}>LEAD UTP</strong> —
            comunidad de estudiantes de la Universidad Tecnológica del Perú
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
