// src/components/ServicesSection.jsx
// Grid de servicios tech ofrecidos por el equipo

import SectionTitle from '@/components/shared/SectionTitle';
import ServiceCard from '@/components/shared/ServiceCard';
import { services } from '@/data/servicesData';

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="section-alt section-pad"
    >
      <div className="container">
        <SectionTitle
          title="💼 Nuestros Servicios"
          subtitle="Apóyanos contratando nuestros servicios tech. Calidad garantizada por estudiantes seleccionados para START Hack."
        />

        <div className="row g-4 justify-content-center">
          {services.map(service => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Nota de garantía */}
        <div className="text-center mt-5">
          <div
            className="d-inline-flex align-items-center gap-2 px-4 py-2"
            style={{
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: 50,
              color: '#86efac',
              fontSize: '0.85rem'
            }}
          >
            <i className="bi bi-shield-check" />
            <span>Satisfacción garantizada o te devolvemos tu dinero</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
