'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

const SERVICES_DATA: Record<string, any> = {
  "instalacion-lineas-vida": {
    title: "Instalación de Líneas de Vida Certificadas",
    bg: "/lineas-de-vida.png",
    theme: "lineas-vida",
    desc: "Diseñamos, fabricamos e instalamos sistemas de líneas de vida certificadas horizontales y verticales, tanto temporales como permanentes. Como representantes oficiales de Longdyes en Ecuador, garantizamos productos de la más alta calidad y resistencia estructural.",
    longDesc: "Una línea de vida es un sistema de protección contra caídas que permite a los trabajadores desplazarse de forma segura por zonas elevadas mientras permanecen conectados a un punto de anclaje continuo. Nuestros sistemas cumplen con las normativas más exigentes a nivel internacional y son diseñados a medida para cada proyecto, considerando factores como la geometría de la cubierta, el número de usuarios simultáneos y las condiciones climáticas.",
    features: ["Líneas de vida certificadas horizontales y verticales", "Puntos de anclaje certificados", "Sistemas temporales y permanentes", "Ingeniería personalizada por proyecto"],
    types: {
      title: "Tipos de Líneas de Vida",
      items: [
        {
          category: "Verticales",
          sub: [
            { name: "Flexibles", norm: "CE EN 353-2", materials: ["Cable", "Cuerda"], img: "/gallery/linea_vida_5.jpeg" },
            { name: "Rígidas", norm: "CE EN 353-1", materials: ["Cable", "Rail"], img: "/gallery/linea_vida_6.jpeg" }
          ]
        },
        {
          category: "Horizontales",
          sub: [
            { name: "Flexibles", norm: "CE EN 795 C", materials: ["Cable"], img: "/gallery/linea_vida_1.jpeg" },
            { name: "Temporales", norm: "CE EN 795 B", materials: ["Cable", "Textiles"], img: "/gallery/linea_vida_2.jpeg" },
            { name: "Rígidas", norm: "CE EN 795 D", materials: ["Cable", "Rail"], img: "/gallery/linea_vida_4.jpeg" }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Inspección Técnica", desc: "Evaluación del sitio y análisis estructural de la cubierta o estructura." },
      { step: "02", title: "Diseño de Ingeniería", desc: "Proyecto personalizado con planos, cálculos de carga y selección de materiales." },
      { step: "03", title: "Instalación Certificada", desc: "Montaje por técnicos especialistas con pruebas de tracción verificadas." },
      { step: "04", title: "Certificación Final", desc: "Emisión de certificado de conformidad bajo normativas EN 795 y OSHA." }
    ],
    norms: ["EN 795:2012", "EN 353-1", "EN 353-2", "OSHA 1926.502", "ANSI Z359.1"],
    gallery: ["/lineas-de-vida.png", "/gallery/anclaje_1.jpeg", "/gallery/linea_vida_3.jpeg"]
  },
  "instalacion-puntos-anclaje": {
    title: "Instalación de Puntos de Anclaje",
    bg: "/anclaje-industrial.png",
    theme: "anclaje",
    desc: "Instalación certificada de puntos de anclaje estructurales para trabajos en altura. Utilizamos anclajes químicos y mecánicos de alta resistencia, garantizando puntos de conexión seguros y certificados según normativas internacionales.",
    longDesc: "Los puntos de anclaje son elementos estructurales diseñados para soportar las fuerzas generadas durante una caída. Son la base fundamental de cualquier sistema de protección contra caídas. Cada punto debe ser instalado considerando el tipo de sustrato, la carga máxima esperada y el número de trabajadores que lo utilizarán simultáneamente. Realizamos pruebas de tracción con equipos dinamométricos para garantizar la resistencia mínima requerida.",
    features: ["Anclajes químicos y mecánicos", "Pruebas de tracción certificadas", "Diseño según normativa EN 795", "Inspección y recertificación anual"],
    types: {
      title: "Tipos de Puntos de Anclaje",
      items: [
        {
          category: "Por Instalación",
          sub: [
            { name: "Anclaje Químico", norm: "ETA", materials: ["Resinas epóxicas", "Varillas roscadas"] },
            { name: "Anclaje Mecánico", norm: "CE EN 795 A", materials: ["Pernos de expansión", "Placas base"] }
          ]
        },
        {
          category: "Por Aplicación",
          sub: [
            { name: "Fijos Estructurales", norm: "CE EN 795 A", materials: ["Acero inoxidable"] },
            { name: "Portátiles / Temporales", norm: "CE EN 795 B", materials: ["Trípodes", "Contrapesos"] },
            { name: "Para Techos", norm: "CE EN 517", materials: ["Ganchos de seguridad"] }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Análisis Estructural", desc: "Estudio de resistencia del sustrato (concreto, acero, madera) donde se fijará." },
      { step: "02", title: "Selección del Anclaje", desc: "Elección entre anclaje químico o mecánico según carga y material base." },
      { step: "03", title: "Instalación y Torque", desc: "Fijación con torquímetro calibrado y verificación de profundidad." },
      { step: "04", title: "Prueba de Tracción", desc: "Test con equipo dinamométrico certificado. Resultado mínimo: 12 kN por punto." }
    ],
    norms: ["EN 795:2012 Tipo A", "EN 517", "ETA (European Technical Assessment)", "OSHA 1926.502(d)"],
    gallery: ["/anclaje-industrial.png", "/gallery/anclaje_1.jpeg", "/gallery/linea_vida_1.jpeg"]
  },
  "pintura-en-altura": {
    title: "Servicio de Pintura en Altura",
    bg: "/pintura-altura.png",
    theme: "pintura",
    desc: "Servicio especializado de pintura industrial para estructuras en altura, torres de telecomunicaciones, puentes, tanques y fachadas. Utilizamos equipos de acceso por cuerdas y plataformas elevadoras para garantizar acabados de calidad profesional.",
    longDesc: "La pintura industrial en altura requiere técnicas especializadas que combinan el dominio de sistemas anticaídas con el conocimiento de recubrimientos protectores. Nuestro equipo trabaja bajo los estándares IRATA para acceso por cuerdas, asegurando que cada superficie reciba el tratamiento adecuado según su exposición ambiental, tipo de sustrato y requerimientos de durabilidad. Controlamos espesores de película seca (DFT) y adherencia en cada aplicación.",
    features: ["Torres y estructuras metálicas", "Fachadas de edificios comerciales", "Tanques industriales y silos", "Señalización aérea de seguridad"],
    types: {
      title: "Tipos de Pintura Industrial",
      items: [
        {
          category: "Por Tipo de Recubrimiento",
          sub: [
            { name: "Anticorrosivo", norm: "ISO 12944", materials: ["Epóxico", "Zinc"] },
            { name: "Acabado Final", norm: "ISO 8501", materials: ["Poliuretano", "Acrílico"] },
            { name: "Alta Temperatura", norm: "ASTM E119", materials: ["Silicato", "Cerámica"] }
          ]
        },
        {
          category: "Por Método de Acceso",
          sub: [
            { name: "Acceso por Cuerdas", norm: "IRATA Level 1-3", materials: ["Rapel industrial"] },
            { name: "Plataformas Elevadoras", norm: "EN 280", materials: ["Tijera", "Articulada"] }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Preparación de Superficie", desc: "Limpieza, desengrase y tratamiento del sustrato (sandblasting, hidrolavado)." },
      { step: "02", title: "Aplicación de Primer", desc: "Capa base anticorrosiva según especificación técnica del proyecto." },
      { step: "03", title: "Pintado Final", desc: "Aplicación del acabado con espesor controlado mediante medidor de película." },
      { step: "04", title: "Inspección de Calidad", desc: "Medición de espesores (DFT), adherencia y verificación visual del acabado." }
    ],
    norms: ["ISO 12944", "ISO 8501-1", "SSPC-SP", "NACE International", "IRATA"],
    gallery: ["/pintura-altura.png", "/gallery/pintura_1.png", "/gallery/linea_vida_2.jpeg"]
  },
  "hidrolavado-fachadas": {
    title: "Hidrolavado de Fachadas",
    bg: "/hidrolavado-fachadas.png",
    theme: "hidrolavado",
    desc: "Limpieza profesional de fachadas mediante hidrolavado a presión. Restauramos la apariencia original de edificios comerciales, industriales y residenciales, eliminando suciedad acumulada, moho y contaminantes ambientales.",
    longDesc: "El hidrolavado profesional de fachadas es un servicio esencial para mantener la estética y la integridad estructural de los edificios. Utilizamos equipos de presión industrial calibrados según el tipo de superficie a tratar, garantizando una limpieza profunda sin dañar el material base. Nuestro servicio incluye tratamientos preventivos anti-hongos y selladores hidrófugos que prolongan la vida útil de la fachada.",
    features: ["Hidrolavado a alta presión", "Limpieza de vidrios en altura", "Tratamiento anti-hongos", "Mantenimiento preventivo programado"],
    types: {
      title: "Tipos de Hidrolavado",
      items: [
        {
          category: "Por Presión",
          sub: [
            { name: "Baja Presión", norm: "< 500 PSI", materials: ["Superficies delicadas", "Vidrio"] },
            { name: "Media Presión", norm: "500-2000 PSI", materials: ["Fachadas estándar"] },
            { name: "Alta Presión", norm: "> 2000 PSI", materials: ["Concreto industrial"] }
          ]
        },
        {
          category: "Por Tipo de Superficie",
          sub: [
            { name: "Fachadas de Vidrio", norm: "EN 12150", materials: ["Agua desmineralizada"] },
            { name: "Concreto y Ladrillo", norm: "ASTM C150", materials: ["Detergente biodegradable"] }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Diagnóstico de Fachada", desc: "Identificación de tipo de suciedad, material base y estado de la superficie." },
      { step: "02", title: "Protección del Entorno", desc: "Cobertura de áreas sensibles, señalización y control de escorrentía." },
      { step: "03", title: "Lavado a Presión", desc: "Aplicación controlada con equipos industriales y boquillas especializadas." },
      { step: "04", title: "Tratamiento Preventivo", desc: "Aplicación de sellador anti-hongos y protector hidrófugo según el caso." }
    ],
    norms: ["EN 12150 (Vidrio)", "ASTM C150", "EPA Clean Water Act", "Normativa Municipal"],
    gallery: ["/hidrolavado-fachadas.png", "/gallery/hidrolavado_1.png", "/gallery/linea_vida_1.jpeg"]
  },
  "mantenimiento-industrial": {
    title: "Mantenimiento Industrial",
    bg: "/especialista-seguridad.png",
    theme: "mantenimiento",
    desc: "Servicio integral de mantenimiento preventivo y correctivo en instalaciones industriales de difícil acceso. Nuestro equipo técnico trabaja en alturas con total seguridad y eficiencia operativa.",
    longDesc: "El mantenimiento industrial en altura es una actividad crítica que requiere personal altamente capacitado y procedimientos de trabajo seguro rigurosos. Nuestro equipo realiza desde inspecciones rutinarias hasta reparaciones complejas en estructuras metálicas, cubiertas, torres de telecomunicaciones y equipos industriales ubicados en zonas de difícil acceso. Cada intervención se documenta con informes técnicos detallados y registros fotográficos.",
    features: ["Mantenimiento de estructuras metálicas", "Reparación de cubiertas y techos", "Instalación de equipos en altura"],
    types: {
      title: "Tipos de Mantenimiento",
      items: [
        {
          category: "Por Estrategia",
          sub: [
            { name: "Preventivo", norm: "ISO 55000", materials: ["Inspección programada"] },
            { name: "Correctivo", norm: "EN 13306", materials: ["Reparación urgente"] },
            { name: "Predictivo", norm: "ISO 17359", materials: ["Monitoreo de condición"] }
          ]
        },
        {
          category: "Por Zona de Trabajo",
          sub: [
            { name: "Cubiertas y Techos", norm: "OSHA 1926", materials: ["Reparación de membranas"] },
            { name: "Torres y Antenas", norm: "TIA-222", materials: ["Telecomunicaciones"] }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Inspección Inicial", desc: "Evaluación completa del estado de la estructura y diagnóstico técnico." },
      { step: "02", title: "Plan de Trabajo", desc: "Cronograma, permisos, análisis de riesgo y procedimiento de trabajo seguro." },
      { step: "03", title: "Ejecución", desc: "Trabajos de reparación, refuerzo o reemplazo con técnicos certificados." },
      { step: "04", title: "Informe y Seguimiento", desc: "Documentación fotográfica, informe técnico y recomendaciones futuras." }
    ],
    norms: ["ISO 55000", "EN 13306", "OSHA 1926", "TIA-222-H", "ISO 17359"],
    gallery: ["/especialista-seguridad.png", "/gallery/linea_vida_2.jpeg", "/gallery/capacitacion_china_1.jpeg"]
  },
  "capacitacion": {
    title: "Capacitación",
    bg: "/capacitacion_altura.png",
    theme: "capacitacion",
    desc: "Programas integrales de capacitación técnica en trabajo seguro en alturas. Formamos a su personal con instructores certificados, combinando teoría normativa y prácticas intensivas en escenarios reales para prevenir accidentes laborales y mejorar el rendimiento.",
    longDesc: "La capacitación en trabajo en alturas es un requisito legal y una necesidad operativa para toda empresa que realice actividades por encima de 1.8 metros. Nuestros programas están diseñados por ingenieros y técnicos con experiencia real en campo, combinando fundamentos teóricos de normativa internacional con ejercicios prácticos en escenarios controlados. Los participantes aprenden a identificar riesgos, utilizar correctamente los EPP anticaídas y ejecutar procedimientos de rescate de emergencia.",
    features: ["Certificación en trabajo seguro en alturas", "Manejo de equipos de protección contra caídas", "Normativa nacional e internacional OSHA/ANSI", "Formación de brigadas de emergencia"],
    types: {
      title: "Programas de Formación",
      items: [
        {
          category: "Nivel de Certificación",
          sub: [
            { name: "Nivel Básico", norm: "8 horas", materials: ["Teoría + Práctica"] },
            { name: "Nivel Intermedio", norm: "16 horas", materials: ["Rescate básico", "Evacuación"] },
            { name: "Nivel Avanzado", norm: "40 horas", materials: ["Rescate técnico", "Supervisión"] }
          ]
        },
        {
          category: "Especialidades",
          sub: [
            { name: "Rescate en Espacios Confinados", norm: "OSHA 1910.146", materials: ["Técnicas de extracción"] },
            { name: "Uso de EPP Anticaídas", norm: "ANSI Z359", materials: ["Arnés", "Líneas de vida"] }
          ]
        }
      ]
    },
    process: [
      { step: "01", title: "Diagnóstico de Necesidades", desc: "Análisis de actividades de riesgo del personal para definir contenido." },
      { step: "02", title: "Formación Teórica", desc: "Normativa OSHA, ANSI, legislación nacional. Evaluación escrita." },
      { step: "03", title: "Práctica en Campo", desc: "Simulacros reales con equipos profesionales y escenarios controlados." },
      { step: "04", title: "Certificación", desc: "Emisión de certificados individuales con validez internacional." }
    ],
    norms: ["OSHA 1926.503", "ANSI Z359.2", "Resolución 1409 (Colombia)", "NOM-009-STPS (México)", "Decreto 2393 (Ecuador)"],
    gallery: ["/capacitacion_altura.png", "/gallery/capacitacion_china_1.jpeg", "/gallery/linea_vida_1.jpeg"]
  }
};

/* Theme mappings for the detail page */
const THEME_COLORS: Record<string, { bg: string; accent: string; accentDark: string; textDark: string; textMuted: string; isDark: boolean }> = {
  "lineas-vida":    { bg: "linear-gradient(135deg, #f0f9fa 0%, #e8f4f6 100%)", accent: "#0d6978", accentDark: "#0a5260", textDark: "#1a2332", textMuted: "#4b5563", isDark: false },
  "anclaje":        { bg: "linear-gradient(160deg, #0b1320 0%, #142440 100%)", accent: "#ed6c23", accentDark: "#d45a10", textDark: "#ffffff", textMuted: "#b0bec5", isDark: true },
  "pintura":        { bg: "linear-gradient(135deg, #fff8f0 0%, #ffe8d3 100%)", accent: "#ed6c23", accentDark: "#c25a1a", textDark: "#3a2a1a", textMuted: "#5a4a3a", isDark: false },
  "hidrolavado":    { bg: "linear-gradient(160deg, #e8f6fc 0%, #bfe5f4 100%)", accent: "#1a8bb5", accentDark: "#0d6978", textDark: "#1a3a4a", textMuted: "#3a5a6a", isDark: false },
  "mantenimiento":  { bg: "linear-gradient(160deg, #1a1a2e 0%, #0f3460 100%)", accent: "#4fc3f7", accentDark: "#29b6f6", textDark: "#ffffff", textMuted: "#90a4ae", isDark: true },
  "capacitacion":   { bg: "linear-gradient(135deg, #f0faf5 0%, #d4efe3 100%)", accent: "#2e7d5a", accentDark: "#1b5e3c", textDark: "#1a332a", textMuted: "#3a5a4a", isDark: false },
};

export default function ServicioDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const service = SERVICES_DATA[resolvedParams.id];

  if (!service) {
    notFound();
  }

  const theme = THEME_COLORS[service.theme] || THEME_COLORS["lineas-vida"];

  return (
    <>
      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(11, 19, 32, 0.85), rgba(11, 19, 32, 0.95)), url(${service.bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="page-hero-subtitle">Especialidad</span>
            <h1 className="page-hero-title">{service.title}</h1>
            <div className="page-hero-breadcrumb">
              <Link href="/">Inicio</Link><span>/</span><Link href="/soluciones">Servicios</Link><span>/</span>{service.title}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={`service-detail-main service-theme-${service.theme}`} style={{ background: theme.bg, padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="service-section-deco service-section-deco-1" />
        <div className="service-section-deco service-section-deco-2" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Description + Image */}
          <div className="service-full-layout">
            <motion.div className="service-full-content" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="servicio-detalle-titulo" style={{ color: theme.textDark, fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginBottom: '1.5rem' }}>Descripción del Servicio</h2>
              <p className="servicio-detalle-desc" style={{ color: theme.textMuted, fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.5rem', textAlign: 'justify' }}>{service.desc}</p>
              {service.longDesc && (
                <p className="servicio-detalle-desc" style={{ color: theme.textMuted, fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', textAlign: 'justify' }}>{service.longDesc}</p>
              )}
              <h3 style={{ color: theme.accent, fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.2rem' }}>Beneficios y Características</h3>
              <ul>
                {service.features.map((f: string, i: number) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="service-full-img" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="service-full-img-inner">
                <img src={service.bg} alt={service.title} />
              </div>
            </motion.div>
          </div>

          {/* Types Diagram */}
          {service.types && (
            <motion.div className="service-types-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="service-types-title">{service.types.title}</h3>
              <div className="service-types-grid">
                {service.types.items.map((cat: any, ci: number) => (
                  <div key={ci} className="service-type-category">
                    <div className="service-type-category-header">
                      <span className="service-type-category-name">{cat.category}</span>
                    </div>
                    <div className="service-type-cards">
                      {cat.sub.map((sub: any, si: number) => (
                        <motion.div key={si} className="service-type-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.15 + si * 0.1 }}>
                          {sub.img && (
                            <img src={sub.img} alt={sub.name} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(0,0,0,0.05)' }} />
                          )}
                          <span className="service-type-card-name">{sub.name}</span>
                          <span className="service-type-card-norm">{sub.norm}</span>
                          <div className="service-type-card-materials">
                            {sub.materials.map((m: string, mi: number) => (
                              <span key={mi} className="service-type-material-tag">{m}</span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Process Steps */}
          {service.process && (
            <motion.div className="service-process-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h3 className="service-process-title">Nuestro Proceso</h3>
              <div className="service-process-grid">
                {service.process.map((p: any, pi: number) => (
                  <motion.div key={pi} className="service-process-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: pi * 0.12 }}>
                    <span className="service-process-step">{p.step}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Normative Badges */}
          {service.norms && (
            <motion.div className="service-norms-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h4 className="service-norms-label">Normativas Aplicables</h4>
              <div className="service-norms-badges">
                {service.norms.map((n: string, ni: number) => (
                  <span key={ni} className="service-norm-badge">{n}</span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          {service.gallery && service.gallery.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: '4rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: theme.textDark, marginBottom: '2rem', textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Galería de Proyectos</h3>
              <div className="responsive-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {service.gallery.map((img: string, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ overflow: 'hidden', borderRadius: '16px', boxShadow: theme.isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.08)', border: theme.isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)' }}>
                    <img src={img} alt={`${service.title} - Imagen ${i + 1}`} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <div style={{ textAlign: 'center', marginTop: '4rem', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {resolvedParams.id === 'instalacion-lineas-vida' && (
              <Link href="/certificaciones" className="btn service-full-btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderColor: theme.accent, color: theme.accent }}>
                VER CERTIFICADOS
              </Link>
            )}
            <a href={`https://wa.me/593980001234?text=Hola,%20deseo%20cotizar%20el%20servicio:%20${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="btn btn-primary service-full-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              COTIZAR ESTE SERVICIO
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
