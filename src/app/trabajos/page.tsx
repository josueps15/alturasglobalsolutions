'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PROJECTS = Array.from({ length: 17 }).map((_, idx) => ({
  img: `/accion/img${idx + 1}.jpeg`,
  title: `Proyecto de Altura ${idx + 1}`,
  category: "Trabajos en Altura"
}));

export default function Trabajos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Portafolio de Proyectos
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Alturas Global Solutions en Acción
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Explora nuestra galería de proyectos ejecutados a nivel nacional. Desde instalación de líneas de vida hasta operaciones complejas de izaje y mantenimiento.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Nuestros Trabajos
          </div>
        </div>
      </section>

      <section className="bg-white" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="gallery-filters">
            {['Todos', 'Líneas de Vida', 'Pintura', 'Hidrolavado', 'Izaje', 'Rescate'].map((filter) => (
              <button key={filter} className={`gallery-filter-btn ${filter === 'Todos' ? 'active' : ''}`}>
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                className="gallery-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <img src={project.img} alt={project.title} />
                <div className="gallery-item-overlay">
                  <span>{project.category}</span>
                  <h4>{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="stats-section" style={{ borderRadius: '16px', marginBottom: '3rem' }}>
            <div className="stats-grid">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="stat-number">+500</div>
                <div className="stat-text">Proyectos Completados</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="stat-number">+50</div>
                <div className="stat-text">Empresas Confían en Nosotros</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="stat-number">100%</div>
                <div className="stat-text">Certificación Cumplida</div>
              </motion.div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/contacto" className="btn btn-primary">COTIZA TU PROYECTO HOY</Link>
          </div>
        </div>
      </section>
    </>
  );
}
