// src/components/PaymentSection.jsx
// Métodos de pago con opción de copiar datos al portapapeles

import { useState } from 'react';
import styles from '@/styles/components/Payment.module.css';
import SectionTitle from '@/components/shared/SectionTitle';
import { paymentMethods, contactAfterPayment } from '@/data/paymentData';

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para navegadores sin soporte
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 197, 24, 0.08)',
        border: copied ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid rgba(245, 197, 24, 0.25)',
        color: copied ? '#86efac' : '#f5c518',
        borderRadius: 6,
        padding: '3px 8px',
        fontSize: '0.72rem',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        outline: 'none'
      }}
      title={copied ? '¡Copiado!' : 'Copiar al portapapeles'}
    >
      <i className={`bi ${copied ? 'bi-check2' : 'bi-clipboard'}`} />
      {copied ? '¡Copiado!' : 'Copiar'}
    </button>
  );
}

function PaymentCard({ method }) {
  const { icon, name, type, details } = method;

  return (
    <div className={styles.paymentCard}>
      <div className={styles.paymentIcon}>
        <i className={`bi ${icon}`} />
      </div>
      <p className={styles.paymentName}>{name}</p>
      <p className={styles.paymentType}>{type}</p>

      {Object.entries(details).map(([key, value]) => {
        const hasCopy = key === 'N° de cuenta' || key === 'CCI' || key === 'Número' || key === 'Link de pago';
        const displayValue = key === 'Link de pago' && value.startsWith('http')
          ? value.replace(/^https?:\/\/(www\.)?/, '')
          : value;
        return (
          <div key={key} className={styles.detailRow}>
            <span className={styles.detailKey}>{key}</span>
            <div className={styles.detailValueRow}>
              <span className={styles.detailValue} title={value}>{displayValue}</span>
              {hasCopy && <CopyButton value={value} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PaymentSection() {
  return (
    <section id="pago" className={styles.section}>
      <div className="container">
        <SectionTitle
          title="💳 Métodos de Pago"
          subtitle="Elige el método más cómodo para ti. Aceptamos pagos nacionales e internacionales."
        />

        {/* Alerta */}
        <div
          className="alert alert-warning d-flex align-items-start gap-3 mb-5"
          role="alert"
          style={{
            background: 'rgba(245, 197, 24, 0.1)',
            border: '1px solid rgba(245, 197, 24, 0.3)',
            color: '#fde68a',
            borderRadius: 12
          }}
        >
          <i className="bi bi-exclamation-triangle-fill flex-shrink-0 mt-1" />
          <div>
            <strong>Importante:</strong> Recuerda guardar tu comprobante de pago.
            Te confirmaremos tu participación en máximo 24 horas.
          </div>
        </div>

        {/* Cards de métodos */}
        <div className="row g-4 mb-5">
          {paymentMethods.map(method => (
            <div key={method.id} className="col-md-6 col-xl-3">
              <PaymentCard method={method} />
            </div>
          ))}
        </div>

        {/* Cómo confirmar tu pago */}
        <div className="row g-4">
          <div className="col-lg-7">
            <div className={styles.stepsBox}>
              <h5
                className="fw-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
              >
                ✅ ¿Cómo confirmar tu pago?
              </h5>

              {[
                {
                  n: 1,
                  text: 'Realiza tu pago por el método de tu preferencia.'
                },
                {
                  n: 2,
                  text: 'Toma captura o guarda el comprobante de transferencia.'
                },
                {
                  n: 3,
                  text: `Envíanoslo por WhatsApp o correo indicando: nombre completo, monto y servicio/cantidad de boletos.`
                },
                {
                  n: 4,
                  text: 'Recibirás confirmación en máximo 24 horas con tu número de rifa o detalle del servicio.'
                }
              ].map(step => (
                <div key={step.n} className={`${styles.stepItem} mb-3`}>
                  <div className={styles.stepBadge}>{step.n}</div>
                  <p className="mb-0" style={{ color: '#b0b8d0', paddingTop: 4, lineHeight: 1.6 }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="col-lg-5">
            <div
              className="h-100 d-flex flex-column gap-3"
              style={{ paddingTop: '0' }}
            >
              <h5
                className="fw-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
              >
                📬 Contacto
              </h5>

              <p style={{ color: '#b0b8d0', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {contactAfterPayment.message}
              </p>

              {/* WhatsApp */}
              <div className={styles.contactCard}>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem', color: '#25d366' }} />
                  <div>
                    <p className="mb-0 small fw-semibold" style={{ color: '#e6e6e6' }}>
                      WhatsApp
                    </p>
                    {/* TODO: Reemplazar con número real de WhatsApp */}
                    <p className="mb-0 small" style={{ color: '#8892b0' }}>
                      {contactAfterPayment.whatsapp}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactCard}>
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-envelope" style={{ fontSize: '1.5rem', color: '#f5c518' }} />
                  <div>
                    <p className="mb-0 small fw-semibold" style={{ color: '#e6e6e6' }}>
                      Correo electrónico
                    </p>
                    {/* TODO: Reemplazar con email real del equipo */}
                    <p className="mb-0 small" style={{ color: '#8892b0' }}>
                      {contactAfterPayment.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSection;
