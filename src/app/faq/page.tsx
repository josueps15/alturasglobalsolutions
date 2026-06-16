'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    question: '¿Qué normas internacionales cumplen sus líneas de vida certificadas?',
    answer: 'Nuestros sistemas de protección contra caídas, en alianza con Longdyes, están diseñados y certificados bajo las normativas internacionales ANSI Z359, OSHA 1910.140, y EN 795. Cada instalación viene acompañada de documentación técnica y certificados de conformidad.'
  },
  {
    question: '¿En qué ciudades ofrecen servicio?',
    answer: 'Operamos a nivel nacional en todo el territorio de Ecuador, brindando servicio especializado tanto a empresas en la costa, sierra y amazonía. Contamos con equipos técnicos distribuidos estratégicamente para responder con agilidad.'
  },
  {
    question: '¿El personal cuenta con certificaciones?',
    answer: 'Absolutamente. Todos nuestros técnicos e ingenieros cuentan con certificaciones IRATA / SPRAT para acceso por cuerdas, así como certificaciones de rescate industrial y primeros auxilios avanzados. La formación continua es parte de nuestra cultura.'
  },
  {
    question: '¿Cuánto tiempo demora la instalación de una línea de vida certificada?',
    answer: 'El tiempo de instalación varía dependiendo de la longitud del sistema y la complejidad de la estructura portante. Un proyecto típico puede llevar desde un par de días hasta varias semanas. Contáctenos para una evaluación técnica personalizada sin compromiso.'
  },
  {
    question: '¿Ofrecen servicios de mantenimiento e inspección periódica?',
    answer: 'Sí, ofrecemos planes de mantenimiento preventivo y correctivo para todos nuestros sistemas instalados. Las inspecciones periódicas son fundamentales para garantizar la seguridad continua y el cumplimiento normativo de cada instalación.'
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer: 'Puede solicitar una cotización a través de nuestro formulario de contacto, vía WhatsApp, o agendando una reunión por Zoom directamente desde nuestra página web. Nuestro equipo técnico le responderá en un plazo máximo de 24 horas hábiles.'
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="legal-page-wrapper" style={{ backgroundImage: 'url(/bg-faq.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="legal-page-container">
        <div className="legal-header">
          <div className="legal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--primary-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h1>Preguntas Frecuentes</h1>
          <p>Resolvemos sus principales dudas técnicas y comerciales</p>
        </div>
        <div className="legal-content">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{ cursor: 'pointer' }}
            >
              <h3>
                <span className="q-badge">{idx + 1}</span>
                <span style={{ flex: 1 }}>{faq.question}</span>
                <svg
                  viewBox="0 0 24 24" width="20" height="20" fill="none"
                  stroke="var(--primary-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h3>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ marginTop: '0.5rem' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="legal-cta">
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>
              ¿No encontró la respuesta que buscaba?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/593980001234?text=Hola,%20tengo%20una%20consulta"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Consultar por WhatsApp
              </a>
              <Link href="/contacto" className="btn btn-outline">Ir a Contacto</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
