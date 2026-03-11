// src/components/shared/TeamCard.jsx
// Tarjeta de miembro del equipo

function TeamCard({ member }) {
  const { name, role, university, community, photo, linkedin, github, instagram } = member;

  return (
    <div className="dark-card p-4 h-100 text-center">
      {/* Avatar con foto */}
      <div
        className="rounded-circle mx-auto mb-3"
        style={{
          width: 80,
          height: 80,
          border: '2px solid rgba(245, 197, 24, 0.3)',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        <img
          src={photo}
          alt={`Foto de ${name}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Info */}
      <h5
        className="fw-bold mb-1"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
      >
        {name}
      </h5>
      <p
        className="mb-1 small fw-semibold"
        style={{ color: '#f5c518' }}
      >
        {role}
      </p>
      <p
        className="mb-1 small"
        style={{ color: '#8892b0' }}
      >
        {university}
      </p>
      <span
        className="badge mb-3"
        style={{
          background: 'rgba(245, 197, 24, 0.12)',
          color: '#f5c518',
          border: '1px solid rgba(245, 197, 24, 0.25)',
          fontSize: '0.75rem'
        }}
      >
        {community}
      </span>

      {/* Redes sociales */}
      <div className="d-flex justify-content-center gap-3" style={{ flexWrap: 'wrap' }}>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${name}`}
          style={{ color: '#8892b0', fontSize: '1.3rem' }}
          className="text-decoration-none"
          onMouseEnter={e => (e.currentTarget.style.color = '#0a66c2')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8892b0')}
        >
          <i className="bi bi-linkedin" />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${name}`}
          style={{ color: '#8892b0', fontSize: '1.3rem' }}
          className="text-decoration-none"
          onMouseEnter={e => (e.currentTarget.style.color = '#e6e6e6')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8892b0')}
        >
          <i className="bi bi-github" />
        </a>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram de ${name}`}
            style={{ color: '#8892b0', fontSize: '1.3rem' }}
            className="text-decoration-none"
            onMouseEnter={e => (e.currentTarget.style.color = '#e1306c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8892b0')}
          >
            <i className="bi bi-instagram" />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
