'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const LINEAS_DE_VIDA = [
  {
    id: 'lv-vertical-recto',
    name: 'Líneas de Vida Verticales (Sistema Recto)',
    desc: 'Sistemas fijos anticaídas para escaleras y estructuras verticales. Diseñadas para proporcionar seguridad ininterrumpida durante el ascenso y descenso.',
    img: '/lineas-de-vida/verticales-recto.png',
    specs: ['Ascenso ininterrumpido', 'Estructuras fijas']
  },
  {
    id: 'lv-vertical-curvo',
    name: 'Líneas de Vida Verticales (Sistema Curvo)',
    desc: 'Sistemas adaptables a perfiles arquitectónicos complejos, permitiendo el paso por ángulos sin necesidad de desconectarse.',
    img: '/lineas-de-vida/verticales-curvo.png',
    specs: ['Adaptable a contornos', 'Paso sin desconexión']
  },
  {
    id: 'lv-estandar',
    name: 'Líneas de Vida Estándar',
    desc: 'Sistemas de anclaje de alta resistencia para prevención y detención de caídas en trabajos cotidianos o industriales.',
    img: '/lineas-de-vida/linea-de-vida-5.png',
    specs: ['Uso versátil', 'Alta resistencia']
  },
  {
    id: 'lv-horizontales',
    name: 'Líneas de Vida Horizontales',
    desc: 'Sistemas de anclaje permanente sobre cubiertas y fachadas. Permiten el movimiento libre a lo largo de toda su extensión.',
    img: '/lineas-de-vida/linea-de-vida-6.png',
    specs: ['Cobertura extendida', 'Libertad de movimiento']
  },
  {
    id: 'lv-rigidas',
    name: 'Líneas de Vida Rígidas',
    desc: 'Sistemas anticaídas basados en rieles metálicos. Ofrecen mínima deflexión y pueden asegurar a múltiples usuarios simultáneamente.',
    img: '/lineas-de-vida/linea-de-vida-3.png',
    specs: ['Mínima deflexión', 'Múltiples usuarios']
  },
  {
    id: 'lv-temporales',
    name: 'Líneas de Vida Temporales',
    desc: 'Sistemas portátiles de rápida instalación, fabricados en cinta o cable, ideales para obras de construcción a corto plazo.',
    img: '/lineas-de-vida/temporales.png',
    specs: ['Rápida instalación', 'Portátiles']
  },
  {
    id: 'lv-cable-acero',
    name: 'Cable de Acero para Líneas de Vida',
    desc: 'Cable de acero galvanizado o inoxidable de alta resistencia, componente fundamental para sistemas y líneas de vida horizontales y verticales.',
    img: '/lineas-de-vida/cable de acero .png',
    specs: ['Alta resistencia', 'Anticorrosivo']
  },
  {
    id: 'lv-autorretractil',
    name: 'Línea de Vida Autorretráctil',
    desc: 'Dispositivo anticaídas de reposición automática que permite libertad de movimiento y detiene instantáneamente cualquier caída.',
    img: '/lineas-de-vida/ficha tecnica lineade vida auto retractil.png',
    specs: ['Bloqueo instantáneo', 'Retracción automática']
  }
];

const PRODUCTS = [
  {
    id: 'arnes-cuerpo-completo',
    name: 'Arnés de Cuerpo Completo',
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
    name: 'Casco de Seguridad Industrial',
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

const PUNTOS_ANCLAJE = [
  { id: 'pa-1', name: 'Punto de Anclaje 1', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 1.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-2', name: 'Punto de Anclaje 2', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 2.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-3', name: 'Punto de Anclaje 3', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 3.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-4', name: 'Punto de Anclaje 4', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 4.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-5', name: 'Punto de Anclaje 5', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 5.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-6', name: 'Punto de Anclaje 6', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 6.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-7', name: 'Punto de Anclaje 7', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 7.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-8', name: 'Punto de Anclaje 8', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 8.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-9', name: 'Punto de Anclaje 9', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 9 .png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-10', name: 'Punto de Anclaje 10', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 10 .png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-11', name: 'Punto de Anclaje 11', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 11.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-12', name: 'Punto de Anclaje 12', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 12.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-13', name: 'Punto de Anclaje 13', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 13.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-14', name: 'Punto de Anclaje 14', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 14.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-15', name: 'Punto de Anclaje 15', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 15.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-16', name: 'Punto de Anclaje 16', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 16.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-17', name: 'Punto de Anclaje 17', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 17.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-18', name: 'Punto de Anclaje 18', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 18.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-19', name: 'Punto de Anclaje 19', desc: 'Anclaje estructural certificado para protección contra caídas.', img: '/puntos-de-anclaje/punto de anclaje 19.png', specs: ['Alta resistencia', 'Fácil instalación'] },
  { id: 'pa-cinta-horizontal', name: 'Cinta de Anclaje Horizontal', desc: 'Dispositivo de anclaje temporal fabricado en cinta de alta tenacidad, ideal para crear puntos seguros rápidos y adaptables.', img: '/lineas-de-vida/cinta de anclaje horizontal .png', specs: ['Instalación rápida', 'Alta tenacidad'] }
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

const GUANTES = [
  { id: 'g-cuero', name: 'Guantes de Cuero', desc: 'Guantes de cuero de alta resistencia para trabajos pesados, proporcionando excelente protección mecánica y durabilidad.', img: '/epp/guantes guantes de cuero .png', specs: ['Resistencia mecánica', 'Alta durabilidad', 'Uso industrial'] },
  { id: 'g-nitrilo', name: 'Guantes Especiales de Nitrilo', desc: 'Guantes de nitrilo de alta visibilidad para protección contra riesgos químicos y biológicos, con agarre mejorado.', img: '/epp/guantes guantes especiales de nitrilo 3.png', specs: ['Protección química', 'Hipoalergénicos', 'Agarre texturizado'] },
  { id: 'g-quimicos', name: 'Guantes para Químicos', desc: 'Guantes especializados para la manipulación segura de productos químicos agresivos, ácidos y solventes.', img: '/epp/guantes guantes para quimicos .png', specs: ['Barrera química', 'Caña larga', 'Flexibles'] },
];

const GAFAS = [
  { id: 'gafas-prot', name: 'Gafas de Protección', desc: 'Gafas de seguridad industrial con protección UV, diseño ergonómico y recubrimiento anti-empañante.', img: '/epp/gafas de proteccion .png', specs: ['Anti-empañante', 'Protección UV 400', 'Resistencia a impactos ANSI Z87.1'] }
];

const CASCOS = [
  { id: 'casco-prot', name: 'Cascos de Protección Industrial', desc: 'Cascos de seguridad dieléctricos para protección craneal en la industria y construcción.', img: '/epp/cascos de proteccion .png', specs: ['Dieléctricos Clase E', 'Ajuste tipo rachet', 'Alta visibilidad'] }
];

const AUDITIVA = [
  { id: 'aud-prot', name: 'Protección Auditiva', desc: 'Orejeras de protección auditiva para entornos industriales de alto ruido. Diseño acolchado para confort prolongado.', img: '/epp/equipos de proteccion auditiva .png', specs: ['Alta atenuación (NRR)', 'Copas ajustables', 'Uso con cascos'] }
];

const EPP_GENERAL_ITEMS = [
  { id: 'epp-gen', name: 'Kit EPP General', desc: 'Equipos de protección personal complementarios para asegurar la integridad integral del trabajador en cualquier entorno.', img: '/epp/epp general .png', specs: ['Protección integral', 'Cumplimiento normativo', 'Confort térmico'] }
];

const SingleProductSection = ({ title, bgImage, product, colorTheme = 'teal', showCatalogBtn = false, reverse = false }: any) => {
  const getWhatsAppLink = (productName: string) => {
    const phone = "593980001234";
    const text = encodeURIComponent(`Hola, deseo cotizar el producto: ${productName}.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  const themeColors: any = {
    teal: { text: '#0d6978', overlay: 'rgba(13, 105, 120, 0.9)' },
    orange: { text: '#ed6c23', overlay: 'rgba(237, 108, 35, 0.9)' },
    dark: { text: '#0b1320', overlay: 'rgba(11, 19, 32, 0.9)' },
    blue: { text: '#1e3a8a', overlay: 'rgba(30, 58, 138, 0.9)' },
    purple: { text: '#581c87', overlay: 'rgba(88, 28, 135, 0.9)' },
    red: { text: '#991b1b', overlay: 'rgba(153, 27, 27, 0.9)' }
  };

  const theme = themeColors[colorTheme] || themeColors.teal;

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '4rem 1rem' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      <div style={{ position: 'absolute', inset: 0, background: theme.overlay, backdropFilter: 'blur(8px)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexDirection: reverse ? 'row-reverse' : 'row' }}>

          <motion.div initial={{ opacity: 0, x: reverse ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1.5rem', textShadow: '0 4px 15px rgba(0,0,0,0.6)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.1 }}>
              {title}
            </h2>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '24px', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{product.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{product.desc}</p>

              {product.specs && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                  {product.specs.map((spec: string, sIdx: number) => (
                    <li key={sIdx} style={{ color: '#fff', marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontWeight: 500, fontSize: '1.05rem' }}>
                      <span style={{ color: 'var(--primary-orange)', marginTop: '3px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ flex: '1 1 auto', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '1rem 1.5rem', fontSize: '1.05rem', borderRadius: '50px', background: 'var(--primary-orange)', color: '#fff', fontWeight: 800, transition: 'all 0.3s ease', boxShadow: '0 8px 25px rgba(237, 108, 35, 0.4)', textTransform: 'uppercase' }}
                >
                  Cotizar
                </a>
                {(product.catalogFile || showCatalogBtn) && (
                  <button
                    onClick={() => {
                      if (product.catalogFile) {
                        window.open(product.catalogFile, '_blank');
                      } else {
                        const el = document.getElementById('seccion-catalogos');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="btn"
                    style={{ flex: '1 1 auto', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '1rem 1.5rem', fontSize: '1.05rem', borderRadius: '50px', border: '2px solid rgba(255,255,255,0.5)', background: 'transparent', color: '#fff', fontWeight: 800, transition: 'all 0.3s ease', textTransform: 'uppercase' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                  >
                    Catálogo
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9, x: reverse ? -30 : 30 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '100%', paddingBottom: '100%', background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }} />
            <img src={product.img} alt={product.name} style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'contain', zIndex: 2, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', transform: 'scale(1.1)' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ProductGrid = ({ title, desc, bgImage, products, showCatalogBtn = false, colorTheme = 'teal' }: any) => {
  const [expanded, setExpanded] = useState(false);

  const getWhatsAppLink = (productName: string) => {
    const phone = "593980001234";
    const text = encodeURIComponent(`Hola, deseo cotizar el producto: ${productName}.`);
    return `https://wa.me/${phone}?text=${text}`;
  };

  const themeColors: any = {
    teal: { bg: 'linear-gradient(to bottom, #0d6978 0%, #f0f4f8 100%)', text: '#0d6978', overlay: 'rgba(13, 105, 120, 0.85)' },
    orange: { bg: 'linear-gradient(to bottom, #ed6c23 0%, #f9fafb 100%)', text: '#ed6c23', overlay: 'rgba(237, 108, 35, 0.85)' },
    dark: { bg: 'linear-gradient(to bottom, #0b1320 0%, #f0f4f8 100%)', text: '#0b1320', overlay: 'rgba(11, 19, 32, 0.85)' },
    blue: { bg: 'linear-gradient(to bottom, #1e3a8a 0%, #f9fafb 100%)', text: '#1e3a8a', overlay: 'rgba(30, 58, 138, 0.85)' },
    purple: { bg: 'linear-gradient(to bottom, #581c87 0%, #f9fafb 100%)', text: '#581c87', overlay: 'rgba(88, 28, 135, 0.85)' },
    red: { bg: 'linear-gradient(to bottom, #991b1b 0%, #f9fafb 100%)', text: '#991b1b', overlay: 'rgba(153, 27, 27, 0.85)' }
  };

  const theme = themeColors[colorTheme] || themeColors.teal;
  const initialCount = 6;
  const visibleProducts = expanded ? products : products.slice(0, initialCount);
  const hasMore = products.length > initialCount;

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      <div style={{ position: 'absolute', inset: 0, background: theme.overlay, backdropFilter: 'blur(6px)' }} />

      <div style={{ position: 'relative', padding: 'clamp(4rem, 6vw, 6rem) 1rem 1rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>
          <h3 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '1rem', textShadow: '0 4px 15px rgba(0,0,0,0.6)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
          {desc && <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: '1.6', textShadow: '0 2px 10px rgba(0,0,0,0.5)', maxWidth: '700px', margin: '0 auto', padding: '0 1rem' }}>{desc}</p>}
          {showCatalogBtn && (
            <div style={{ marginTop: '2.5rem' }}>
              <button onClick={() => {
                const el = document.getElementById('seccion-catalogos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.8rem 2rem', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontSize: '1rem', borderRadius: '50px', background: '#fff', color: theme.text, boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textTransform: 'uppercase', fontWeight: 900, transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Ver Catálogos
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <div className="container" style={{ padding: 'clamp(3rem, 5vw, 4rem) 1rem clamp(4rem, 6vw, 5rem)', position: 'relative', zIndex: 3 }}>
        <motion.div layout className="kits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {visibleProducts.map((prod: any, idx: number) => (
              <motion.div
                layout
                key={prod.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % initialCount) * 0.1 }}
                style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', border: `1px solid rgba(0,0,0,0.05)` }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative', background: 'radial-gradient(circle, #ffffff 0%, #f4f7f9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #eee' }}>
                  <div style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', background: theme.text, opacity: 0.04, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                  <img src={prod.img} alt={prod.name} style={{ width: '85%', height: '85%', objectFit: 'contain', transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', zIndex: 2 }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08) rotate(-1deg)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: theme.text, marginBottom: '0.8rem', fontWeight: 800, lineHeight: 1.3 }}>{prod.name}</h3>
                  <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.5', flexGrow: 1 }}>{prod.desc}</p>

                  {prod.specs && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', background: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                      {prod.specs.map((spec: string, sIdx: number) => (
                        <li key={sIdx} style={{ fontSize: '0.85rem', color: '#444', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px', fontWeight: 500 }}>
                          <span style={{ color: theme.text, marginTop: '2px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={getWhatsAppLink(prod.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '0.8rem', fontSize: '0.9rem', borderRadius: '10px', background: theme.text, color: '#fff', fontWeight: 800, transition: 'all 0.3s ease', boxShadow: `0 4px 12px ${theme.text}40` }}
                    >
                      COTIZAR
                    </a>
                    {prod.catalogFile && (
                      <a
                        href={prod.catalogFile}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        style={{ flex: 1, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '0.8rem', fontSize: '0.9rem', borderRadius: '10px', border: `2px solid ${theme.text}`, color: theme.text, background: 'transparent', fontWeight: 800, transition: 'all 0.3s ease' }}
                      >
                        Ficha
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '0.8rem 2.5rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 800, cursor: 'pointer', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = theme.text; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >
              {expanded ? 'Mostrar menos' : `Ver ${products.length - initialCount} más`}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};


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

      {/* ── Nuestros Productos Header ── */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 1rem', background: '#0b1320', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '0.8rem' }}>
              Catálogo Oficial
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.1 }}>
              NUESTROS <span style={{ color: 'var(--primary-teal)' }}>PRODUCTOS</span>
            </h2>
            <p style={{ margin: '0 auto', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Equipos de protección contra caídas homologados y certificados bajo normativas internacionales OSHA, ANSI y EN.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Representación Oficial Longdyes ── */}
      <section style={{ padding: '4rem 0 6rem 0', background: 'linear-gradient(135deg, #0b1320, #0a2034)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(237, 108, 35, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(237, 108, 35, 0.15) 0%, transparent 40%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4rem', flexWrap: 'wrap' }}>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 500px' }}
          >
            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
              <img src="/logo_longdyes.png" alt="Longdyes Logo Oficial" style={{ width: '100%', maxWidth: '380px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.4))' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.2rem', justifyContent: 'center' }}>
              <span style={{ color: 'var(--primary-orange)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Representantes en Ecuador
              </span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, marginBottom: '1.2rem', lineHeight: 1.2, textAlign: 'center' }}>
              Representación Oficial de <span style={{ color: 'var(--primary-orange)' }}>Longdyes</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', textAlign: 'center' }}>
              Alturas Global Solutions es el distribuidor y representante oficial de la marca internacional <strong>Longdyes</strong> en el Ecuador. Esto nos permite garantizar equipos certificados de la más alta calidad, respaldo técnico directo de fábrica y garantía original en cada uno de nuestros sistemas anticaídas.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/longdyes" className="btn" style={{ background: 'var(--primary-orange)', color: '#fff', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' }}>
                Ver Proyectos y Galería
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </motion.div>

          {/* Collage de Imágenes Oficiales */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: '1 1 450px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '140px 140px 140px', gap: '1rem', width: '100%' }}>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 15px 30px rgba(0,0,0,0.4)' }}>
                <img src="/galeria-longdyes/trabajo-01.jpeg" alt="Sistemas Longdyes 1" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                <img src="/galeria-longdyes/trabajo-17.jpeg" alt="Sistemas Longdyes 2" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                <img src="/galeria-longdyes/trabajo-21.jpeg" alt="Sistemas Longdyes 3" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ gridColumn: 'span 1', gridRow: 'span 1', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                <img src="/galeria-longdyes/trabajo-04.jpeg" alt="Sistemas Longdyes 4" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 1', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 15px 30px rgba(0,0,0,0.4)' }}>
                <img src="/galeria-longdyes/trabajo-10.jpeg" alt="Sistemas Longdyes 5" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Secciones de Productos --- */}
      <ProductGrid
        title="Líneas de Vida"
        desc="Sistemas de anclaje de alta ingeniería diseñados para garantizar la máxima seguridad en trabajos de altura y cumplir con las normativas internacionales vigentes."
        bgImage="/lineas-de-vida-soluciones.jpeg"
        products={LINEAS_DE_VIDA}
        colorTheme="teal"
        icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M16 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 17c0 -5 5 -7 12 -12" /></svg>}
      />

      <ProductGrid
        title="Puntos de Anclaje"
        desc="Sistemas de anclaje fijos y estructurales para garantizar puntos de conexión seguros en cualquier superficie o estructura, certificados según normativas internacionales."
        bgImage="/puntos-de-anclaje-soluciones.jpeg"
        products={PUNTOS_ANCLAJE}
        colorTheme="orange"
        icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v12m-8 -8a8 8 0 0 0 16 0m-8 4a4 4 0 0 0 4 -4" /><circle cx="12" cy="6" r="3" /></svg>}
      />

      <SingleProductSection
        title="Cascos de Protección"
        bgImage="/epp/cascos de proteccion .png"
        product={CASCOS[0]}
        showCatalogBtn={true}
        colorTheme="dark"
        reverse={false}
      />

      <ProductGrid
        title="Guantes Especializados"
        desc="Guantes de alta resistencia, nitrilo y protección química para resguardar las manos en los entornos más exigentes."
        bgImage="/epp/guantes guantes especiales de nitrilo 3.png"
        products={GUANTES}
        colorTheme="blue"
        icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><line x1="9" y1="17" x2="15" y2="17" /><line x1="9" y1="13" x2="15" y2="13" /></svg>}
      />

      <SingleProductSection
        title="Gafas de Protección"
        bgImage="/epp/gafas de proteccion .png"
        product={GAFAS[0]}
        colorTheme="purple"
        reverse={true}
      />

      <SingleProductSection
        title="Protección Auditiva"
        bgImage="/epp/equipos de proteccion auditiva .png"
        product={AUDITIVA[0]}
        colorTheme="red"
        reverse={false}
      />

      <ProductGrid
        title="Equipos de Protección Personal"
        desc="Complementos esenciales para la seguridad integral del trabajador."
        bgImage="/epp/epp general .png"
        products={[...PRODUCTS, ...EPP_GENERAL_ITEMS]}
        colorTheme="teal"
        icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1.2 0 -2 1.3 -2 2.5c0 1.2 1.1 2.2 2 2.2s2 -1 2 -2.2c0 -1.2 -.8 -2.5 -2 -2.5z" /><path d="M10 10.5l-2.5 3.5l1.5 1l2.5 -3l2.5 3l1.5 -1l-2.5 -3.5" /><path d="M12 8v10" /><path d="M9 21v-3l3 -1l3 1v3" /></svg>}
      />

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
