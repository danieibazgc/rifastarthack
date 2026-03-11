// src/components/Footer.jsx
// Pie de página con logo, redes sociales y créditos

function Footer() {
  const navLinks = [
    { href: '#equipo', label: 'Equipo' },
    { href: '#evento', label: 'Evento' },
    { href: '#rifa', label: 'Rifa' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#pago', label: 'Pago' }
  ];

  // TODO: Reemplazar '#' con URLs reales de redes sociales del equipo
  const socialLinks = [
    { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'bi-github', href: '#', label: 'GitHub' },
    { icon: 'bi-instagram', href: '#', label: 'Instagram' }
  ];

  const handleScrollTo = (e, href) => {
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#080810',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(32px, 5vw, 56px) 0 clamp(16px, 3vw, 32px)'
      }}
    >
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Logo y tagline */}
          <div className="col-lg-4">
            <p
              className="fw-bold mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.3rem',
                color: '#e6e6e6'
              }}
            >
              🚀 <span style={{ color: '#f5c518' }}>Rifa</span>StartHack
            </p>
            <p style={{ color: '#8892b0', fontSize: '0.9rem', lineHeight: 1.7 }}>
              De Lima a St. Gallen — apoyando a estudiantes peruanos en el hackathón más
              grande de Europa.
            </p>

            {/* Redes sociales */}
            <div className="d-flex gap-3 mt-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8892b0',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(245, 197, 24, 0.4)';
                    e.currentTarget.style.color = '#f5c518';
                    e.currentTarget.style.background = 'rgba(245, 197, 24, 0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#8892b0';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Links de navegación */}
          <div className="col-lg-3 offset-lg-1">
            <p
              className="fw-semibold mb-3 small"
              style={{ color: '#e6e6e6', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Navegación
            </p>
            <ul className="list-unstyled">
              {navLinks.map(link => (
                <li key={link.href} className="mb-2">
                  <a
                    href={link.href}
                    onClick={e => handleScrollTo(e, link.href)}
                    className="text-decoration-none"
                    style={{ color: '#8892b0', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f5c518')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#8892b0')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info institucional */}
          <div className="col-lg-4">
            <p
              className="fw-semibold mb-3 small"
              style={{ color: '#e6e6e6', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Sobre el equipo
            </p>
            <p style={{ color: '#8892b0', fontSize: '0.9rem', lineHeight: 1.7 }}>
              LEAD UTP · Universidad Tecnológica del Perú · Lima, Perú
            </p>
            <div className="d-flex gap-2 flex-wrap mt-3">
              {['React', 'Vite', 'Bootstrap 5'].map(tag => (
                <span
                  key={tag}
                  className="badge"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#8892b0',
                    fontSize: '0.75rem',
                    fontWeight: 400
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24 }}>
          <p
            className="text-center mb-0"
            style={{ color: '#8892b0', fontSize: '0.85rem' }}
          >
            © 2026 RifaStartHack · Hecho por Daniel Ibañez desde Lima para el mundo 🌎
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
