'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const VALUES = [
  { icon: '🛡️', title: 'Seguridad Primero', desc: 'La protección de cada trabajador es nuestra prioridad absoluta en cada proyecto que ejecutamos.' },
  { icon: '⚙️', title: 'Ingeniería de Precisión', desc: 'Cada sistema es diseñado con cálculos estructurales y validado bajo normativas internacionales.' },
  { icon: '🤝', title: 'Compromiso Total', desc: 'Acompañamos a nuestros clientes desde la consultoría inicial hasta la certificación final del sistema.' },
  { icon: '📋', title: 'Normativa OSHA/ANSI', desc: 'Cumplimos con los estándares más exigentes de la industria a nivel mundial.' },
  { icon: '🌎', title: 'Cobertura Nacional', desc: 'Operamos en todo Ecuador con equipos móviles y soporte técnico permanente.' },
  { icon: '🏆', title: 'Respaldo Longdyes', desc: 'Somos los únicos representantes autorizados de la marca líder mundial en protección contra caídas.' }
];

export default function Nosotros() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Conócenos
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Sobre Altura Global Solutions
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Más de 15 años de experiencia protegiendo la vida de los trabajadores en la industria ecuatoriana.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Nosotros
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="about-section bg-white">
        <div className="container">
          <motion.div className="about-grid" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="about-text-block">
              <span style={{ color: 'var(--primary-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '0.75rem' }}>Nuestra Historia</span>
              <h2>ESPECIALISTAS EN <span className="text-orange">SEGURIDAD INDUSTRIAL</span></h2>
              <p>
                En <strong>Altura Global Solutions</strong> entendemos que la seguridad no es negociable. Somos una empresa ecuatoriana fundada con la misión de salvaguardar la vida de los trabajadores en la industria, construcción y telecomunicaciones.
              </p>
              <p>
                Liderados por el <strong>Ing. Kevin Bravo</strong>, nuestro equipo técnico cuenta con más de 15 años de experiencia acumulada en la ingeniería de protección contra caídas, abarcando desde el diseño hasta la certificación final de cada sistema instalado.
              </p>
              <p>
                Como representantes autorizados de <strong>Longdyes</strong> en Ecuador, importamos e instalamos sistemas anticaídas de la más alta resistencia estructural, cumpliendo con las exigencias de normativas OSHA y ANSI.
              </p>
            </div>
            <div className="about-img-wrapper">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop" alt="Equipo de ingeniería en campo" />
            </div>
          </motion.div>

          {/* Misión y Visión */}
          <motion.div className="about-grid reverse" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="about-img-wrapper">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop" alt="Operaciones en altura" />
            </div>
            <div className="about-text-block">
              <span style={{ color: 'var(--primary-orange)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '0.75rem' }}>Misión y Visión</span>
              <h2>PROTEGIENDO VIDAS CON <span className="text-orange">TECNOLOGÍA</span></h2>
              <p>
                <strong>Misión:</strong> Proveer soluciones integrales de seguridad en altura con los más altos estándares de calidad, protegiendo la vida de cada trabajador con ingeniería de precisión y equipos certificados internacionalmente.
              </p>
              <p>
                <strong>Visión:</strong> Ser la empresa líder en protección contra caídas en la región andina, reconocida por nuestra excelencia técnica, innovación y compromiso inquebrantable con la seguridad industrial.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-title-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ display: 'inline-block' }}>NUESTROS <span className="text-orange">VALORES</span></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="value-card-icon">{val.icon}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Líder / Equipo */}
      <section className="team-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ display: 'inline-block' }}>NUESTRO <span className="text-orange">LÍDER</span></h2>
          </div>
          <motion.div
            className="team-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Ing. Kevin Bravo" />
            <div className="team-card-body">
              <h3>Ing. Kevin Bravo</h3>
              <span>Gerente de Operaciones</span>
              <p>Ingeniero con más de 15 años de experiencia en sistemas de protección contra caídas, certificado en normativas OSHA y ANSI. Líder en la implementación de soluciones de seguridad a nivel industrial en Ecuador.</p>
            </div>
          </motion.div>

          <div style={{ marginTop: '4rem' }}>
            <Link href="/contacto" className="btn btn-primary">TRABAJA CON NOSOTROS</Link>
          </div>
        </div>
      </section>
    </>
  );
}
