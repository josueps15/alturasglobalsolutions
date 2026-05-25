import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Preguntas Frecuentes | Altura Global Solutions',
  description: 'Preguntas frecuentes sobre nuestros servicios en altura.',
};

export default function FAQPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        <div className="legal-header">
          <h1>Preguntas Frecuentes (FAQ)</h1>
          <p>Resolvemos sus principales dudas técnicas y comerciales.</p>
        </div>
        <div className="legal-content">
          <div className="faq-item">
            <h3>¿Qué normas internacionales cumplen sus líneas de vida?</h3>
            <p>Nuestros sistemas de protección contra caídas, en alianza con Longdyes, están diseñados y certificados bajo las normativas internacionales ANSI Z359, OSHA 1910.140, y EN 795.</p>
          </div>
          <div className="faq-item">
            <h3>¿En qué ciudades ofrecen servicio?</h3>
            <p>Operamos a nivel nacional en todo el territorio de Ecuador, brindando servicio especializado tanto a empresas en la costa, sierra y amazonía.</p>
          </div>
          <div className="faq-item">
            <h3>¿El personal cuenta con certificaciones?</h3>
            <p>Absolutamente. Todos nuestros técnicos e ingenieros cuentan con certificaciones IRATA / SPRAT para acceso por cuerdas, así como certificaciones de rescate industrial y primeros auxilios avanzados.</p>
          </div>
          <div className="faq-item">
            <h3>¿Cuánto tiempo demora la instalación de una línea de vida?</h3>
            <p>El tiempo de instalación varía dependiendo de la longitud del sistema y la complejidad de la estructura portante. Un proyecto típico puede llevar desde un par de días hasta semanas. Contáctenos para una evaluación técnica.</p>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-400">¿No encontró la respuesta que buscaba?</p>
            <Link href="https://wa.me/593987654321" className="btn btn-primary">Consultar por WhatsApp</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
