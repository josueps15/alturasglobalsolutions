'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const SERVICES = [
  {
    title: "Instalación de Líneas de Vida Certificadas",
    id: "instalacion-lineas-vida",
    img: "/lineas-de-vida-soluciones.jpeg",
    desc: "Diseñamos, fabricamos e instalamos sistemas de líneas de vida certificadas horizontales y verticales, tanto temporales como permanentes. Como representantes oficiales de Longdyes en Ecuador, garantizamos productos de la más alta calidad y resistencia estructural.",
    features: ["Líneas de vida certificadas horizontales y verticales", "Puntos de anclaje certificados", "Sistemas temporales y permanentes", "Ingeniería personalizada por proyecto"],
    theme: "lineas-vida"
  },
  {
    title: "Instalación de Puntos de Anclaje",
    id: "instalacion-puntos-anclaje",
    img: "/puntos-de-anclaje-soluciones.jpeg",
    desc: "Instalación certificada de puntos de anclaje estructurales para trabajos en altura. Utilizamos anclajes químicos y mecánicos de alta resistencia, garantizando puntos de conexión seguros y certificados según normativas internacionales.",
    features: ["Anclajes químicos y mecánicos", "Pruebas de tracción certificadas", "Diseño según normativa EN 795", "Inspección y recertificación anual"],
    theme: "anclaje"
  },
  {
    title: "Servicio de Pintura en Altura",
    id: "pintura-en-altura",
    img: "/pintura-altura.png",
    desc: "Servicio especializado de pintura industrial para estructuras en altura, torres de telecomunicaciones, puentes, tanques y fachadas. Utilizamos equipos de acceso por cuerdas y plataformas elevadoras para garantizar acabados de calidad profesional.",
    features: ["Torres y estructuras metálicas", "Fachadas de edificios comerciales", "Tanques industriales y silos", "Señalización aérea de seguridad"],
    theme: "pintura"
  },
  {
    title: "Hidrolavado de Fachadas",
    id: "hidrolavado-fachadas",
    img: "/hidrolavado-fachadas.png",
    desc: "Limpieza profesional de fachadas mediante hidrolavado a presión. Restauramos la apariencia original de edificios comerciales, industriales y residenciales, eliminando suciedad acumulada, moho y contaminantes ambientales.",
    features: ["Hidrolavado a alta presión", "Limpieza de vidrios en altura", "Tratamiento anti-hongos", "Mantenimiento preventivo programado"],
    theme: "hidrolavado"
  },
  {
    title: "Mantenimiento Industrial",
    id: "mantenimiento-industrial",
    img: "/especialista-seguridad.png",
    desc: "Servicio integral de mantenimiento preventivo y correctivo en instalaciones industriales de difícil acceso. Nuestro equipo técnico trabaja en alturas con total seguridad y eficiencia operativa.",
    features: ["Mantenimiento de estructuras metálicas", "Reparación de cubiertas y techos", "Instalación de equipos en altura"],
    theme: "mantenimiento"
  },
  {
    title: "Capacitación",
    id: "capacitacion",
    img: "/capacitacion_altura.png",
    desc: "Programas integrales de capacitación técnica en trabajo seguro en alturas. Formamos a su personal con instructores certificados, combinando teoría normativa y prácticas intensivas en escenarios reales para prevenir accidentes laborales.",
    features: ["Certificación en trabajo seguro en alturas", "Manejo de equipos de protección contra caídas", "Normativa nacional e internacional OSHA/ANSI", "Formación de brigadas de emergencia"],
    theme: "capacitacion"
  },
  {
    title: "Inspección Técnica con Drone",
    id: "inspeccion-tecnica-drone",
    img: "/foto-inspeccion-drone.png",
    desc: "Ofrecemos servicios de inspección técnica aérea mediante drones industriales equipados con cámaras de alta resolución. Ideal para estructuras de gran altura, cubiertas y espacios de difícil acceso, reduciendo riesgos y costos operativos.",
    features: ["Inspección visual de alta resolución", "Evaluación de estructuras en altura", "Reducción de riesgos laborales", "Reportes técnicos detallados"],
    theme: "drone"
  }
];

const ICONS: Record<string, React.ReactNode> = {
  "lineas-vida": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M8 11h8" /><path d="M12 7v8" />
    </svg>
  ),
  "anclaje": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
  "pintura": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M12 22V8M5 8h14M6 4h12a2 2 0 0 1 2 2v2H4V6a2 2 0 0 1 2-2z" /><path d="M12 8V2" />
    </svg>
  ),
  "hidrolavado": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
  "mantenimiento": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "capacitacion": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  "drone": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="service-section-icon">
      <path d="M5 5L9 9M19 5L15 9M5 19L9 15M19 19L15 15" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  )
};

const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } } };

export default function Soluciones() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = decodeURIComponent(window.location.hash.substring(1));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, []);

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: 'linear-gradient(rgba(11, 19, 32, 0.8), rgba(11, 19, 32, 0.95)), url(/lineas-de-vida.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Soluciones Integrales</motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>Nuestros Servicios Especializados</motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Proveemos tecnología de vanguardia y equipos certificados internacionalmente. Como representantes de Longdyes, aseguramos la máxima calidad en cada componente.
          </motion.p>
          <div className="page-hero-breadcrumb"><Link href="/">Inicio</Link><span>/</span>Servicios</div>
        </div>
      </section>

      {SERVICES.map((service, idx) => {
        const isReverse = idx % 2 !== 0;
        return (
          <section key={service.id} id={service.id} className={`service-full-section service-theme-${service.theme}`}>
            <div className="service-section-deco service-section-deco-1" />
            <div className="service-section-deco service-section-deco-2" />
            <div className="container">
              <motion.div className="service-section-number" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {String(idx + 1).padStart(2, '0')}
              </motion.div>
              <div className={`service-full-layout ${isReverse ? 'reverse' : ''}`}>
                <motion.div className="service-full-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={isReverse ? fadeInRight : fadeInLeft}>
                  <div className="service-section-icon-wrapper">{ICONS[service.theme]}</div>
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <ul>
                    {service.features.map((f, i) => (
                      <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}>{f}</motion.li>
                    ))}
                  </ul>
                  <div className="service-full-actions">
                    <Link href={`/servicios/${service.id}`} className="btn btn-primary service-full-btn">Más Información</Link>
                    <a href={`https://wa.me/593980001234?text=Hola,%20deseo%20cotizar%20el%20servicio:%20${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="btn service-full-btn-outline">Cotizar</a>
                  </div>
                </motion.div>
                <motion.div className="service-full-img" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}>
                  <div className="service-full-img-inner">
                    <img src={service.img} alt={service.title} />
                    <div className="service-full-img-overlay" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="service-final-cta" style={{ backgroundImage: 'linear-gradient(rgba(13, 105, 120, 0.85), rgba(13, 105, 120, 0.95)), url(/cta_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="service-final-cta-deco" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
            <h2>¿Necesitas una solución a medida?</h2>
            <p>Nuestro equipo de ingeniería diseña sistemas personalizados para cada proyecto. Contáctanos para una consulta sin compromiso.</p>
            <a href="https://wa.me/593980001234?text=Hola,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20de%20sus%20soluciones" target="_blank" rel="noreferrer" className="btn btn-primary service-full-btn">SOLICITAR COTIZACIÓN</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
