// src/components/ProgressBar.jsx
// Barra de progreso animada de recaudación de fondos

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { fundraisingProgress } from '@/data/paymentData';

function ProgressBar() {
  const { raised, goal, supporters } = fundraisingProgress;
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  const remaining = goal - raised;

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animatedRaised = useCountUp(raised, 1800, inView);
  const animatedSupporters = useCountUp(supporters, 1400, inView);

  // Color de la barra según porcentaje
  const getBarColor = () => {
    if (percentage >= 80) return 'linear-gradient(90deg, #f5c518, #22c55e)';
    if (percentage >= 50) return 'linear-gradient(90deg, #f5c518, #84cc16)';
    return 'linear-gradient(90deg, #f59e0b, #f5c518)';
  };

  return (
    <section
      ref={ref}
      style={{
        background: '#111118',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 0'
      }}
    >
      <div className="container">
        {/* Encabezado */}
        <div className="row align-items-center mb-3">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#e6e6e6'
              }}
            >
              💰 Meta de recaudación
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <span style={{ fontSize: '0.9rem', color: '#8892b0' }}>
              <strong style={{ color: '#f5c518' }}>
                S/ {animatedRaised.toLocaleString()}
              </strong>{' '}
              recaudados de{' '}
              <strong style={{ color: '#e6e6e6' }}>
                S/ {goal.toLocaleString()}
              </strong>
            </span>
          </div>
        </div>

        {/* Barra */}
        <div
          style={{
            height: 14,
            background: '#2a2a4a',
            borderRadius: 50,
            overflow: 'hidden',
            marginBottom: 16
          }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso de recaudación"
        >
          <div
            style={{
              height: '100%',
              width: `${inView ? percentage : 0}%`,
              background: getBarColor(),
              borderRadius: 50,
              transition: 'width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 0 12px rgba(245, 197, 24, 0.4)'
            }}
          />
        </div>

        {/* Stats debajo de la barra */}
        <div className="row text-center g-2">
          <div className="col-4">
            <p className="mb-0 small" style={{ color: '#8892b0' }}>
              <strong style={{ color: '#f5c518' }}>{percentage}%</strong> completado
            </p>
          </div>
          <div className="col-4">
            <p className="mb-0 small" style={{ color: '#8892b0' }}>
              <strong style={{ color: '#e6e6e6' }}>{animatedSupporters}</strong>{' '}
              persona{supporters !== 1 ? 's' : ''} apoyaron
            </p>
          </div>
          <div className="col-4">
            <p className="mb-0 small" style={{ color: '#8892b0' }}>
              Faltan{' '}
              <strong style={{ color: '#f5c518' }}>
                S/ {remaining.toLocaleString()}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
