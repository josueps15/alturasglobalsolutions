'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion';

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

const GALLERY_IMAGES = Array.from({ length: 23 }, (_, i) => ({
  src: `/galeria-longdyes/trabajo-${(i + 1).toString().padStart(2, '0')}.jpeg`,
  alt: `Proyecto Longdyes ${i + 1}`,
})).filter(img => img.src !== '/galeria-longdyes/trabajo-22.jpeg');

const PRODUCTS = [
  {
    title: 'Líneas de Vida Horizontales',
    desc: 'Sistemas anticaídas de alta resistencia diseñados a medida bajo estrictas especificaciones estructurales. Cada sistema incluye certificación de conformidad y documentación técnica completa.',
    spec: 'Certificación EN 795',
    img: '/galeria-longdyes/trabajo-17.jpeg',
  },
  {
    title: 'Barandillas Autoportantes',
    desc: 'Sistemas de protección perimetral colectiva sin perforación de membrana para techos planos. Diseñadas bajo normativa EN ISO 14122-3, ofrecen máxima seguridad sin comprometer la integridad de la cubierta.',
    spec: 'Normativa EN ISO 14122-3',
    img: '/barandillas_autoportantes.png',
  },
  {
    title: 'Pasarelas de Aluminio',
    desc: 'Tránsito seguro sobre cubiertas frágiles o propensas a resbalones, distribuyendo el peso uniformemente. Fabricadas en aluminio de grado marino para máxima durabilidad y resistencia a la corrosión.',
    spec: 'Aluminio de Grado Marino',
    img: '/pasarelas_aluminio.png',
  },
  {
    title: 'Puntos de Anclaje',
    desc: 'Puntos de anclaje fijos y móviles para garantizar la seguridad en zonas de difícil acceso o donde no es posible instalar líneas continuas. Evaluados y certificados bajo estándares internacionales.',
    spec: 'Cumplimiento OSHA',
    img: '/galeria-longdyes/trabajo-21.jpeg',
  },
];

const STATS = [
  { num: '+472', label: 'Proyectos Ejecutados', isCounter: true, endValue: 472, prefix: '+', suffix: '' },
  { num: '100%', label: 'Normativa Cumplida', isCounter: true, endValue: 100, prefix: '', suffix: '%' },
  { num: '+50', label: 'Clientes Satisfechos', isCounter: true, endValue: 50, prefix: '+', suffix: '' },
  { num: 'Ecuador', label: 'Representante Oficial', isCounter: false },
];

export default function LongdyesPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));

  return (
    <>
      {/* Hero Section */}
      <section className="longdyes-page-hero">
        <div className="longdyes-page-hero-overlay" />
        <div className="longdyes-page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
              <Image src="/logo-longdyes-altura.png" alt="Longdyes x Alturas Global Solutions" className="longdyes-hero-logo" width={400} height={140} style={{ height: '140px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>
              Galería de Trabajos
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7, textAlign: 'justify' }}>
              Representantes oficiales de Longdyes en Ecuador. Explore nuestros proyectos de instalación de sistemas de protección colectiva, líneas de vida certificadas, pasarelas de aluminio y barandillas autoportantes ejecutados bajo los más altos estándares internacionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-orange), #d95a1c)', padding: '2.5rem 1rem' }}>
        <div className="longdyes-stats-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: '#fff' }}>
                {stat.isCounter ? (
                  <AnimatedCounter from={0} to={stat.endValue!} prefix={stat.prefix} suffix={stat.suffix} />
                ) : (
                  stat.num
                )}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url(/bg-longdyes-products.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '6rem 1rem',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg, rgba(11,19,32,0.95) 0%, rgba(13,37,53,0.85) 50%, rgba(11,19,32,0.95) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(13,105,120,0.1), transparent 50%), radial-gradient(circle at 20% 80%, rgba(237,108,35,0.08), transparent 50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{ color: 'var(--primary-orange)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Soluciones Certificadas
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 900, margin: '0.5rem 0', letterSpacing: '-0.5px' }}>
              Sistemas de Protección Colectiva
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--primary-teal), var(--primary-orange))', margin: '1.5rem auto 0', borderRadius: '3px' }} />
          </motion.div>

          <div className="longdyes-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {PRODUCTS.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ y: -8, borderColor: 'rgba(13,105,120,0.3)' }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image src={prod.img} alt={prod.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    background: 'linear-gradient(135deg, var(--primary-orange), #ff8c42)',
                    color: '#fff', padding: '6px 14px', borderRadius: '8px',
                    fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px',
                    fontFamily: 'var(--font-heading)',
                  }}>
                    {prod.spec}
                  </span>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>{prod.title}</h3>
                  <p style={{ color: '#fff', lineHeight: 1.7, fontSize: '0.9rem', textAlign: 'justify' }}>{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url(/bg-longdyes-gallery-orange.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '6rem 1rem', 
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg, rgba(15,15,18,0.9) 0%, rgba(10,10,12,0.6) 50%, rgba(15,15,18,0.9) 100%)' }} />
        <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{ color: 'var(--primary-orange)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Nuestro Portafolio
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 900, margin: '0.5rem 0', letterSpacing: '-0.5px' }}>
              Proyectos Ejecutados
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7, textAlign: 'justify' }}>
              Cada proyecto refleja nuestro compromiso con la excelencia, seguridad y cumplimiento de los estándares más rigurosos de la industria.
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--primary-teal), var(--primary-orange))', margin: '1.5rem auto 0', borderRadius: '3px' }} />
          </motion.div>

          {/* Gallery Grid */}
          <div className="longdyes-masonry-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {(showFullGallery ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 8)).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (idx % 4) * 0.05, duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  height: '250px',
                }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(13,105,120,0.3)' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                  opacity: 0, transition: 'opacity 0.3s ease',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  padding: '1.5rem',
                }}
                  className="gallery-hover-overlay"
                >
                  <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem' }}>
                    Proyecto {idx + 1}
                  </span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary-orange)" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
          {!showFullGallery && GALLERY_IMAGES.length > 8 && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button 
                onClick={() => setShowFullGallery(true)}
                className="btn btn-primary"
                style={{ padding: '1rem 2.5rem', fontSize: '1rem', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                Ver toda la galería
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Video Demonstrations Section */}
      <section style={{ 
        position: 'relative',
        backgroundImage: 'url(/bg-kits.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '6rem 1rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,19,32,0.95) 0%, rgba(11,19,32,0.85) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(237,108,35,0.15) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{ color: 'var(--primary-orange)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Demostraciones en Video
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 900, margin: '0.5rem 0', letterSpacing: '-0.5px' }}>
              Sistemas en Acción
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7, textAlign: 'justify' }}>
              Conozca más sobre la instalación, funcionamiento y características de nuestras líneas de vida y sistemas de protección anticaídas Longdyes.
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--primary-teal), var(--primary-orange))', margin: '1.5rem auto 0', borderRadius: '3px' }} />
          </motion.div>

          <div className="longdyes-videos-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {[
              "https://www.youtube.com/embed/n0Fg0Tt0yLE",
              "https://www.youtube.com/embed/UNlTO6Vk9-0?start=24",
              "https://www.youtube.com/embed/LLxElY0YcQ0",
              "https://www.youtube.com/embed/3nqrsNeIQ04"
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%', /* 16:9 aspect ratio */
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  background: '#000'
                }}
              >
                <iframe 
                  src={src} 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/bg-longdyes-cta.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '4rem 1rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(170deg, rgba(11,19,32,0.88) 0%, rgba(11,19,32,0.82) 50%, rgba(13,37,53,0.9) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(13,105,120,0.12), transparent 60%), radial-gradient(circle at 70% 50%, rgba(237,108,35,0.08), transparent 60%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 2 }}
        >

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#fff', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            ¿Necesita un sistema de protección <span style={{ color: 'var(--primary-orange)' }}>Longdyes</span>?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.8, marginBottom: '2rem', textAlign: 'justify', fontSize: '1rem' }}>
            Contamos con la experiencia y certificaciones necesarias para diseñar, instalar y certificar el sistema ideal para su proyecto. Solicite una cotización sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contacto" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '1rem 2.5rem', fontSize: '1rem', color: '#fff' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Solicitar Cotización
            </Link>
            <Link href="/" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Volver al Inicio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute', top: '2rem', right: '2rem',
                background: 'rgba(255,255,255,0.1)', border: 'none',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 10,
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                width: '52px', height: '52px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', zIndex: 10,
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain',
                borderRadius: '12px', boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              }}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                width: '52px', height: '52px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', cursor: 'pointer', zIndex: 10,
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Counter */}
            <div style={{
              position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: '0.9rem', letterSpacing: '2px',
            }}>
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .longdyes-page-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url('/galeria-longdyes/trabajo-03.jpeg') center/cover no-repeat;
          overflow: hidden;
        }
        .longdyes-page-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(170deg, rgba(11,19,32,0.92) 0%, rgba(11,19,32,0.85) 50%, rgba(13,37,53,0.9) 100%);
        }
        .longdyes-page-hero-content {
          position: relative;
          z-index: 2;
          padding: 160px 2rem 4rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .gallery-hover-overlay:hover,
        div:hover > .gallery-hover-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .longdyes-page-hero-content {
            padding: 140px 1rem 3rem;
          }
        }
      `}</style>
    </>
  );
}
