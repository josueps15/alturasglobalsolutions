'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OBJETIVOS = [
  "Garantizar la seguridad y protección de las personas que realizan trabajos en altura.",
  "Ofrecer soluciones integrales y personalizadas con altos estándares de calidad.",
  "Diseñar e implementar sistemas anticaídas certificados y confiables.",
  "Fortalecer la cultura de prevención y seguridad industrial.",
  "Mantener procesos de mejora continua e innovación tecnológica.",
  "Expandir nuestros servicios a nivel nacional e internacional.",
  "Consolidar relaciones de confianza y largo plazo con nuestros clientes."
];

export default function BuildingObjectives() {
  return (
    <div style={{ position: 'relative', width: '100%', padding: '4rem 0', overflow: 'hidden' }}>
      {/* Background Skyline Silhouette */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', opacity: 0.1, pointerEvents: 'none', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,100 L0,60 L5,60 L5,50 L10,50 L10,40 L15,40 L15,80 L20,80 L20,30 L30,30 L30,20 L35,20 L35,45 L40,45 L40,10 L60,10 L60,25 L65,25 L65,15 L75,15 L75,35 L80,35 L80,55 L85,55 L85,45 L90,45 L90,65 L95,65 L95,80 L100,80 L100,100 Z" fill="var(--primary-teal)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Main Central Building / Tower Structure */}
        <div className="building-tower" style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(90deg, #0b1320 0%, #1e293b 50%, #0b1320 100%)',
          borderLeft: '2px solid rgba(13, 105, 120, 0.5)',
          borderRight: '2px solid rgba(13, 105, 120, 0.5)',
          boxShadow: '0 0 20px rgba(13, 105, 120, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px'
        }}>
          {/* Windows on the central building */}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              style={{
                width: '15px',
                height: '25px',
                background: 'var(--primary-teal)',
                margin: '10px 0',
                boxShadow: '0 0 10px var(--primary-teal)',
                borderRadius: '2px'
              }}
            />
          ))}
        </div>

        {/* Objectives Levels */}
        {OBJETIVOS.map((obj, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div className="objective-row" key={index} style={{
              display: 'flex',
              width: '100%',
              justifyContent: isLeft ? 'flex-start' : 'flex-end',
              alignItems: 'center',
              position: 'relative',
              minHeight: '120px',
              marginBottom: '2rem'
            }}>
              
              {/* Connecting Platform / Beam */}
              <motion.div
                className="objective-beam"
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '50%',
                  height: '4px',
                  background: 'var(--primary-orange)',
                  boxShadow: '0 0 10px var(--primary-orange)',
                  zIndex: 1
                }}
              />

              {/* Central Node */}
              <motion.div
                className="objective-node"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--primary-orange)',
                  boxShadow: '0 0 20px var(--primary-orange)',
                  border: '4px solid #1e293b',
                  zIndex: 3
                }}
              />

              {/* Card */}
              <motion.div
                className="objective-card"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  width: '40%',
                  position: 'relative',
                  zIndex: 4,
                  [isLeft ? 'paddingRight' : 'paddingLeft']: '2rem'
                }}
              >
                <div style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(237, 108, 35, 0.3)',
                  borderTop: '3px solid var(--primary-orange)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    [isLeft ? 'right' : 'left']: 0,
                    width: '30px',
                    height: '30px',
                    background: 'var(--primary-orange)',
                    opacity: 0.1,
                    borderRadius: isLeft ? '0 0 0 100%' : '0 0 100% 0'
                  }} />
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      color: '#ffffff',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      0{index + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      {obj}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>
      
      {/* CSS for mobile responsiveness */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .building-tower {
            left: 30px !important;
            transform: none !important;
          }
          .objective-row {
            justify-content: flex-end !important;
          }
          .objective-beam {
            left: 30px !important;
            right: auto !important;
            width: calc(100% - 30px) !important;
          }
          .objective-node {
            left: 30px !important;
          }
          .objective-card {
            width: calc(100% - 80px) !important;
            padding-right: 0 !important;
            padding-left: 20px !important;
          }
        }
      `}} />
    </div>
  );
}
