// src/components/WhatsAppButton.jsx
// Burbuja flotante de WhatsApp en la esquina inferior izquierda

const WHATSAPP_NUMBER = '51932636771'; // Número sin + ni espacios
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría obtener más información sobre RifaStartHack 🚀');

function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9999,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#25d366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
        textDecoration: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12)';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.65)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)';
      }}
    >
      {/* Pulso animado */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(37, 211, 102, 0.4)',
          animation: 'waPulse 2s ease-out infinite',
        }}
      />

      <i
        className="bi bi-whatsapp"
        style={{ fontSize: '1.75rem', color: '#fff', position: 'relative' }}
      />

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>
    </a>
  );
}

export default WhatsAppButton;
