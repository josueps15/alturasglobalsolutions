'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mathematical validation for Ecuadorian Cedula (Modulo 10)
const validarCedula = (cedula: string) => {
  if (cedula.length !== 10) return false;
  const digitoRegion = parseInt(cedula.substring(0, 2), 10);
  if (digitoRegion < 1 || digitoRegion > 24) return false;
  
  const ultimoDigito = parseInt(cedula.substring(9, 10), 10);
  let suma = 0;
  
  for (let i = 0; i < 9; i++) {
    let valor = parseInt(cedula.charAt(i), 10);
    if (i % 2 === 0) {
      valor = valor * 2;
      if (valor > 9) valor = valor - 9;
    }
    suma += valor;
  }
  
  const decenaSuperior = Math.ceil(suma / 10) * 10;
  const digitoValidador = decenaSuperior - suma;
  
  return (digitoValidador === 10 ? 0 : digitoValidador) === ultimoDigito;
};

export default function ReclamacionesPage() {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errorCedula, setErrorCedula] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorCedula('');
    setIsSubmitting(true);

    if (!/^\d{10}$/.test(cedula)) {
      setErrorCedula('La cedula debe contener exactamente 10 digitos numericos.');
      setIsSubmitting(false);
      return;
    }

    if (!validarCedula(cedula)) {
      setErrorCedula('El numero de cedula ingresado no es valido (Registro Civil).');
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 800));

    const phoneNumber = '593980001234';
    const text = `*NUEVO RECLAMO - LIBRO VIRTUAL*\n\n` +
      `*Cedula Verificada:* ${cedula}\n` +
      `*Nombre:* ${nombre}\n` +
      `*Reclamo:* ${mensaje}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    setIsSubmitting(false);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="legal-page-wrapper" style={{ backgroundImage: 'url(/bg-reclamaciones.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="legal-page-container">
        <div className="legal-header">
          <div className="legal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--primary-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <h1>Libro de Reclamaciones Virtual</h1>
          <p>Conforme a las normativas de proteccion al consumidor</p>
        </div>
        <div className="legal-content">
          <section>
            <h2>
              <span className="section-number">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              Verificacion de Identidad
            </h2>
            <p>
              Para garantizar la veracidad de los reclamos y evitar suplantacion de identidad, 
              nuestro sistema verifica que su numero de cedula sea valido segun los parametros del Registro Civil Ecuatoriano.
              Complete el formulario a continuacion para registrar su reclamo de manera oficial.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="legal-form">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.8rem', padding: '1rem', background: 'rgba(13, 105, 120, 0.08)', border: '1px solid rgba(13, 105, 120, 0.15)', borderRadius: '12px' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary-teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Los campos marcados con (*) son obligatorios. Su cedula sera validada automaticamente.
              </span>
            </div>

            <div className="form-field">
              <label>Numero de Cedula de Identidad *</label>
              <input 
                type="text" 
                value={cedula}
                onChange={(e) => setCedula(e.target.value.replace(/\D/g, '').substring(0, 10))}
                placeholder="Ej: 1700000000"
                required 
              />
              {errorCedula && (
                <div className="form-error">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  {errorCedula}
                </div>
              )}
            </div>

            <div className="form-field">
              <label>Nombres Completos *</label>
              <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombres y Apellidos"
                required 
              />
            </div>

            <div className="form-field">
              <label>Detalle de la Queja o Reclamo *</label>
              <textarea 
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={5}
                placeholder="Describa el inconveniente de manera detallada..."
                required 
              />
            </div>

            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                borderRadius: '12px',
                cursor: isSubmitting ? 'wait' : 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase' as const,
                color: '#fff',
                background: isSubmitting
                  ? 'rgba(255,255,255,0.1)'
                  : 'linear-gradient(135deg, var(--primary-orange), #ff8c42)',
                boxShadow: isSubmitting ? 'none' : '0 8px 25px rgba(237, 108, 35, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
            >
              {isSubmitting ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Verificando Identidad...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Validar Identidad y Enviar por WhatsApp
                </>
              )}
            </motion.button>
          </form>

          <div className="legal-cta">
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/593980001234?text=Hola,%20tengo%20una%20consulta%20sobre%20reclamos"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Contactar por WhatsApp
              </a>
              <Link href="/" className="btn btn-outline">Volver al Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
