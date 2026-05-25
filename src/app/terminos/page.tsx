import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Altura Global Solutions',
  description: 'Términos y condiciones de servicio de Altura Global Solutions.',
};

export default function TerminosPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        <div className="legal-header">
          <h1>Términos y Condiciones</h1>
          <p>Última actualización: 24 de Mayo, 2026</p>
        </div>
        <div className="legal-content">
          <section>
            <h2>1. Introducción</h2>
            <p>Bienvenido a Altura Global Solutions. Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a los presentes términos y condiciones.</p>
          </section>
          <section>
            <h2>2. Prestación de Servicios</h2>
            <p>Altura Global Solutions se compromete a ejecutar los proyectos de instalación de líneas de vida, mantenimiento industrial e izaje bajo los más estrictos estándares normativos vigentes (OSHA, ANSI).</p>
          </section>
          <section>
            <h2>3. Obligaciones del Cliente</h2>
            <p>El cliente deberá garantizar el acceso a las instalaciones y proporcionar información veraz sobre los riesgos inherentes al área de trabajo antes del inicio de nuestras operaciones.</p>
          </section>
          <section>
            <h2>4. Propiedad Intelectual</h2>
            <p>Toda la información técnica, diseños, planos de ingeniería y manuales provistos son propiedad exclusiva de Altura Global Solutions y marcas asociadas como Longdyes.</p>
          </section>
          <section>
            <h2>5. Garantías y Responsabilidad</h2>
            <p>Nuestros sistemas cuentan con certificaciones internacionales. La empresa no se responsabiliza por modificaciones o manipulación de los sistemas realizados por personal ajeno a Altura Global Solutions.</p>
          </section>
          <div className="mt-8">
            <Link href="/" className="btn btn-primary">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
