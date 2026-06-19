import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Políticas de Privacidad | Alturas Global Solutions',
  description: 'Políticas de privacidad y tratamiento de datos de Alturas Global Solutions.',
};

export default function PrivacidadPage() {
  const sections = [
    {
      num: '01',
      title: 'Recopilación de Información',
      content: 'Recopilamos información personal (como nombre, correo electrónico, número de teléfono y empresa) que usted proporciona voluntariamente al contactarnos mediante WhatsApp, correo o formularios en nuestro sitio. No recopilamos información de forma automatizada sin su consentimiento.'
    },
    {
      num: '02',
      title: 'Uso de la Información',
      content: 'La información recopilada se utiliza exclusivamente para los siguientes propósitos:',
      list: [
        'Proporcionar cotizaciones y servicios técnicos personalizados.',
        'Comunicarnos sobre el estado de sus proyectos e instalaciones.',
        'Programar inspecciones, mantenimientos y certificaciones.',
        'Cumplir con requerimientos legales y contables vigentes.'
      ]
    },
    {
      num: '03',
      title: 'Protección de Datos',
      content: 'Implementamos medidas de seguridad administrativas y técnicas avanzadas para proteger sus datos corporativos contra acceso no autorizado, alteración, divulgación o destrucción. Nuestros sistemas siguen las mejores prácticas de la industria en cuanto a seguridad de la información.'
    },
    {
      num: '04',
      title: 'Compartir Información',
      content: 'No vendemos ni alquilamos su información personal a terceros. Podemos compartir información con socios estratégicos (ej. logística, fabricantes) únicamente para cumplir con la ejecución del servicio contratado, bajo acuerdos de confidencialidad.'
    },
    {
      num: '05',
      title: 'Derechos del Usuario',
      content: 'Usted tiene derecho a acceder, rectificar o eliminar su información personal de nuestra base de datos en cualquier momento. Para ejercer estos derechos, comuníquese con nosotros a través de nuestros canales oficiales de contacto.'
    }
  ];

  return (
    <div className="legal-page-wrapper" style={{ backgroundImage: 'url(/bg-privacidad.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="legal-page-container">
        <div className="legal-header">
          <div className="legal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--primary-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
          </div>
          <h1>Políticas de Privacidad</h1>
          <p>Protección y Tratamiento de sus Datos Personales</p>
        </div>
        <div className="legal-content">
          {sections.map((s) => (
            <section key={s.num}>
              <h2>
                <span className="section-number">{s.num}</span>
                {s.title}
              </h2>
              <p>{s.content}</p>
              {s.list && (
                <ul>
                  {s.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="legal-cta">
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
              Su privacidad es nuestra prioridad.
            </p>
            <Link href="/" className="btn btn-primary">Aceptar y Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
