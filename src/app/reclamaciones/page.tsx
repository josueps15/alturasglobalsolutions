import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Libro de Reclamaciones | Altura Global Solutions',
  description: 'Libro de reclamaciones virtual de Altura Global Solutions.',
};

export default function ReclamacionesPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        <div className="legal-header">
          <h1>Libro de Reclamaciones Virtual</h1>
          <p>Conforme a las normativas de protección al consumidor</p>
        </div>
        <div className="legal-content">
          <section>
            <h2>Ingrese su reclamo o queja</h2>
            <p>En Altura Global Solutions nos esforzamos por brindarle un servicio de excelencia. Si ha tenido un inconveniente, por favor háganoslo saber.</p>
            <p className="mt-4 text-gray-400">
              <em>El formulario interactivo se integrará con el sistema interno de atención al cliente. Para una asistencia inmediata, utilice nuestro canal oficial de WhatsApp.</em>
            </p>
          </section>
          
          <div className="mt-8 p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)]">
            <p className="text-center">
              Para presentar una queja formal, envíe un correo electrónico a <strong>legal@alturaglobalsolutions.com</strong> o comuníquese a nuestra central de atención.
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <Link href="/contacto" className="btn btn-primary">Ir a Contacto</Link>
            <Link href="/" className="btn btn-white">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
