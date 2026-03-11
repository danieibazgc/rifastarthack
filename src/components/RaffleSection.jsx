// src/components/RaffleSection.jsx
// Sección de rifa solidaria con calculadora de boletos

import { useState, useEffect } from 'react';
import styles from '@/styles/components/Raffle.module.css';
import SectionTitle from '@/components/shared/SectionTitle';

import jetbrainsImg from '@/assets/raffle/Jetbrains.JPG';
import thisIsFineImg from '@/assets/raffle/ThisIsFine.jpg';
import stickersProgramacionImg from '@/assets/raffle/StickersProgramacion.jpeg';
import stickersHackingImg from '@/assets/raffle/Stickershacking.jpeg';
import stickersGatosImg from '@/assets/raffle/StickersGatos.jpeg';
import stickersBubuDuduImg from '@/assets/raffle/StickersBubuDudu.jpeg';
import stickersCapibaraImg from '@/assets/raffle/Stickerscapibara.jpeg';
import ventiladorImg from '@/assets/raffle/VentiladorCuello.jpg';
import kitMateImg from '@/assets/raffle/KitMate.jpg';

const TICKET_PRICE = 10; // Precio en soles

const prizes = [
  { img: jetbrainsImg,           label: 'Cupón 100% OFF — Cualquier IDE JetBrains' },
  { img: thisIsFineImg,          label: 'Peluche "This is Fine"' },
  { img: stickersProgramacionImg, label: 'Stickers de Programación' },
  { img: stickersHackingImg,     label: 'Stickers de Hacking' },
  { img: stickersGatosImg,       label: 'Stickers de memes de gatos' },
  { img: stickersBubuDuduImg,    label: 'Stickers de Bubu y Dudu' },
  { img: stickersCapibaraImg,    label: 'Stickers Capibara' },
  { img: ventiladorImg,          label: 'Ventilador de Cuello' },
  { img: kitMateImg,             label: 'Kit Matero' },
];

function PrizesCarousel({ prizes: items, interval = 3000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  return (
    <div className={styles.carouselContainer} role="region" aria-label="Premios del sorteo">
      {items.map((prize, idx) => (
        <img
          key={idx}
          src={prize.img}
          alt={prize.label}
          className={`${styles.carouselSlide} ${idx === active ? styles.slideActive : ''}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className={styles.carouselLabel}>
        🎁 {items[active].label}
      </div>
      <div className={styles.carouselIndicators}>
        {items.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.carouselIndicator} ${idx === active ? styles.indicatorActive : ''}`}
            onClick={() => setActive(idx)}
            role="button"
            aria-label={`Ver premio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: '01',
    icon: '🎟️',
    title: 'Elige tus boletos',
    text: 'Decide cuántos boletos quieres. Cada uno cuesta S/ 10.'
  },
  {
    number: '02',
    icon: '💳',
    title: 'Realiza tu pago',
    text: 'Usa cualquier método de pago disponible: BanBif, Plin o PayPal.'
  },
  {
    number: '03',
    icon: '📩',
    title: 'Envía tu comprobante',
    text: 'Mándanos tu captura por WhatsApp o correo para registrar tu número.'
  }
];

function RaffleSection() {
  const [quantity, setQuantity] = useState(1);

  const handleScrollToPago = (e) => {
    e.preventDefault();
    document.getElementById('pago')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuantityChange = (e) => {
    const val = Math.max(1, Math.min(100, parseInt(e.target.value) || 1));
    setQuantity(val);
  };

  return (
    <section id="rifa" className={styles.section}>
      <div className="container position-relative">
        <SectionTitle
          title="🎟️ Rifa Solidaria"
          subtitle="¡Participa y ayúdanos a llegar a Suiza!"
          light
        />

        <div className="row g-5 justify-content-center">
          {/* Info del boleto */}
          <div className="col-lg-5">
            <div className="glass-card p-4 mb-4 text-center">
              <p style={{ color: '#8892b0', marginBottom: 4, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                Precio por boleto
              </p>
              <div className={styles.price}>S/ {TICKET_PRICE}</div>

              {/* Premio */}
              <div className="mt-4 mb-2">
                <p className="fw-semibold mb-2" style={{ color: '#e6e6e6' }}>Premio</p>
                <span
                  className="badge"
                  style={{
                    background: 'rgba(124, 58, 237, 0.2)',
                    border: '1px solid rgba(124, 58, 237, 0.4)',
                    color: '#a78bfa',
                    fontSize: '0.85rem',
                    padding: '8px 16px',
                    borderRadius: 50
                  }}
                >
                  🎁 9 premios a sortear
                </span>
              </div>
            </div>

            {/* Pasos */}
            <div className="row g-3">
              {steps.map(step => (
                <div key={step.number} className="col-12">
                  <div className="glass-card p-3 d-flex align-items-start gap-3">
                    <div className={styles.stepIcon} style={{ width: 44, height: 44, fontSize: '1.2rem', margin: 0, flexShrink: 0 }}>
                      {step.icon}
                    </div>
                    <div>
                      <p className={styles.stepNumber}>{step.number}</p>
                      <p className="fw-semibold mb-1 small" style={{ color: '#e6e6e6' }}>
                        {step.title}
                      </p>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculadora */}
          <div className="col-lg-5">
            <PrizesCarousel prizes={prizes} />
            <div className={styles.calculator}>
              <h5
                className="fw-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#e6e6e6' }}
              >
                🧮 Calculadora de boletos
              </h5>

              <label
                htmlFor="ticket-quantity"
                className="form-label small fw-semibold"
                style={{ color: '#b0b8d0' }}
              >
                ¿Cuántos boletos quieres?
              </label>

              <div className="d-flex align-items-center gap-3 mb-4">
                <button
                  className="btn"
                  style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e6e6e6',
                    borderRadius: 10,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Reducir cantidad"
                >
                  −
                </button>

                <input
                  id="ticket-quantity"
                  type="number"
                  min={1}
                  max={100}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="form-control text-center fw-bold"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e6e6e6',
                    width: 80,
                    borderRadius: 10,
                    fontSize: '1.2rem'
                  }}
                />

                <button
                  className="btn"
                  style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#e6e6e6',
                    borderRadius: 10,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => setQuantity(q => Math.min(100, q + 1))}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <div
                style={{
                  background: 'rgba(245, 197, 24, 0.06)',
                  border: '1px solid rgba(245, 197, 24, 0.2)',
                  borderRadius: 12,
                  padding: '20px 24px',
                  marginBottom: 24
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ color: '#8892b0', fontSize: '0.9rem' }}>
                    {quantity} boleto{quantity > 1 ? 's' : ''} × S/ {TICKET_PRICE}
                  </span>
                  <div className={styles.totalDisplay}>
                    S/ {(quantity * TICKET_PRICE).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Botón de participar */}
              <button
                onClick={handleScrollToPago}
                className="btn btn-warning w-100 fw-bold"
                style={{ borderRadius: 12, padding: '14px 0', fontSize: '1rem' }}
              >
                Quiero participar → ir a métodos de pago{' '}
                <i className="bi bi-arrow-right ms-1" />
              </button>

              <p className={styles.legalNote} style={{ textAlign: 'center' }}>
                ⚖️ El sorteo se realizará en vivo por redes sociales. Fecha por confirmar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RaffleSection;
