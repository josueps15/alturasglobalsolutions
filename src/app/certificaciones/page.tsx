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
    desc: 'Código americano de protección contra caídas. Define directrices rigurosas para el diseño, fabricación, prueba y uso de anclajes, arneses de cuerpo completo, líneas de vida certificadas y dispositivos de desaceleración.'
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
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 19, 32, 0.8), rgba(11, 19, 32, 0.95)), url(/hero-certificaciones.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
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

      <section className="certifications-building-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Building/Architecture Background Elements */}
        <div className="building-bg-pattern"></div>
        <div className="building-gradient-overlay"></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="services-intro" style={{ color: '#fff', marginBottom: '4rem' }}>
            <p style={{ fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Todo equipo de la marca <strong>Longdyes</strong> que instalamos cumple con las exigencias más rigurosas a nivel europeo y americano. Cada sistema anti caidas es validado y certificado antes de su puesta en operación.
            </p>
          </div>

          {/* The Lifeline Vertical Timeline */}
          <div className="lifeline-timeline">
            <div className="lifeline-cable"></div>
            
            {CERTS.map((cert, idx) => (
              <div key={idx} className={`lifeline-node-container ${idx % 2 === 0 ? 'left-side' : 'right-side'}`}>
                <motion.div 
                  className="lifeline-anchor-point"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: 'spring', delay: idx * 0.15 }}
                />
                <motion.div
                  className="lifeline-card"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.1 }}
                >
                  <span className="cert-card-badge">{cert.badge}</span>
                  <h3>{cert.title}</h3>
                  <p className="mobile-justify-text">{cert.desc}</p>
                  
                  {/* Visual carabiner/connector to the cable */}
                  <div className="lifeline-connector"></div>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            className="cert-partner-section mobile-center-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', zIndex: 10, background: 'linear-gradient(135deg, rgba(13,105,120,0.95), rgba(8,45,68,0.95))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
              Respaldados por
            </h2>
            <div className="longdyes-logo-box">
              <img src="/logo_longdyes.png" alt="Longdyes" style={{ height: '80px', objectFit: 'contain', margin: '0 auto', display: 'block', maxWidth: '100%' }} />
            </div>
            <p style={{ color: '#e2e8f0', maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.15rem' }}>
              Como representantes autorizados en Ecuador, cada producto que instalamos viene con la garantía directa del fabricante, asegurando trazabilidad completa y soporte técnico permanente.
            </p>
            <a href="https://wa.me/593980001234?text=Hola,%20deseo%20validar%20sistemas%20existentes" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', letterSpacing: '1px', borderRadius: '50px', boxShadow: '0 8px 25px rgba(237,108,35,0.4)' }}>
              VALIDAR SISTEMAS DE LÍNEAS DE VIDA
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
