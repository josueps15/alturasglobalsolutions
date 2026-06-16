import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Altura Global Solutions',
  description: 'Términos y condiciones de servicio de Altura Global Solutions.',
};

export default function TerminosPage() {
  const sections = [
    {
      num: '01',
      title: 'Introducción',
      content: 'Bienvenido a Altura Global Solutions. Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a los presentes términos y condiciones. Estos términos regulan la relación contractual entre Altura Global Solutions y sus clientes en todo el territorio ecuatoriano.'
    },
    {
      num: '02',
      title: 'Prestación de Servicios',
      content: 'Altura Global Solutions se compromete a ejecutar los proyectos de instalación de líneas de vida certificadas, mantenimiento industrial e izaje bajo los más estrictos estándares normativos vigentes (OSHA, ANSI). Todos los trabajos incluyen documentación técnica, certificados de conformidad y garantía escrita.'
    },
    {
      num: '03',
      title: 'Obligaciones del Cliente',
      content: 'El cliente deberá garantizar el acceso a las instalaciones y proporcionar información veraz sobre los riesgos inherentes al área de trabajo antes del inicio de nuestras operaciones. Es responsabilidad del cliente asegurar que el área de trabajo esté libre de obstáculos que puedan interferir con la ejecución del servicio.'
    },
    {
      num: '04',
      title: 'Propiedad Intelectual',
      content: 'Toda la información técnica, diseños, planos de ingeniería y manuales provistos son propiedad exclusiva de Altura Global Solutions y marcas asociadas como Longdyes. Queda prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.'
    },
    {
      num: '05',
      title: 'Garantías y Responsabilidad',
      content: 'Nuestros sistemas cuentan con certificaciones internacionales. La empresa no se responsabiliza por modificaciones o manipulación de los sistemas realizados por personal ajeno a Altura Global Solutions. Las garantías están sujetas al correcto uso y mantenimiento periódico según las recomendaciones del fabricante.'
    },
    {
      num: '06',
      title: 'Vigencia y Modificaciones',
      content: 'Estos términos están vigentes desde su publicación y pueden ser actualizados sin previo aviso. Es responsabilidad del usuario revisar periódicamente esta sección. El uso continuado de nuestros servicios después de cualquier modificación constituye la aceptación de los nuevos términos.'
    }
  ];

  return (
    <div className="legal-page-wrapper" style={{ backgroundImage: 'url(/bg-terminos.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="legal-page-container">
        <div className="legal-header">
          <div className="legal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--primary-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h1>Términos y Condiciones</h1>
          <p>Última actualización: 24 de Mayo, 2026</p>
        </div>
        <div className="legal-content">
          {sections.map((s) => (
            <section key={s.num}>
              <h2>
                <span className="section-number">{s.num}</span>
                {s.title}
              </h2>
              <p>{s.content}</p>
            </section>
          ))}

          <div className="legal-cta">
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem', fontSize: '0.9rem' }}>
              Si tiene dudas sobre estos términos, no dude en contactarnos.
            </p>
            <Link href="/" className="btn btn-primary">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
