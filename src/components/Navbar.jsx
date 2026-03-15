// src/components/Navbar.jsx
// Barra de navegación fija con scroll suave y menú hamburguesa

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#equipo', label: 'Equipo' },
  { href: '#evento', label: 'Evento' },
  { href: '#rifa', label: 'Rifa' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#pago', label: 'Pago' }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: scrolled
          ? 'rgba(13, 13, 13, 0.95)'
          : 'rgba(13, 13, 13, 0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background 0.3s ease',
        zIndex: 1000
      }}
    >
      <div className="container">
        {/* Logo */}
        <a
          href="#"
          className="navbar-brand fw-bold text-decoration-none"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.25rem',
            color: '#e6e6e6'
          }}
          onClick={e => handleNavClick(e, '#')}
        >
          🚀 <span style={{ color: '#f5c518' }}>Rifa</span>StartHack
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#e6e6e6' }}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.4rem' }} />
        </button>

        {/* Links */}
        <div
          className={`navbar-collapse collapse${menuOpen ? ' show' : ''}`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map(link => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link px-3"
                  style={{
                    color: '#b0b8d0',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}
                  onClick={e => handleNavClick(e, link.href)}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f5c518')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#b0b8d0')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
