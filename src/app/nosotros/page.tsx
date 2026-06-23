'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleNetwork from '@/components/ParticleNetwork';
import EcuadorMapAnimation from '@/components/EcuadorMapAnimation';
import BuildingObjectives from '@/components/BuildingObjectives';
import MissionVisionAnchor from '@/components/MissionVisionAnchor';

const VALORES = [
  { icon: '🛡️', title: 'Seguridad', desc: 'La protección de la vida y la integridad de las personas es nuestra máxima prioridad.' },
  { icon: '🤝', title: 'Compromiso', desc: 'Trabajamos con responsabilidad y dedicación para cumplir los objetivos de nuestros clientes.' },
  { icon: '⭐', title: 'Calidad', desc: 'Garantizamos altos estándares técnicos y operativos en todos nuestros servicios.' },
  { icon: '💡', title: 'Innovación', desc: 'Incorporamos nuevas tecnologías y soluciones inteligentes para mejorar continuamente.' },
  { icon: '🎓', title: 'Profesionalismo', desc: 'Contamos con personal técnico altamente capacitado y certificado.' },
  { icon: '🏆', title: 'Excelencia', desc: 'Buscamos superar las expectativas mediante el rigor técnico y la mejora continua en cada obra.' }
];

const OBJETIVOS = [
  "Garantizar la seguridad y protección de las personas que realizan trabajos en altura.",
  "Ofrecer soluciones integrales y personalizadas con altos estándares de calidad.",
  "Diseñar e implementar sistemas anticaídas certificados y confiables.",
  "Fortalecer la cultura de prevención y seguridad industrial.",
  "Mantener procesos de mejora continua e innovación tecnológica.",
  "Expandir nuestros servicios a nivel nacional e internacional.",
  "Consolidar relaciones de confianza y largo plazo con nuestros clientes."
];

export default function Nosotros() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 19, 32, 0.8), rgba(11, 19, 32, 0.95)), url(/coto.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            Presentación Corporativa
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            Alturas Global Solutions
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontStyle: 'italic', fontSize: '1.4rem' }}>
            “Soluciones inteligentes en sistemas de protección contra caídas”
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Nosotros
          </div>
        </div>
      </section>

      {/* Quiénes Somos & Historia */}
      <section className="about-section bg-white" style={{ paddingTop: '3.5rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <motion.div className="about-grid" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="about-text-block">
              <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>QUIÉNES SOMOS E HISTORIA</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>ESPECIALISTAS EN <span className="text-orange">TRABAJOS EN ALTURAS</span></h2>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.7, textAlign: 'justify' }}>
                <strong>ALTURAS GLOBAL SOLUTIONS</strong> es una empresa ecuatoriana especializada en soluciones integrales para trabajos en alturas, enfocada en el diseño, instalación, certificación y mantenimiento de sistemas de protección contra caídas.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.7, textAlign: 'justify' }}>
                Fundada el <strong>14 de mayo de 2010 por el Ing. Kevin Bravo</strong>, con la visión de crear una empresa especializada capaz de ofrecer soluciones técnicas de alto nivel en el Ecuador. Desde nuestra creación, hemos trabajado con compromiso e innovación para brindar soluciones confiables a empresas e instituciones públicas y privadas.
              </p>
              <ul className="responsive-two-col" style={{ listStyle: 'none', padding: 0, marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Líneas de vida certificadas', 'Sistemas anticaídas', 'Ingeniería y diseño especializado', 'Instalación y certificación', 'Inspección y mantenimiento', 'Seguridad industrial'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', color: '#222', fontWeight: 600 }}>
                    <span style={{ color: 'var(--primary-orange)' }}>✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-img-wrapper">
              <video suppressHydrationWarning src="/about_video.mp4" autoPlay loop muted playsInline style={{ width: '100%', maxHeight: '400px', aspectRatio: '4/3', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <MissionVisionAnchor />

      {/* Personal Técnico (IRATA) */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#0b1320', backgroundImage: 'radial-gradient(at 0% 0%, rgba(237, 108, 35, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(13, 105, 120, 0.15) 0px, transparent 50%), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '100% 100%, 100% 100%, 30px 30px', color: '#fff' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>Capacidad Operativa</span>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>PERSONAL TÉCNICO ALTAMENTE CAPACITADO</h2>
            <p style={{ fontSize: '1.6rem', color: '#ddd', marginBottom: '2rem', lineHeight: 1.7, fontWeight: 500 }}>
              Contamos con un equipo técnico especializado que cumple con todos los requisitos de la normativa ecuatoriana y los más altos estándares internacionales en materia de seguridad y salud ocupacional.
            </p>
          </motion.div>

          <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: 'var(--primary-orange)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Nuestro personal cuenta con:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Certificaciones en trabajos en alturas', 'Formación en prevención de riesgos', 'Capacitación en rescate', 'Entrenamiento en EPP', 'Instalación de sistemas anticaídas'].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--primary-orange)' }}>✓</span> {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: 'var(--primary-teal)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Certificaciones Internacionales</h3>
              <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Nuestro equipo posee certificaciones internacionales que avalan sus competencias en acceso por cuerdas:</p>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--primary-teal)', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' }}>IRATA Nivel I</div>
                <div style={{ background: 'var(--primary-teal)', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' }}>IRATA Nivel II</div>
              </div>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Priorizamos la actualización técnica bajo normativas ecuatorianas e internacionales, OSHA y ANSI.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      {/* Valores Corporativos */}
      <section
        style={{
          padding: '4rem 0',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(13,105,120,0.5) 0%, transparent 60%), radial-gradient(circle at 85% 70%, rgba(237,108,35,0.3) 0%, transparent 60%), url("/valores-bg.png")',
          backgroundSize: '100% 100%, 100% 100%, cover',
          backgroundPosition: 'center, center, center',
          backgroundAttachment: 'scroll, scroll, fixed',
          color: '#1e293b',
        }}
      >
        {/* Subtle Grid Base Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(13,105,120,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(13,105,120,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-title-center" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ display: 'inline-block', color: '#0f172a' }}>VALORES <span className="text-orange">CORPORATIVOS</span></h2>
          </div>
          <div className="valores-circular-container" style={{ maxWidth: '1400px', margin: '0 auto', aspectRatio: '2/1' }}>
            {/* SVG Connecting Lines - Líneas de Vida Certificadas */}
            <svg className="valores-svg-lines" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
              {VALORES.map((_, idx) => {
                const positions = [
                  { x: 18, y: 15 },
                  { x: 2, y: 50 },
                  { x: 18, y: 85 },
                  { x: 82, y: 15 },
                  { x: 98, y: 50 },
                  { x: 82, y: 85 }
                ];
                const pos = positions[idx];

                // Calculate start point to avoid crossing under the central logo
                const dx = pos.x - 50;
                const dy = pos.y - 50;
                const length = Math.sqrt(dx * dx + dy * dy);
                // 24% empty radius creates a nice clear area for the enlarged logo
                const emptyRadius = 24;
                const startX = 50 + dx * (emptyRadius / length);
                const startY = 50 + dy * (emptyRadius / length);

                return (
                  <g key={`line-${idx}`}>
                    {/* Shadow / Base Cable */}
                    <line
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${pos.x}%`}
                      y2={`${pos.y}%`}
                      stroke="#cbd5e1"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Rope Texture (Línea de vida certificada) */}
                    <line
                      x1={`${startX}%`}
                      y1={`${startY}%`}
                      x2={`${pos.x}%`}
                      y2={`${pos.y}%`}
                      stroke="var(--primary-teal)"
                      strokeWidth="3"
                      strokeDasharray="10 5"
                      strokeLinecap="round"
                    />
                    {/* Connection Node (Mosquetón / Anclaje) */}
                    <circle cx={`${pos.x}%`} cy={`${pos.y}%`} r="6" fill="var(--primary-orange)" stroke="#fff" strokeWidth="2" />
                    {/* Central anchor points (where lines start) */}
                    <circle cx={`${startX}%`} cy={`${startY}%`} r="4" fill="var(--primary-teal)" />
                  </g>
                );
              })}
            </svg>

            {/* Center Logo */}
            <div className="valores-center-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/logo_alturas_global.png" alt="Alturas Global Solutions" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transform: 'scale(0.75)' }} />
            </div>

            {/* Circles */}
            {VALORES.map((val, idx) => {
              const positions = [
                { x: 18, y: 15 },
                { x: 2, y: 50 },
                { x: 18, y: 85 },
                { x: 82, y: 15 },
                { x: 98, y: 50 },
                { x: 82, y: 85 }
              ];
              const pos = positions[idx];

              return (
                <motion.div
                  key={idx}
                  className="valor-circle"
                  initial={{ opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 0.5 }}
                  animate={{ opacity: 1, top: `${pos.y}%`, left: `${pos.x}%`, scale: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", stiffness: 80, damping: 15 }}
                  style={{
                    position: 'absolute',
                    border: '3px solid #fff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                >
                  <ParticleNetwork color="#ffffff" particleCount={30} interactive={true} />
                  <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
                    <h3>{val.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objetivos Institucionales */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#0f172a', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(13,105,120,0.2) 0%, transparent 60%), linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(11,19,32,1) 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>OBJETIVOS <span className="text-orange">INSTITUCIONALES</span></h2>
            <BuildingObjectives />
          </motion.div>
        </div>
      </section>

      {/* Nuestra Cobertura */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#080c16', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(237,108,35,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(13,105,120,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>NUESTRA <span className="text-orange">COBERTURA</span></h2>
          <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <EcuadorMapAnimation />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>🇪🇨 Atención Nacional</h3>
                <p className="mobile-justify-text" style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.6 }}>Brindamos atención en todo el Ecuador, con presencia fuerte en Costa, Sierra, Oriente y Galápagos. Cubriendo ciudades principales como:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Quito', 'Guayaquil', 'Cuenca', 'Manta', 'Ambato', 'Santo Domingo', 'Esmeraldas', 'Machala', 'Amazonía'].map(city => (
                    <span key={city} style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 500 }}>{city}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>🌎 Atención Internacional</h3>
                <p className="mobile-justify-text" style={{ color: '#ccc', margin: 0, lineHeight: 1.6 }}>Capacidad operativa para proyectos y asesoría técnica especializada en sistemas de protección contra caídas y trabajos verticales a nivel internacional.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compromiso Final */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: 'var(--primary-teal)',
        backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(237, 108, 35, 0.2) 0%, transparent 60%), radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>NUESTRO COMPROMISO</h2>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.8, marginBottom: '3.5rem', opacity: 0.95, fontWeight: 300 }}>
              Trabajamos cada día para brindar soluciones eficientes, seguras y confiables que permitan proteger vidas y fortalecer la seguridad en las operaciones de nuestros clientes. Seguiremos creciendo como una empresa líder, manteniendo la excelencia y la innovación.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <a href="https://wa.me/593980001234?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Altura%20Global%20Solutions" target="_blank" rel="noreferrer" className="btn" style={{ background: '#fff', color: 'var(--primary-teal)', padding: '1.2rem 3.5rem', fontSize: '1.2rem', fontWeight: 800, borderRadius: '50px', display: 'inline-block', boxShadow: '0 15px 30px rgba(0,0,0,0.15)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                CONTÁCTANOS HOY
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
