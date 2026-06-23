'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const PRODUCTS = [
  {
    id: 'arnes-cuerpo-completo',
    name: 'Arnés de Cuerpo Completo Longdyes',
    desc: 'Arnés industrial multipropósito con 4 puntos de anclaje, diseñado para detención de caídas, posicionamiento y rescate. Fabricado con cintas de poliéster de alta resistencia y herrajes de acero forjado.',
    img: '/arnes_longdyes.png',
    specs: ['Certificación ANSI Z359.11', 'Capacidad 140kg', 'Acolchado ergonómico'],
    catalogFile: '/catalogos/catalogo-climbing-1.pdf'
  },
  {
    id: 'eslinga-doble-absorbedor',
    name: 'Eslinga Doble en Y con Absorbedor',
    desc: 'Eslinga o línea de vida certificada doble con absorbedor de impacto integrado. Ganchos estructureros de 2 1/4" para conexión segura a estructuras.',
    img: '/eslinga_longdyes.png',
    specs: ['Certificación ANSI Z359.13', 'Longitud 1.8m', 'Ganchos de doble seguro'],
    catalogFile: '/catalogos/catalogo-climbing-1.pdf'
  },
  {
    id: 'casco-seguridad-industrial',
    name: 'Casco de Seguridad Industrial Tipo II',
    desc: 'Casco dieléctrico de alto impacto con barbiquejo de 4 puntos. Diseño sin visera para facilitar la visión vertical durante trabajos en alturas.',
    img: '/casco_longdyes.png',
    specs: ['Certificación ANSI Z89.1', 'Ajuste tipo rachet', 'Clase E (Dieléctrico)'],
    catalogFile: '/catalogos/catalogo-cascos-rock-helmets.pdf'
  },
  {
    id: 'kit-rescate-alturas',
    name: 'Kit de Rescate para Trabajos en Altura',
    desc: 'Sistema completo pre-ensamblado para evacuación y rescate de personal accidentado. Incluye polipastos, descendedores y cuerda semiestática.',
    img: '/kit_rescate_longdyes.png',
    specs: ['Certificación EN 341', 'Descenso controlado', 'Bolso de transporte'],
    catalogFile: '/catalogos/catalogo-climbing-2.pdf'
  },
  {
    id: 'mosqueton-acero',
    name: 'Mosquetón de Acero Asimétrico',
    desc: 'Mosquetón direccional de alta resistencia con cierre automático (Triple lock). Ideal para conexiones críticas en sistemas anticaídas.',
    img: '/mosqueton_longdyes.png',
    specs: ['Certificación EN 362 / ANSI Z359.12', 'Resistencia 40kN', 'Seguro automático'],
    catalogFile: '/catalogos/catalogo-climbing-1.pdf'
  },
  {
    id: 'freno-cuerda',
    name: 'Freno Anticaídas para Cuerda',
    desc: 'Dispositivo deslizante sobre línea de anclaje flexible. Acompaña al usuario durante el ascenso y descenso, bloqueándose inmediatamente en caso de caída.',
    img: '/freno_cuerda_longdyes.png',
    specs: ['Certificación EN 353-2', 'Para cuerda 11-12mm', 'Mecanismo antipánico'],
    catalogFile: '/catalogos/catalogo-cuerdas-accesorios.pdf'
  }
];

const CATALOGOS = [
  {
    title: 'Catálogo de Cuerdas y Accesorios',
    desc: 'Línea completa de cuerdas estáticas, semiestáticas y accesorios para sistemas de protección contra caídas.',
    file: '/catalogos/catalogo-cuerdas-accesorios.pdf',
    img: '/catalogos/img-cuerdas.png',
  },
  {
    title: 'Catálogo de Puntos de Anclaje',
    desc: 'Sistemas de anclaje fijos, temporales y portátiles certificados para todo tipo de estructura.',
    file: '/catalogos/catalogo-puntos-anclaje.pdf',
    img: '/catalogos/img-anclaje.png',
  },
  {
    title: 'Catálogo de Cascos Rock Helmets',
    desc: 'Cascos profesionales de alta protección para trabajos en altura, rescate y actividades verticales.',
    file: '/catalogos/catalogo-cascos-rock-helmets.pdf',
    img: '/catalogos/img-cascos.png',
  },
  {
    title: 'Catálogo Profesional Climbing Vol. 2',
    desc: 'Segunda edición del catálogo de equipos especializados para trabajos verticales y escalada industrial.',
    file: '/catalogos/catalogo-climbing-2.pdf',
    img: '/catalogos/img-climbing2.png',
  },
  {
    title: 'Catálogo Profesional Climbing Vol. 1',
    desc: 'Equipamiento profesional para trabajos en alturas: arneses, eslingas, conectores y dispositivos anticaídas.',
    file: '/catalogos/catalogo-climbing-1.pdf',
    img: '/catalogos/img-climbing1.png',
  },
  {
    title: 'Manual Técnico de Cuerdas',
    desc: 'Guía técnica completa sobre tipos de cuerdas, características, uso correcto, inspección y mantenimiento.',
    file: '/catalogos/manual-cuerdas.pdf',
    img: '/catalogos/img-manual-cuerdas.png',
  }
];

export default function KitsAlturaPage() {
  const [showCatalogos, setShowCatalogos] = useState(false);

  const getWhatsAppLink = (productName: string) => {
    const phone = "593980001234";
    const text = encodeURIComponent(`Hola, deseo cotizar el producto: ${productName}.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 19, 32, 0.8), rgba(11, 19, 32, 0.9)), url(/hero-kits-altura.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-hero-subtitle">Catálogo Especializado</span>
            <h1 className="page-hero-title">Kits y Equipos para Trabajo en Alturas</h1>
            <p className="page-hero-desc">Descubre nuestra línea completa de protección contra caídas con la garantía internacional de Longdyes.</p>
            <div className="page-hero-breadcrumb">
              <Link href="/">Inicio</Link><span>/</span>Kits y Equipos
            </div>
          </motion.div>
        </div>
      </section>

      <section className="kits-catalog-section" style={{ position: 'relative', padding: '6rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(237, 108, 35, 0.03), transparent 25%), radial-gradient(circle at 85% 30%, rgba(13, 105, 120, 0.04), transparent 25%), radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '100% 100%, 100% 100%, 30px 30px', opacity: 0.8, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ color: 'var(--primary-teal)' }}>NUESTROS <span className="text-orange">PRODUCTOS</span></h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#555' }}>
              Todos nuestros equipos están homologados y certificados bajo normativas OSHA, ANSI o EN. Protege a tu equipo con lo mejor del mercado.
            </p>
          </div>

          <div className="kits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {PRODUCTS.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#111', marginBottom: '1rem' }}>{prod.name}</h3>
                  <p style={{ color: '#555', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>{prod.desc}</p>

                  <div style={{ marginBottom: '2rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {prod.specs.map((spec, sIdx) => (
                        <li key={sIdx} style={{ fontSize: '0.9rem', color: '#666', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--primary-orange)' }}>•</span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={getWhatsAppLink(prod.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '0.8rem', fontSize: '0.95rem', borderRadius: '8px' }}
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      COTIZAR
                    </a>
                    {prod.catalogFile && (
                      <a
                        href={prod.catalogFile}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline"
                        style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '0.8rem', fontSize: '0.95rem', borderRadius: '8px', border: '1px solid var(--primary-orange)', color: 'var(--primary-orange)', background: 'transparent' }}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        CATÁLOGO
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogos Profesionales Section ── */}
      <section style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #0b1320 0%, #0f2840 50%, #0d6978 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(237, 108, 35, 0.06), transparent 40%), radial-gradient(circle at 80% 20%, rgba(13, 105, 120, 0.1), transparent 40%)', zIndex: 1, pointerEvents: 'none' }} />
        {/* Subtle geometric lines */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', border: '1px solid rgba(13, 105, 120, 0.12)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '450px', height: '450px', borderRadius: '50%', border: '1px solid rgba(237, 108, 35, 0.06)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}>
              RECURSOS TÉCNICOS
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Catálogos <span style={{ color: 'var(--primary-orange)' }}>Profesionales</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.8, textAlign: 'center' }}>
              Accede a nuestros catálogos técnicos con especificaciones completas de equipos, cuerdas, cascos y sistemas de protección contra caídas.
            </p>

            {/* Toggle Button */}
            <motion.button
              onClick={() => setShowCatalogos(!showCatalogos)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: showCatalogos ? 'transparent' : 'linear-gradient(135deg, var(--primary-orange), #ff8c42)',
                border: showCatalogos ? '2px solid var(--primary-orange)' : 'none',
                color: '#fff',
                padding: '1.1rem 3rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: showCatalogos ? 'none' : '0 8px 30px rgba(237, 108, 35, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              {showCatalogos ? 'OCULTAR CATÁLOGOS' : 'VER NUESTROS CATÁLOGOS'}
              <motion.svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: showCatalogos ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Catalogs Grid */}
          <AnimatePresence>
            {showCatalogos && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div className="catalogos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.8rem', paddingTop: '1rem' }}>
                  {CATALOGOS.map((cat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'row' as const,
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
                        e.currentTarget.style.borderColor = 'rgba(13, 105, 120, 0.4)';
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.boxShadow = '0 16px 50px rgba(0, 0, 0, 0.25)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Image */}
                      <div className="catalogo-card-img" style={{ width: '200px', minHeight: '220px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                        <img
                          src={cat.img}
                          alt={cat.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 60%, rgba(11,19,32,0.5) 100%)' }} />
                      </div>

                      {/* Content */}
                      <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                        <div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--primary-orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Documento PDF</span>
                          <h4 style={{ fontFamily: 'var(--font-heading)', color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: '0.3rem 0 0', lineHeight: 1.3 }}>
                            {cat.title}
                          </h4>
                        </div>

                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.92rem', lineHeight: 1.75, margin: 0, flexGrow: 1, textAlign: 'justify' }}>
                          {cat.desc}
                        </p>

                        <div style={{ display: 'flex', gap: '0.7rem' }}>
                          <a
                            href={cat.file}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              padding: '0.7rem 1rem',
                              borderRadius: '10px',
                              background: 'linear-gradient(135deg, var(--primary-teal), #0a5260)',
                              color: '#fff',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              textDecoration: 'none',
                              transition: 'all 0.25s ease',
                              fontFamily: 'var(--font-heading)',
                              letterSpacing: '0.5px'
                            }}
                          >
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            Ver
                          </a>
                          <a
                            href={cat.file}
                            download
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px',
                              padding: '0.7rem 1rem',
                              borderRadius: '10px',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(13, 105, 120, 0.3)',
                              color: '#fff',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              textDecoration: 'none',
                              transition: 'all 0.25s ease',
                              fontFamily: 'var(--font-heading)',
                              letterSpacing: '0.5px'
                            }}
                          >
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Descargar
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
