'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const SERVICES = [
  {
    title: "Instalación de Líneas de Vida",
    id: "instalacion-de-lineas-de-vida",
    icon: "🔗",
    img: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop",
    desc: "Diseñamos, fabricamos e instalamos sistemas de líneas de vida horizontales y verticales, tanto temporales como permanentes. Como representantes oficiales de Longdyes en Ecuador, garantizamos productos de la más alta calidad y resistencia estructural.",
    features: ["Líneas de vida horizontales y verticales", "Puntos de anclaje certificados", "Sistemas temporales y permanentes", "Ingeniería personalizada por proyecto"]
  },
  {
    title: "Pintura en Altura",
    id: "pintura-en-altura",
    icon: "🎨",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    desc: "Servicio especializado de pintura industrial para estructuras en altura, torres de telecomunicaciones, puentes, tanques y fachadas. Utilizamos equipos de acceso por cuerdas y plataformas elevadoras para garantizar acabados de calidad profesional.",
    features: ["Torres y estructuras metálicas", "Fachadas de edificios comerciales", "Tanques industriales y silos", "Señalización aérea de seguridad"]
  },
  {
    title: "Hidrolavado de Fachadas",
    id: "hidrolavado-de-fachadas",
    icon: "💦",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    desc: "Limpieza profesional de fachadas mediante hidrolavado a presión. Restauramos la apariencia original de edificios comerciales, industriales y residenciales, eliminando suciedad acumulada, moho y contaminantes ambientales.",
    features: ["Hidrolavado a alta presión", "Limpieza de vidrios en altura", "Tratamiento anti-hongos", "Mantenimiento preventivo programado"]
  },
  {
    title: "Izaje de Cargas Pesadas",
    id: "izaje-de-cargas-pesadas",
    icon: "🏗️",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    desc: "Operaciones de izaje de cargas pesadas con grúas, polipastos y sistemas de rigging. Planificamos cada maniobra con ingeniería de detalle para garantizar la seguridad del personal y la integridad de los equipos.",
    features: ["Planificación de maniobras críticas", "Grúas y equipos especializados", "Personal rigger certificado", "Supervisión técnica permanente"]
  },
  {
    title: "Mantenimiento Industrial",
    id: "mantenimiento-industrial",
    icon: "🔧",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    desc: "Servicio integral de mantenimiento preventivo y correctivo en instalaciones industriales de difícil acceso. Nuestro equipo técnico trabaja en alturas con total seguridad y eficiencia operativa.",
    features: ["Mantenimiento de estructuras metálicas", "Inspección de soldaduras en altura", "Reparación de cubiertas y techos", "Instalación de equipos en altura"]
  },
  {
    title: "Rescate y Capacitación",
    id: "rescate-y-capacitacion",
    icon: "🛡️",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    desc: "Programas de capacitación técnica en trabajo seguro en alturas y rescate industrial. Formamos a su personal bajo normativas OSHA y ANSI, con prácticas en campo y simulacros de emergencia.",
    features: ["Capacitación en trabajo en alturas", "Simulacros de rescate industrial", "Certificación bajo norma OSHA", "Planes de emergencia personalizados"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } })
};

export default function Soluciones() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = decodeURIComponent(window.location.hash.substring(1));
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Soluciones Integrales
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Nuestros Servicios Especializados
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Proveemos tecnología de vanguardia y equipos certificados internacionalmente. Como representantes de Longdyes, aseguramos la máxima calidad en cada componente.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Servicios
          </div>
        </div>
      </section>

      <section className="bg-light" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              id={service.id}
              className="service-detail-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={idx}
              variants={fadeUp}
            >
              <img src={service.img} alt={service.title} className="service-detail-img" />
              <div className="service-detail-body">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul>
                  {service.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="service-cta-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>¿Necesitas una solución a medida?</h2>
            <p>Nuestro equipo de ingeniería diseña sistemas personalizados para cada proyecto.</p>
            <Link href="/contacto" className="btn btn-primary">SOLICITAR COTIZACIÓN</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
