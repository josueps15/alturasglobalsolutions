'use client';

import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MeetingSection from './components/MeetingSection';

function AnimatedCounter({ from, to, prefix = '', suffix = '' }: { from: number, to: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "0px", once: false });
  const count = useMotionValue(from);

  useEffect(() => {
    let controls: any;
    if (inView) {
      controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
    } else {
      count.set(from);
    }
    return () => controls?.stop();
  }, [inView, to, from, count]);

  useEffect(() => {
    return count.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [count, prefix, suffix]);

  return <span ref={ref}>{prefix}{from}{suffix}</span>;
}

const SLIDES = [
  {
    id: 1,
    video: '/video-portada-nueva.mp4',
    titleOrange: 'Expertos en',
    titleWhite: 'Instalación de Líneas de Vida Certificadas',
    desc: 'Representantes oficiales de Longdyes en Ecuador. Ingeniería, montaje y certificación de líneas de vida bajo normativas internacionales.',
    primaryBtn: { text: 'Solicitar Inspección', link: '/contacto' },
    secondaryBtn: { text: 'Ver Catálogo', link: '/soluciones' }
  },
  {
    id: 2,
    video: '/video-1-1.mp4',
    titleOrange: 'Mantenimiento y',
    titleWhite: 'Servicios en Alturas',
    desc: 'Especialistas en líneas de vida certificadas y puntos de anclaje. Somos Representantes oficiales de Longdyes en Ecuador. Servicio de pintura en alturas. Servicio de hidrolavado y fachadas de forma segura y eficiente.',
    primaryBtn: { text: 'Cotizar Servicio', link: '/contacto' },
    secondaryBtn: { text: 'Nuestros Trabajos', link: '/trabajos' }
  },
  {
    id: 3,
    video: '/video-portada-3-final-su.mp4',
    titleOrange: 'Máxima Seguridad',
    titleWhite: 'Rescate Industrial',
    desc: 'Diseño e implementación de sistemas de protección contra caídas y operaciones de alto riesgo.',
    primaryBtn: { text: 'Nuestros Servicios', link: '/nosotros' },
    secondaryBtn: { text: 'Contáctanos', link: '/contacto' }
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const kitsRef = useRef(null);
  const { scrollYProgress: kitsScrollYProgress } = useScroll({
    target: kitsRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(kitsScrollYProgress, [0, 1], ["-20%", "20%"]);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
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
              INGENIERÍA Y SEGURIDAD CERTIFICADA EN ALTURAS
            </motion.span>
          </div>

          <div className="catalog-grid">
            {[
              {
                title: "INSTALACIÓN LÍNEAS DE VIDA CERTIFICADAS",
                img: "/foto-lineas-de-vida.jpeg",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M8 11h8" />
                    <path d="M12 7v8" />
                  </svg>
                ),
                link: "/servicios/instalacion-lineas-vida"
              },
              {
                title: "INSTALACIÓN PUNTOS DE ANCLAJE",
                img: "/foto-de-puntos-de-anclaje.jpeg",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                ),
                link: "/servicios/instalacion-puntos-anclaje"
              },
              {
                title: "SERVICIO DE PINTURA EN ALTURAS",
                img: "/pintura-altura.png",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22V8M5 8h14M6 4h12a2 2 0 0 1 2 2v2H4V6a2 2 0 0 1 2-2z" />
                    <path d="M12 8V2" />
                  </svg>
                ),
                link: "/servicios/pintura-en-altura"
              },
              {
                title: "HIDROLAVADO DE FACHADAS",
                img: "/hidrolavado-fachadas.png",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                ),
                link: "/servicios/hidrolavado-fachadas"
              },
              {
                title: "VENTA DE EQUIPOS ESPECIALIZADOS PARA TRABAJOS EN ALTURAS",
                img: "/kit-longdyes.png",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="service-svg-icon">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                ),
                link: "/kits-altura"
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
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/soluciones" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Mira todos nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Inspection CTA Section */}
      <motion.section
        className="inspection-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(13,105,120,0.95) 0%, rgba(10,61,74,0.8) 100%), url("/inspection-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          <div style={{ flex: '1 1 300px', color: '#fff' }}>
            <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>¿Necesitas evaluar la seguridad de tus instalaciones?</h3>
            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', margin: 0 }}>Nuestros ingenieros expertos realizarán un diagnóstico completo bajo normativas internacionales para garantizar la protección de tu personal.</p>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <a href="https://wa.me/593980001234?text=Hola,%20deseo%20solicitar%20una%20Inspecci%C3%B3n%20T%C3%A9cnica" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--primary-orange)', color: '#fff', padding: '1.2rem 2.5rem', fontWeight: 800, borderRadius: '50px', letterSpacing: '1px', fontSize: '1.1rem', boxShadow: '0 8px 20px rgba(237,108,35,0.4)', display: 'inline-block', textTransform: 'uppercase' }}>
              Solicita una Inspección Técnica
            </a>
          </div>
        </div>
      </motion.section>

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
            <span style={{ color: 'var(--primary-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Representantes</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>ESPECIALISTAS EN <span className="text-orange">SEGURIDAD INDUSTRIAL</span></h2>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              En <strong>Alturas Global Solutions</strong> entendemos que la seguridad no es negociable. Somos representantes oficiales de <strong>Longdyes</strong> en Ecuador, líderes mundiales en sistemas de protección contra caídas.
            </p>
            <p style={{ color: 'var(--text-grey)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              Contamos con un equipo de expertos liderado por el <strong>Ing. Kevin Bravo</strong>, dedicados al diseño, instalación y validación de sistemas para trabajo seguro.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Respaldo Directo de la Marca Longdyes</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Cumplimiento Normativa Internacional</li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}><span style={{ color: 'var(--primary-orange)', fontSize: '1.2rem' }}>✔</span> Cobertura y Soporte Técnico en Todo Ecuador</li>
            </ul>
            <a href="https://wa.me/593980001234?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n" target="_blank" rel="noreferrer" className="btn btn-primary">CONTÁCTANOS HOY</a>
          </motion.div>

          <motion.div
            className="flex-half"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/especialista-seguridad.png" alt="Ingeniero Especialista en Seguridad Industrial" className="about-img" />
          </motion.div>
        </div>
      </motion.section>

      {/* Drone Inspection Promo Section */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.95)), url("/drone-tech-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: 'clamp(3rem, 5vw, 5rem) 0',
      }}>
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', top: '-150px', right: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(237,108,35,0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header / Title Centered Above Everything */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '3rem' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(237,108,35,0.15)', border: '1px solid rgba(237,108,35,0.3)', borderRadius: '50px', padding: '6px 16px', marginBottom: '1rem', width: 'fit-content', margin: '0 auto' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ed6c23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5L9 9M19 5L15 9M5 19L9 15M19 19L15 15" /><circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /></svg>
              <span style={{ color: '#ed6c23', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Nuevo Servicio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'var(--font-heading)', color: '#ffffff', margin: '1rem auto 0', lineHeight: 1.15, maxWidth: '800px' }}
            >
              Inspección Técnica con{' '}
              <span style={{ color: '#ed6c23' }}>Drone</span>
            </motion.h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
            {/* Video Side */}
            <motion.div
              style={{ flex: '1 1 480px', position: 'relative' }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.1)',
                border: '1px solid rgba(56,189,248,0.15)',
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                >
                  <source src="/video-inspeccion-drone.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay on video */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)', pointerEvents: 'none' }} />
                {/* Live badge */}
                <div style={{
                  position: 'absolute', top: '16px', left: '16px',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
                  borderRadius: '50px', padding: '6px 14px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444', animation: 'pulse 2s infinite' }} />
                  <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Vista Aérea</span>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              style={{ flex: '1 1 420px' }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p style={{
                color: '#94a3b8',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: '520px',
                textAlign: 'justify',
              }}>
                Complementa tus servicios de seguridad con inspecciones aéreas de alta precisión. Llegamos a los lugares más inaccesibles sin exponer a tu equipo, entregando reportes visuales detallados con imágenes y video en alta resolución.
              </p>

              {/* Feature list */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  { text: 'Captura 4K' },
                  { text: 'Cero riesgos' },
                  { text: 'Reporte técnico' },
                  { text: 'Resultados rápidos' },
                ].map((feat, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.04)', borderRadius: '8px',
                    padding: '10px 14px', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: 800 }}>✓</span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>{feat.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/servicios/inspeccion-tecnica-drone" className="btn btn-primary" style={{
                padding: '1rem 2.5rem', fontSize: '1rem',
                display: 'inline-flex', alignItems: 'center', gap: '10px',
              }}>
                Conocer más
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
              Líderes Mundiales en Sistemas de Protección Colectiva y Seguridad en Cubiertas. Alturas Global Solutions es <span className="text-orange">representante oficial</span> de Longdyes en Ecuador.
            </motion.p>
          </div>

          <div className="longdyes-products-grid">
            {[
              {
                title: "Barandillas Autoportantes",
                desc: "Sistemas de protección perimetral colectiva sin perforación de membrana para techos planos.",
                spec: "Normativa EN ISO 14122-3",
                img: "/barandillas_autoportantes.png"
              },
              {
                title: "Pasarelas de Aluminio",
                desc: "Tránsito seguro sobre cubiertas frágiles o propensas a resbalones, distribuyendo el peso uniformemente.",
                spec: "Aluminio de Grado Marino",
                img: "/pasarelas_aluminio.png"
              },
              {
                title: "Líneas de Vida Certificadas & Anclajes",
                desc: "Sistemas anticaídas de alta resistencia diseñados a medida bajo estrictas especificaciones estructurales.",
                spec: "Certificación EN 795 & OSHA",
                img: "/longdyes-3.jpeg"
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

          <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
            <motion.a
              href="/longdyes"
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 2.5rem', fontSize: '1rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              Ver Galería de Trabajos Longdyes
            </motion.a>
          </div>

          <div className="longdyes-stats-bar">
            {[
              { num: "+500", label: "Proyectos Ejecutados", isCounter: true, endValue: 500, prefix: "+", suffix: "" },
              { num: "100%", label: "Normativa Cumplida", isCounter: true, endValue: 100, prefix: "", suffix: "%" },
              { num: "+50", label: "Clientes Satisfechos", isCounter: true, endValue: 50, prefix: "+", suffix: "" },
              { num: "Ecuador", label: "Representante Oficial", isCounter: false }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="longdyes-stat-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="longdyes-stat-num">
                  {stat.isCounter ? (
                    <AnimatedCounter from={0} to={stat.endValue!} prefix={stat.prefix} suffix={stat.suffix} />
                  ) : (
                    stat.num
                  )}
                </div>
                <div className="longdyes-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Kits CTA Section */}
      <section ref={kitsRef} className="kits-cta-section" style={{ backgroundColor: 'var(--primary-teal)', padding: '7rem 0', margin: '0', position: 'relative', overflow: 'hidden' }}>

        {/* Parallax Background */}
        <motion.div style={{
          position: 'absolute',
          top: '-50%',
          left: 0,
          right: 0,
          bottom: '-50%',
          backgroundImage: 'linear-gradient(90deg, rgba(13,105,120,0.95) 0%, rgba(10,61,74,0.8) 100%), url("/bg-kits.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          zIndex: 0,
          opacity: 1
        }} />

        {/* Decorative Floating Elements */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(237, 108, 35, 0.15) 0%, transparent 70%)', borderRadius: '50%', zIndex: 1, pointerEvents: 'none' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 300px', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, marginBottom: '1.2rem', fontFamily: 'var(--font-heading)', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>¿Buscas Kits para Trabajo en Alturas?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', color: '#e2e8f0', lineHeight: '1.7' }}>
              Equipados con todo lo necesario para una respuesta rápida y efectiva, garantizamos la seguridad de tus trabajadores en cualquier situación de riesgo con equipos de la marca Longdyes.
            </p>
            <Link href="/kits-altura" className="btn btn-primary" style={{ padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1.15rem', letterSpacing: '1px', boxShadow: '0 10px 20px rgba(237, 108, 35, 0.3)' }}>
              VER KITS <span>→</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            style={{ flex: '1 1 300px', textAlign: 'center' }}
          >
            <img src="/kit-longdyes.png" alt="Kit de Trabajo en Alturas Longdyes" style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }} />
          </motion.div>
        </div>
      </section>

      {/* ── Agenda una Reunión Section ── */}
      <MeetingSection />

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
            {[
              { src: '/gallery/linea_vida_1.jpeg', alt: 'Líneas de Vida Certificadas' },
              { src: '/gallery/pintura_1.png', alt: 'Pintura en Alturas' },
              { src: '/gallery/capacitacion_china_1.jpeg', alt: 'Capacitación (China)' },
              { src: '/gallery/hidrolavado_1.png', alt: 'Hidrolavado' },
              { src: '/gallery/anclaje_1.jpeg', alt: 'Puntos de Anclaje' },
              { src: '/gallery/linea_vida_2.jpeg', alt: 'Líneas de Vida Certificadas' }
            ].map((img, idx) => (
              <div className="masonry-item" key={idx}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="masonry-overlay">
                  <span>{img.alt}</span>
                </div>
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
