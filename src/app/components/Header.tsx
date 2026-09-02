'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="header-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <Link href="/">
              <img
                src="/logo_secundario.png"
                alt="Alturas Global Solutions"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="header-actions desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 1vw, 1rem)' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="nav-menu">
              <ul className="nav-links">
                <li><Link href="/">INICIO</Link></li>
                <li className="nav-dropdown-parent">
                  <Link href="/soluciones">SERVICIOS <span className="dropdown-arrow">▾</span></Link>
                  <div className="nav-dropdown">
                    <Link href="/servicios/instalacion-lineas-vida" style={{ fontWeight: 700, fontSize: '103%' }}>Instalación Líneas de Vida Certificadas</Link>
                    <Link href="/servicios/instalacion-puntos-anclaje" style={{ fontWeight: 700, fontSize: '103%' }}>Instalación Puntos de Anclaje</Link>
                    <Link href="/servicios/pintura-en-altura">Servicio de Pintura en Alturas</Link>
                    <Link href="/servicios/hidrolavado-fachadas">Hidrolavado de Fachadas</Link>
                    <Link href="/servicios/mantenimiento-industrial">Mantenimiento Industrial</Link>
                    <Link href="/servicios/capacitacion">Capacitación</Link>
                  </div>
                </li>
                <li><Link href="/kits-altura">PRODUCTOS</Link></li>
                <li><Link href="/trabajos">NUESTROS TRABAJOS</Link></li>
                <li><Link href="/nosotros">NOSOTROS</Link></li>
                <li><Link href="/contacto">CONTÁCTANOS</Link></li>
              </ul>
            </div>
              {/* Eslogan — absoluto, centrado bajo la pastilla, sin afectar el layout */}
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 1.1rem)',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading), Montserrat, sans-serif',
                  fontSize: 'clamp(0.694rem, 0.918vw, 0.816rem)',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  Soluciones Inteligentes en{' '}
                  <span style={{ color: 'var(--primary-orange)', fontWeight: 800 }}>Protección contra Caídas</span>
                </span>
              </div>
            </div>

            <div className="header-cta">
              <Link href="/contacto" className="btn btn-primary header-cta-btn whatsapp-cta">
                <span>CONTÁCTANOS</span>
                <svg className="whatsapp-cta-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <span className="cta-arrow">→</span>
              </Link>
            </div>

            <div className="header-socials" style={{ display: 'flex', gap: 'clamp(0.3rem, 1vw, 1rem)' }}>
              <a href="https://www.facebook.com/share/1Dwm9SuQtj/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-round-btn" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/alturasglobalsolutions?igsh=MTZ6enk2NGVxdmNvcQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="social-round-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@alturasglobalsolutions?_r=1&_t=ZS-972xFgehEiD" target="_blank" rel="noreferrer" className="social-round-btn" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z"></path></svg>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </nav>


      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header" style={{ justifyContent: 'center' }}>
          <img src="/logo_secundario.png" alt="Alturas Global Solutions" className="mobile-drawer-logo" />
        </div>

        <nav className="mobile-drawer-nav">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>Inicio</Link>

          <div className="mobile-nav-accordion">
            <button
              className="mobile-nav-link mobile-nav-accordion-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Servicios
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`mobile-nav-sub ${servicesOpen ? 'active' : ''}`}>
              <Link href="/servicios/instalacion-lineas-vida" className="mobile-nav-sublink" onClick={closeMenu}>Instalación Líneas de Vida Certificadas</Link>
              <Link href="/servicios/instalacion-puntos-anclaje" className="mobile-nav-sublink" onClick={closeMenu}>Instalación Puntos de Anclaje</Link>
              <Link href="/servicios/pintura-en-altura" className="mobile-nav-sublink" onClick={closeMenu}>Servicio de Pintura en Alturas</Link>
              <Link href="/servicios/hidrolavado-fachadas" className="mobile-nav-sublink" onClick={closeMenu}>Hidrolavado de Fachadas</Link>
              <Link href="/servicios/mantenimiento-industrial" className="mobile-nav-sublink" onClick={closeMenu}>Mantenimiento Industrial</Link>
              <Link href="/servicios/capacitacion" className="mobile-nav-sublink" onClick={closeMenu}>Capacitación</Link>
            </div>
          </div>

          <Link href="/nosotros" className="mobile-nav-link" onClick={closeMenu}>Nosotros</Link>
          <Link href="/kits-altura" className="mobile-nav-link" onClick={closeMenu}>Productos</Link>
          <Link href="/longdyes" className="mobile-nav-link" onClick={closeMenu}>Longdyes</Link>
          <Link href="/trabajos" className="mobile-nav-link" onClick={closeMenu}>Nuestros Trabajos</Link>
          <Link href="/contacto" className="mobile-nav-link" onClick={closeMenu}>Contáctanos</Link>
        </nav>

        <div className="mobile-drawer-footer">
          <a href="https://wa.me/593980001234?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n" target="_blank" rel="noreferrer" className="mobile-drawer-cta" onClick={closeMenu}>
            <svg className="whatsapp-cta-icon" viewBox="0 0 16 16" fill="currentColor" style={{ width: 20, height: 20 }}>
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            Contáctanos por WhatsApp
          </a>

          <div className="mobile-drawer-socials">
            <a href="https://www.facebook.com/share/1Dwm9SuQtj/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/alturasglobalsolutions?igsh=MTZ6enk2NGVxdmNvcQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.tiktok.com/@alturasglobalsolutions?_r=1&_t=ZS-972xFgehEiD" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
