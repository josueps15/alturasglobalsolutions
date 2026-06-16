'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionVisionAnchor() {
  return (
    <section style={{ 
      position: 'relative', 
      padding: '4rem 0', 
      backgroundColor: '#0f172a', 
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), radial-gradient(circle at 15% 30%, rgba(13,105,120,0.4) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(237,108,35,0.25) 0%, transparent 50%)',
      backgroundSize: '40px 40px, 40px 40px, 100% 100%, 100% 100%'
    }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>

        <div className="section-title-center" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ display: 'inline-block', color: '#fff' }}>NUESTRO <span className="text-orange">PROPÓSITO</span></h2>
        </div>

        {/* Horizontal Lifeline (Línea de vida certificada) */}
        <div style={{ position: 'absolute', top: '155px', left: '-10%', right: '-10%', height: '8px', background: '#334155', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {/* Cable texture */}
          <div style={{ width: '100%', height: '100%', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)' }} />
        </div>

        {/* Anchor Points on the wall holding the horizontal line */}
        <div style={{ position: 'absolute', top: '135px', left: '-5%', width: '40px', height: '60px', background: '#334155', borderRadius: '4px', border: '2px solid #475569', boxShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '10px', left: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
        </div>
        <div style={{ position: 'absolute', top: '135px', right: '-5%', width: '40px', height: '60px', background: '#334155', borderRadius: '4px', border: '2px solid #475569', boxShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '10px', left: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '4.5rem' }}>
          
          {/* Misión */}
          <motion.div 
            style={{ position: 'relative', transformOrigin: 'top center' }}
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            {/* Carabiner & Vertical Rope */}
            <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '80px', zIndex: 10 }}>
              <svg width="40" height="80" viewBox="0 0 40 80">
                {/* Carabiner */}
                <path d="M 20 5 C 35 5 35 25 20 30 C 5 25 5 5 20 5" fill="none" stroke="var(--primary-teal)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 28 10 L 28 25" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                {/* Vertical rope */}
                <path d="M 20 30 L 20 80" stroke="#475569" strokeWidth="8" strokeDasharray="6 4" />
              </svg>
            </div>
            {/* Custom Decoration Image (Left Side of Card) */}
            <div style={{ position: 'absolute', top: '50%', left: '-300px', transform: 'translateY(-40%)', width: '400px', zIndex: -1, pointerEvents: 'none' }}>
              <img src="/mission-vision-img.png" alt="Decoración Altura" style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }} />
            </div>

            {/* Content Card */}
            <motion.div 
              whileHover={{ rotate: 1 }}
              style={{ 
                marginTop: '45px',
                background: '#ffffff',
                backgroundImage: 'url("/bg_mision.png")',
                backgroundSize: '130%',
                backgroundPosition: 'center',
                padding: '2.5rem', 
                borderRadius: '16px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                border: '1px solid rgba(13,105,120,0.3)',
                borderTop: '8px solid var(--primary-teal)', 
                position: 'relative', 
                overflow: 'hidden',
                transformOrigin: 'top center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Card Anchor Plate */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '30px', background: '#334155', borderRadius: '0 0 8px 8px', border: '2px solid #475569', borderTop: 'none', zIndex: 2 }}>
                <div style={{ position: 'absolute', bottom: '8px', left: '15px', width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '8px', right: '15px', width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-teal)', margin: 0, fontFamily: 'var(--font-heading)' }}>Nuestra Misión</h3>
              </div>
              
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.8, position: 'relative', zIndex: 2, fontWeight: 500, textAlign: 'center' }}>
                Proveer soluciones integrales y de alta calidad en sistemas de protección contra caídas, mediante el diseño, instalación, certificación y mantenimiento de líneas de vida certificadas y sistemas anticaídas, garantizando la seguridad de las personas que trabajan en altura y contribuyendo al cumplimiento normativo y a la eficiencia operativa de nuestros clientes.
              </p>
            </motion.div>
          </motion.div>

          {/* Visión */}
          <motion.div 
            style={{ position: 'relative', transformOrigin: 'top center' }}
            initial={{ rotate: 5, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            {/* Carabiner & Vertical Rope */}
            <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '80px', zIndex: 10 }}>
              <svg width="40" height="80" viewBox="0 0 40 80">
                {/* Carabiner */}
                <path d="M 20 5 C 35 5 35 25 20 30 C 5 25 5 5 20 5" fill="none" stroke="var(--primary-orange)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 28 10 L 28 25" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                {/* Vertical rope */}
                <path d="M 20 30 L 20 80" stroke="#475569" strokeWidth="8" strokeDasharray="6 4" />
              </svg>
            </div>
            {/* Custom Decoration Image (Right Side of Card) */}
            <div style={{ position: 'absolute', top: '50%', right: '-180px', transform: 'translateY(-35%)', width: '220px', zIndex: -1, pointerEvents: 'none' }}>
              <img src="/mission-vision-img-right.png" alt="Decoración Altura Derecha" style={{ width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }} />
            </div>

            {/* Content Card */}
            <motion.div 
              whileHover={{ rotate: -1 }}
              style={{ 
                marginTop: '45px',
                background: '#ffffff',
                backgroundImage: 'url("/bg_vision.png")',
                backgroundSize: '130%',
                backgroundPosition: 'center',
                padding: '2.5rem', 
                borderRadius: '16px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                border: '1px solid rgba(237,108,35,0.3)',
                borderTop: '8px solid var(--primary-orange)', 
                position: 'relative', 
                overflow: 'hidden',
                transformOrigin: 'top center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Card Anchor Plate */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '30px', background: '#334155', borderRadius: '0 0 8px 8px', border: '2px solid #475569', borderTop: 'none', zIndex: 2 }}>
                <div style={{ position: 'absolute', bottom: '8px', left: '15px', width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '8px', right: '15px', width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-orange)', margin: 0, fontFamily: 'var(--font-heading)' }}>Nuestra Visión</h3>
              </div>
              
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.8, position: 'relative', zIndex: 2, fontWeight: 500, textAlign: 'center' }}>
                Ser la empresa líder y referente en Ecuador y Latinoamérica en soluciones para trabajo en altura, reconocida por nuestra innovación, calidad y compromiso con la seguridad, generando confianza en cada proyecto y contribuyendo a la protección de vidas y al desarrollo de entornos laborales más seguros.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
