// src/components/shared/ServiceCard.jsx
// Tarjeta de servicio ofrecido por el equipo

function ServiceCard({ service }) {
  const { icon, title, subtitle, price, usd, description, includes, cta, badge } = service;

  const handleScrollToPago = (e) => {
    e.preventDefault();
    document.getElementById('pago')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="dark-card p-4 h-100 position-relative"
      style={
        badge
          ? { border: '1px solid #f5c518', marginTop: '12px' }
          : { marginTop: '12px' }
      }
    >
      {/* Badge "Más popular" */}
      {badge && (
        <span className="badge-popular">{badge}</span>
      )}

      {/* Icono */}
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{
          width: 56,
          height: 56,
          background: 'rgba(245, 197, 24, 0.1)',
          border: '1px solid rgba(245, 197, 24, 0.25)',
          borderRadius: 14,
          fontSize: '1.5rem',
          color: '#f5c518'
        }}
      >
        <i className={`bi ${icon}`} />
      </div>

      {/* Título y precio */}
      <h5
        className="fw-bold mb-1"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
      >
        {title}
      </h5>
      <p className="small mb-3" style={{ color: '#8892b0' }}>{subtitle}</p>

      <div className="d-flex align-items-baseline gap-2 mb-3">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '2rem',
            fontWeight: 800,
            color: '#f5c518'
          }}
        >
          {price}
        </span>
        <span className="small" style={{ color: '#8892b0' }}>{usd}</span>
      </div>

      <p className="small mb-3" style={{ color: '#b0b8d0', lineHeight: 1.6 }}>
        {description}
      </p>

      {/* Lista de includes */}
      <ul className="list-unstyled mb-4">
        {includes.map((item, idx) => (
          <li key={idx} className="d-flex align-items-start gap-2 mb-2">
            <span style={{ color: '#22c55e', marginTop: 2 }}>✅</span>
            <span className="small" style={{ color: '#b0b8d0' }}>{item}</span>
          </li>
        ))}
      </ul>

      {/* Botón CTA */}
      <button
        onClick={handleScrollToPago}
        className="btn btn-primary-custom w-100"
        style={{
          background: badge ? '#f5c518' : 'transparent',
          border: badge ? 'none' : '1px solid rgba(245, 197, 24, 0.5)',
          color: badge ? '#000' : '#f5c518',
          fontWeight: 700,
          borderRadius: 10,
          padding: '10px 0',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#f5c518';
          e.currentTarget.style.color = '#000';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = badge ? '#f5c518' : 'transparent';
          e.currentTarget.style.color = badge ? '#000' : '#f5c518';
        }}
      >
        {cta} <i className="bi bi-arrow-right ms-1" />
      </button>
    </div>
  );
}

export default ServiceCard;
