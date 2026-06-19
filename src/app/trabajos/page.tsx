'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CATEGORIES = ['Todos', 'Líneas de Vida Certificadas', 'Pintura', 'Hidrolavado', 'Capacitaciones', 'Puntos de Anclaje'];

// Map categories to specific colors for visual differentiation
const CATEGORY_COLORS: Record<string, string> = {
  'Líneas de Vida Certificadas': '#ed6c23', // Naranja corporativo
  'Pintura': '#0d6978', // Teal corporativo
  'Hidrolavado': '#0b1320', // Azul marino oscuro
  'Capacitaciones': '#ed6c23', // Naranja corporativo
  'Puntos de Anclaje': '#0d6978' // Teal corporativo
};

// Use Unsplash images that perfectly represent each category for clear identification
const rawProjects = [
  { img: '/foto-en-portada-de-lineas-de-vida.jpeg', category: 'Líneas de Vida Certificadas', title: 'Línea de Vida Horizontal' },
  { img: '/gallery/linea_vida_2.jpeg', category: 'Líneas de Vida Certificadas', title: 'Sistemas Anticaídas' },
  { img: '/gallery/linea_vida_3.jpeg', category: 'Líneas de Vida Certificadas', title: 'Instalación en Techos' },
  { img: '/gallery/linea_vida_4.jpeg', category: 'Líneas de Vida Certificadas', title: 'Certificación de Puntos' },
  { img: '/gallery/linea_vida_5.jpeg', category: 'Líneas de Vida Certificadas', title: 'Mantenimiento de Línea' },
  { img: '/gallery/linea_vida_6.jpeg', category: 'Líneas de Vida Certificadas', title: 'Inspección de Equipos' },
  { img: '/gallery/pintura_1.png', category: 'Pintura', title: 'Pintura de Fachadas' },
  { img: '/gallery/pintura_2.png', category: 'Pintura', title: 'Pintura Industrial' },
  { img: '/gallery/pintura_3.png', category: 'Pintura', title: 'Pintura de Estructuras' },
  { img: '/gallery/hidrolavado_1.png', category: 'Hidrolavado', title: 'Hidrolavado a Presión' },
  { img: '/gallery/hidrolavado_2.png', category: 'Hidrolavado', title: 'Limpieza de Ventanales' },
  { img: '/gallery/hidrolavado_3.png', category: 'Hidrolavado', title: 'Mantenimiento de Silos' },
  { img: '/gallery/capacitacion_china_1.jpeg', category: 'Capacitaciones', title: 'Entrenamiento Internacional (China)' },
  { img: '/gallery/capacitacion_china_2.jpeg', category: 'Capacitaciones', title: 'Uso de Equipos (China)' },
  { img: '/gallery/capacitacion_china_3.jpeg', category: 'Capacitaciones', title: 'Inspección de Equipos (China)' },
  { img: '/gallery/capacitacion_peru_1.jpeg', category: 'Capacitaciones', title: 'Capacitación en Campo (Perú)' },
  { img: '/gallery/capacitacion_chile_1.jpeg', category: 'Capacitaciones', title: 'Certificación Internacional (Chile)' },
  { img: '/gallery/capacitacion_chile_2.jpeg', category: 'Capacitaciones', title: 'Maniobras en Altura (Chile)' },
  { img: '/gallery/anclaje_1.jpeg', category: 'Puntos de Anclaje', title: 'Instalación de Anclaje' },
  { img: '/gallery/anclaje_2.jpeg', category: 'Puntos de Anclaje', title: 'Anclaje Estructural' },
  { img: '/gallery/anclaje_3.jpeg', category: 'Puntos de Anclaje', title: 'Certificación de Anclajes' }
];

const PROJECTS = rawProjects;

export default function Trabajos() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 19, 32, 0.8), rgba(11, 19, 32, 0.95)), url(/pintura-altura.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Portafolio de Proyectos
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Alturas Global Solutions en Acción
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Explora nuestra galería de proyectos ejecutados a nivel nacional. Desde instalación de líneas de vida certificadas hasta capacitaciones y puntos de anclaje.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Nuestros Trabajos
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: '5rem 0', position: 'relative' }}>
        <div className="container">
          <div className="gallery-filters" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginBottom: '4rem' }}>
            {CATEGORIES.map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
                style={{
                  padding: '10px 28px',
                  borderRadius: '30px',
                  border: activeFilter === filter ? `2px solid ${CATEGORY_COLORS[filter] || 'var(--primary-teal)'}` : '2px solid #eaeaea',
                  background: activeFilter === filter ? (CATEGORY_COLORS[filter] || 'var(--primary-teal)') : '#fff',
                  color: activeFilter === filter ? '#fff' : '#555',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: activeFilter === filter ? `0 8px 20px ${(CATEGORY_COLORS[filter] || 'var(--primary-teal)')}40` : 'none'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            layout 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="gallery-grid responsive-gallery-grid" 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', marginBottom: '6rem' }}
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key={project.img}
                  className="gallery-item"
                  onClick={() => setSelectedImage(project.img)}
                  style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '280px', cursor: 'zoom-in', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
                >
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                  
                  {/* Category Badge - Always visible for differentiation */}
                  <div style={{ position: 'absolute', top: '15px', left: '15px', background: CATEGORY_COLORS[project.category] || 'var(--primary-orange)', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                    {project.category}
                  </div>

                  <div className="gallery-item-overlay" style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '25px', color: '#fff',
                    opacity: 0, transition: 'opacity 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <h4 style={{ margin: '0', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', fontWeight: 800, transform: 'translateY(10px)', transition: 'transform 0.4s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(0)'}>{project.title}</h4>
                    <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: '#ddd' }}>Ver imagen ampliada</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <a href="https://wa.me/593980001234?text=Hola,%20deseo%20cotizar%20un%20proyecto" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '50px', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '1px' }}>COTIZA TU PROYECTO HOY</a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              style={{ position: 'absolute', top: '30px', right: '40px', background: 'transparent', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', zIndex: 10000 }}
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1, color: 'var(--primary-orange)' }}
            >
              &times;
            </motion.button>
            <motion.img 
              src={selectedImage} 
              alt="Proyecto Ampliado" 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ maxWidth: '90%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
