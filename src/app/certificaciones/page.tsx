'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CERTS = [
  {
    badge: 'EE.UU.',
    title: 'OSHA 1910.140',
    desc: 'Administración de Seguridad y Salud Ocupacional. Establece los requisitos para sistemas personales de protección contra caídas en la industria general, incluyendo arneses, conectores y puntos de anclaje.'
  },
  {
    badge: 'Internacional',
    title: 'ANSI Z359',
    desc: 'Código americano de protección contra caídas. Define directrices rigurosas para el diseño, fabricación, prueba y uso de anclajes, arneses de cuerpo completo, líneas de vida y dispositivos de desaceleración.'
  },
  {
    badge: 'Europa',
    title: 'EN 795',
    desc: 'Normativa Europea sobre equipos de protección individual contra caídas. Especifica requisitos, métodos de ensayo y marcado para dispositivos de anclaje diseñados para uso con EPIs contra caídas de altura.'
  },
  {
    badge: 'Internacional',
    title: 'ISO 9001:2015',
    desc: 'Sistema de gestión de calidad que garantiza procesos consistentes en la fabricación de equipos Longdyes. Asegura mejora continua, enfoque al cliente y liderazgo en cada etapa productiva.'
  },
  {
    badge: 'EE.UU.',
    title: 'ANSI/ASSE A10.32',
    desc: 'Estándar de seguridad para operaciones de caída libre. Define los requisitos mínimos para la protección personal contra caídas en actividades de construcción e industria pesada.'
  },
  {
    badge: 'Europa',
    title: 'EN 353-1 / EN 353-2',
    desc: 'Normativa para dispositivos anticaídas deslizantes sobre línea de anclaje rígida y flexible. Establece los requisitos de rendimiento y métodos de ensayo para sistemas guiados.'
  }
];

export default function Certificaciones() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Calidad Garantizada
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Normativa y Certificaciones
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Nuestros procesos de instalación y validación se rigen bajo los más estrictos estándares internacionales de seguridad industrial.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Certificaciones
          </div>
        </div>
      </section>

      <section className="bg-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="services-intro">
            <p>
              Todo equipo de la marca <strong>Longdyes</strong> que instalamos cumple con las exigencias más rigurosas a nivel europeo y americano. Cada sistema es validado y certificado antes de su puesta en operación.
            </p>
          </div>

          <div className="cert-grid">
            {CERTS.map((cert, idx) => (
              <motion.div
                key={idx}
                className="cert-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="cert-card-badge">{cert.badge}</span>
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cert-partner-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Respaldados por <span className="text-orange">Longdyes</span></h2>
            <p>
              Como únicos representantes autorizados en Ecuador, cada producto que instalamos viene con la garantía directa del fabricante, asegurando trazabilidad completa y soporte técnico permanente.
            </p>
            <Link href="/contacto" className="btn btn-primary">VALIDAR SISTEMAS EXISTENTES</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
