// src/components/shared/SectionTitle.jsx
// Componente reutilizable para títulos de sección

function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-5">
      <h2
        className="fw-bold mb-3"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: light ? '#ffffff' : '#e6e6e6'
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mx-auto"
          style={{
            color: light ? 'rgba(255,255,255,0.65)' : '#8892b0',
            maxWidth: '560px',
            fontSize: '1.05rem',
            lineHeight: 1.7
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
