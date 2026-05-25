import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Políticas de Privacidad | Altura Global Solutions',
  description: 'Políticas de privacidad y tratamiento de datos de Altura Global Solutions.',
};

export default function PrivacidadPage() {
  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        <div className="legal-header">
          <h1>Políticas de Privacidad</h1>
          <p>Protección y Tratamiento de sus Datos Personales</p>
        </div>
        <div className="legal-content">
          <section>
            <h2>1. Recopilación de Información</h2>
            <p>Recopilamos información personal (como nombre, correo electrónico, número de teléfono y empresa) que usted proporciona voluntariamente al contactarnos mediante WhatsApp, correo o formularios en nuestro sitio.</p>
          </section>
          <section>
            <h2>2. Uso de la Información</h2>
            <p>La información recopilada se utiliza exclusivamente para:
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
                <li>Proporcionar cotizaciones y servicios técnicos.</li>
                <li>Comunicarnos sobre el estado de sus proyectos.</li>
                <li>Cumplir con requerimientos legales y contables.</li>
              </ul>
            </p>
          </section>
          <section>
            <h2>3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad administrativas y técnicas avanzadas para proteger sus datos corporativos contra acceso no autorizado, alteración, divulgación o destrucción.</p>
          </section>
          <section>
            <h2>4. Compartir Información</h2>
            <p>No vendemos ni alquilamos su información personal a terceros. Podemos compartir información con socios estratégicos (ej. logística) únicamente para cumplir con la ejecución del servicio contratado.</p>
          </section>
          <section>
            <h2>5. Derechos del Usuario</h2>
            <p>Usted tiene derecho a acceder, rectificar o eliminar su información personal de nuestra base de datos. Para ejercer estos derechos, comuníquese con nosotros.</p>
          </section>
          <div className="mt-8">
            <Link href="/" className="btn btn-white">Aceptar y Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
