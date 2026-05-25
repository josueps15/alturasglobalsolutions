'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    id: 1,
    video: '/videos/video1.mp4',
    titleOrange: 'Expertos en',
    titleWhite: 'Instalación de Líneas de Vida',
    desc: 'Representantes oficiales de Longdyes en Ecuador. Ingeniería, montaje y certificación bajo normativas internacionales.',
    primaryBtn: { text: 'Solicitar Inspección', link: '/contacto' },
    secondaryBtn: { text: 'Ver Catálogo', link: '/soluciones' }
  },
  {
    id: 2,
    video: '/videos/video2.mp4',
    titleOrange: 'Mantenimiento y',
    titleWhite: 'Servicios en Altura',
    desc: 'Especialistas en pintura en altura, hidrolavado de fachadas e izaje de cargas pesadas de forma segura y eficiente.',
    primaryBtn: { text: 'Cotizar Servicio', link: '/contacto' },
    secondaryBtn: { text: 'Nuestros Trabajos', link: '/trabajos' }
  },
  {
    id: 3,
    video: '/videos/video3.mp4',
    titleOrange: 'Máxima Seguridad',
    titleWhite: 'Rescate Industrial',
    desc: 'Diseño e implementación de sistemas de protección contra caídas y operaciones de alto riesgo.',
    primaryBtn: { text: 'Nuestros Servicios', link: '/nosotros' },
    secondaryBtn: { text: 'Contáctanos', link: '/contacto' }
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto-play the slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 15000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentSlide];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      {/* Hero Slider Section */}
      <section id="inicio" className="hero">
        <AnimatePresence mode="wait">
          <motion.video 
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            autoPlay 
            loop 
            muted 
            playsInline 
            suppressHydrationWarning
            className="hero-video-bg"
          >
            <source src={slide.video} type="video/mp4" />
          </motion.video>
        </AnimatePresence>

        <div className="hero-overlay"></div>
        
        <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
        <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
        
        <div className="container" style={{ position: 'relative', height: '100%' }}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={slide.id}
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'absolute', top: '33%', transform: 'translateY(-50%)' }}
            >
              <span className="hero-title-orange">{slide.titleOrange}</span>
              <span className="hero-title-white">{slide.titleWhite}</span>
              <p className="hero-desc">{slide.desc}</p>
              <div className="hero-actions">
                <Link href={slide.primaryBtn.link} className="btn btn-primary">{slide.primaryBtn.text}</Link>
                <Link href={slide.secondaryBtn.link} className="btn btn-white">{slide.secondaryBtn.text}</Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Catalog Grid */}
      <section id="soluciones" className="services-showcase-section fullscreen-section">
        <div className="container">
          <div className="section-title-center">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              NUESTROS <span className="text-orange">SERVICIOS</span>
            </motion.h2>
            <motion.span 
              className="services-subtitle"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              INGENIERÍA Y SEGURIDAD CERTIFICADA EN ALTURA
            </motion.span>
          </div>
          
          <div className="catalog-grid">
            {[
              { 
                title: "INSTALACIÓN LÍNEAS DE VIDA", 
                img: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop", 
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8" />
                    <path d="M12 7v8" />
                  </svg>
                ), 
                link: "/soluciones#instalacion-de-lineas-de-vida" 
              },
              { 
                title: "PINTURA EN ALTURA", 
                img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop", 
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22V8M5 8h14M6 4h12a2 2 0 0 1 2 2v2H4V6a2 2 0 0 1 2-2z" />
                    <path d="M12 8V2" />
                  </svg>
                ), 
                link: "/soluciones#pintura-en-altura" 
              },
              { 
                title: "HIDROLAVADO DE FACHADAS", 
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop", 
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                ), 
                link: "/soluciones#hidrolavado-de-fachadas" 
              },
              { 
                title: "IZAJE DE CARGAS", 
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", 
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M18 3H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l3-5-3-4z" />
                    <path d="M12 10v11" />
                    <path d="M12 21a3 3 0 0 0 3-3" />
                  </svg>
                ), 
                link: "/soluciones#izaje-de-cargas-pesadas" 
              }
            ].map((item, idx) => (
              <Link href={item.link} key={idx}>
                <motion.div 
                  className="catalog-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="catalog-overlay">
                    <div className="catalog-icon">{item.icon}</div>
                    <h3 className="catalog-title">{item.title}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="nosotros" 
        className="fullscreen-section gallery-showcase-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container flex-row" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className="flex-half"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: 'var(--primary-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Representantes Exclusivos</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>ESPECIALISTAS EN <span className="text-orange">SEGURIDAD INDUSTRIAL</span></h2>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              En <strong>Altura Global Solutions</strong> entendemos que la seguridad no es negociable. Somos representantes oficiales de <strong>Longdyes</strong> en Ecuador, líderes mundiales en sistemas de protección contra caídas.
            </p>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Contamos con un equipo de expertos liderado por el <strong>Ing. Kevin Bravo</strong>, dedicados al diseño, instalación y validación de sistemas para trabajo seguro.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Respaldo Directo de la Marca Longdyes</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Cumplimiento Normativo Internacional (OSHA / ANSI)</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Cobertura y Soporte Técnico en Todo Ecuador</li>
            </ul>
            <Link href="/contacto" className="btn btn-primary">CONTÁCTANOS HOY</Link>
          </motion.div>
          
          <motion.div 
            className="flex-half"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop" alt="Ingeniería y Seguridad" className="about-img" />
          </motion.div>
        </div>
      </motion.section>

      {/* Longdyes Brand Section */}
      <motion.section 
        className="fullscreen-section longdyes-brand-section services-showcase-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="longdyes-brand-header">
            <motion.div 
              className="longdyes-logo-wrapper"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src="/longdyes_logo.png" alt="Longdyes Logo" className="longdyes-brand-logo-img" />
            </motion.div>
            <motion.p 
              className="longdyes-brand-tagline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Líderes Mundiales en Sistemas de Protección Colectiva y Seguridad en Cubiertas. Alturas Global Solutions es <span className="text-orange">representante oficial exclusivo</span> de Longdyes en Ecuador.
            </motion.p>
          </div>

          <div className="longdyes-products-grid">
            {[
              {
                title: "Barandillas Autoportantes",
                desc: "Sistemas de protección perimetral colectiva sin perforación de membrana para techos planos.",
                spec: "Normativa EN ISO 14122-3",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Pasarelas de Aluminio",
                desc: "Tránsito seguro sobre cubiertas frágiles o propensas a resbalones, distribuyendo el peso uniformemente.",
                spec: "Aluminio de Grado Marino",
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Líneas de Vida & Anclajes",
                desc: "Sistemas anticaídas de alta resistencia diseñados a medida bajo estrictas especificaciones estructurales.",
                spec: "Certificación EN 795 & OSHA",
                img: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=600&auto=format&fit=crop"
              }
            ].map((prod, idx) => (
              <motion.div 
                key={idx}
                className="longdyes-product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="longdyes-card-img-wrapper">
                  <img src={prod.img} alt={prod.title} />
                  <span className="longdyes-card-spec">{prod.spec}</span>
                </div>
                <div className="longdyes-card-body">
                  <h3>{prod.title}</h3>
                  <p>{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="longdyes-stats-bar">
            {[
              { num: "+500", label: "Proyectos Ejecutados" },
              { num: "100%", label: "Normativa Cumplida" },
              { num: "+50", label: "Clientes Satisfechos" },
              { num: "Ecuador", label: "Representante Oficial" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="longdyes-stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="longdyes-stat-num">{stat.num}</div>
                <div className="longdyes-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        id="galeria" 
        className="bg-light fullscreen-section gallery-showcase-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-center">
            <h2 className="section-title">ALTURAS GLOBAL SOLUTIONS <span className="text-orange">EN ACCIÓN</span></h2>
          </div>
          <div className="masonry-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="masonry-item" key={idx}>
                <img src={`/accion/img${idx + 1}.jpeg`} alt={`Altura Global Solutions en Acción ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/trabajos" className="btn btn-primary">VER GALERÍA COMPLETA</Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
