'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contacto() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.span className="page-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Estamos para ayudarte
          </motion.span>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Contáctanos Hoy
          </motion.h1>
          <motion.p className="page-hero-desc" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            ¿Tienes un proyecto en mente? Nuestro equipo de ingeniería está listo para brindarte la mejor solución en seguridad industrial.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <Link href="/">Inicio</Link><span>/</span>Contáctanos
          </div>
        </div>
      </section>

      <section className="bg-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Info Card */}
            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Información de Contacto</h3>

              <div className="contact-item">
                <div className="contact-item-icon">👤</div>
                <div className="contact-item-text">
                  <strong>Gerencia de Operaciones</strong>
                  <p>Ing. Kevin Bravo</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <strong>Teléfono / WhatsApp</strong>
                  <a href="tel:+593993868371">+593 99 386 8371</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">✉️</div>
                <div className="contact-item-text">
                  <strong>Correo Electrónico</strong>
                  <a href="mailto:ingkevin1@hotmail.com">ingkevin1@hotmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <strong>Ubicación Central</strong>
                  <p>Quito, Ecuador</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Cobertura de servicio a nivel nacional</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div className="contact-item-text">
                  <strong>Horario de Atención</strong>
                  <p>Lunes a Viernes: 8:00 - 18:00</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Sábados: 8:00 - 13:00</p>
                </div>
              </div>

              <a href="https://wa.me/593993868371" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                💬 ABRIR CHAT DE WHATSAPP
              </a>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Envíanos tu requerimiento</h3>
              <p>Completa el formulario y te responderemos en menos de 24 horas.</p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Nombre / Empresa *</label>
                    <input id="contact-name" type="text" placeholder="Tu nombre o empresa" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Teléfono *</label>
                    <input id="contact-phone" type="tel" placeholder="Tu teléfono" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Correo Electrónico</label>
                  <input id="contact-email" type="email" placeholder="tu@email.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-service">Servicio de Interés</label>
                  <select id="contact-service">
                    <option>Cotización de Líneas de Vida Longdyes</option>
                    <option>Certificación de Sistemas Existentes</option>
                    <option>Pintura en Altura</option>
                    <option>Hidrolavado de Fachadas</option>
                    <option>Izaje de Cargas Pesadas</option>
                    <option>Rescate y Capacitación</option>
                    <option>Mantenimiento Industrial</option>
                    <option>Asesoría en Ingeniería</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Mensaje</label>
                  <textarea id="contact-message" rows={5} placeholder="Describe tu proyecto o requerimiento..." style={{ resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" className="btn-submit">ENVIAR MENSAJE</button>
              </form>
            </motion.div>
          </div>

          {/* Google Maps Section */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Nuestra <span className="text-orange">Ubicación</span></h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036280886!2d-78.65940759726562!3d-0.22985009999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Altura Global Solutions - Quito, Ecuador"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
