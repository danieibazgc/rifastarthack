// src/components/RaffleSection.jsx
// Sección de cierre de rifa — agradecimiento y anuncio del sorteo

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

const prizes = [
  { img: jetbrainsImg,            label: 'Cupón 100% OFF — Cualquier IDE JetBrains' },
  { img: thisIsFineImg,           label: 'Peluche "This is Fine"' },
  { img: stickersProgramacionImg, label: 'Stickers de Programación' },
  { img: stickersHackingImg,      label: 'Stickers de Hacking' },
  { img: stickersGatosImg,        label: 'Stickers de memes de gatos' },
  { img: stickersBubuDuduImg,     label: 'Stickers de Bubu y Dudu' },
  { img: stickersCapibaraImg,     label: 'Stickers Capibara' },
  { img: ventiladorImg,           label: 'Ventilador de Cuello' },
  { img: kitMateImg,              label: 'Kit Matero' },
];

function PrizesCarousel({ items, interval = 3000 }) {
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
      <div className={styles.carouselLabel}>🎁 {items[active].label}</div>
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

function RaffleSection() {
  return (
    <section id="rifa" className={styles.section}>
      <div className="container position-relative">
        <SectionTitle
          title="🎟️ Rifa Solidaria"
          subtitle="¡Gracias a todos los que nos apoyaron!"
          light
        />

        <div className="row g-5 justify-content-center align-items-center">

          {/* Carrusel */}
          <div className="col-lg-5">
            <PrizesCarousel items={prizes} />
          </div>

          {/* Info */}
          <div className="col-lg-5 d-flex flex-column gap-4">

            {/* Agradecimiento */}
            <div
              className="glass-card p-4 text-center"
              style={{ border: '1px solid rgba(245, 197, 24, 0.25)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🙏</div>
              <p style={{ color: '#e6e6e6', fontSize: '1.05rem', lineHeight: 1.8, margin: 0 }}>
                Gracias a cada persona que compró un boleto y confió en nosotros.
                Su apoyo nos impulsa a dar lo mejor en Suiza.
              </p>
            </div>

            {/* Fecha del sorteo */}
            <div
              className="glass-card p-4"
              style={{
                border: '1px solid rgba(245, 197, 24, 0.35)',
                background: 'rgba(245, 197, 24, 0.04)',
              }}
            >
              <p
                className="fw-bold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f5c518', fontSize: '1rem' }}
              >
                📅 Fecha del sorteo
              </p>
              <p style={{ color: '#e6e6e6', fontSize: '1.15rem', fontWeight: 600, marginBottom: 6 }}>
                Domingo 15 de marzo — 10:00 PM
              </p>
              <p style={{ color: '#8892b0', fontSize: '0.9rem', margin: 0 }}>
                El sorteo se realizará en vivo. Los ganadores serán anunciados aquí
                en la web junto con el video del evento.
              </p>
            </div>

            {/* Badge ganadores */}
            <div className="text-center">
              <span
                className="badge"
                style={{
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.35)',
                  color: '#a78bfa',
                  fontSize: '0.88rem',
                  padding: '10px 20px',
                  borderRadius: 50,
                }}
              >
                🏆 Los ganadores se publicarán en esta página con el video del sorteo
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default RaffleSection;
