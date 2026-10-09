'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [eppOpen, setEppOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/kits-altura') {
      e.preventDefault();
      window.history.pushState(null, '', hash);
      window.dispatchEvent(new Event('hashchange'));
    }
  };

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
    setProductosOpen(false);
    setEppOpen(false);
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
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="nav-menu">
                <ul className="nav-links">
                  <li><Link href="/" className={isActive('/') ? 'active' : ''}>INICIO</Link></li>
                  <li className="nav-dropdown-parent">
                    <Link href="/soluciones" className={isActive('/soluciones') || isActive('/servicios') ? 'active' : ''}>SERVICIOS <span className="dropdown-arrow">▾</span></Link>
                    <div className="nav-dropdown">
                      <Link href="/servicios/instalacion-lineas-vida" style={{ fontWeight: 700, fontSize: '103%' }} className={isActive('/servicios/instalacion-lineas-vida') ? 'active' : ''}>Instalación Líneas de Vida Certificadas</Link>
                      <Link href="/servicios/instalacion-puntos-anclaje" style={{ fontWeight: 700, fontSize: '103%' }} className={isActive('/servicios/instalacion-puntos-anclaje') ? 'active' : ''}>Instalación Puntos de Anclaje</Link>
                      <Link href="/servicios/pintura-en-altura" className={isActive('/servicios/pintura-en-altura') ? 'active' : ''}>Servicio de Pintura en Alturas</Link>
                      <Link href="/servicios/hidrolavado-fachadas" className={isActive('/servicios/hidrolavado-fachadas') ? 'active' : ''}>Hidrolavado de Fachadas</Link>
                      <Link href="/servicios/mantenimiento-industrial" className={isActive('/servicios/mantenimiento-industrial') ? 'active' : ''}>Mantenimiento Industrial</Link>
                      <Link href="/servicios/capacitacion" className={isActive('/servicios/capacitacion') ? 'active' : ''}>Capacitación</Link>
                    </div>
                  </li>
                  <li className="nav-dropdown-parent">
                    <Link href="/kits-altura" className={isActive('/kits-altura') || isActive('/productos') ? 'active' : ''}>PRODUCTOS <span className="dropdown-arrow">▾</span></Link>
                    <div className="nav-dropdown" style={{ minWidth: '320px' }}>
                      <Link href="/kits-altura#linea-de-vida" className={isActive('/kits-altura#linea-de-vida') ? 'active' : ''}>Línea de vida</Link>
                      <Link href="/kits-altura#puntos-de-anclaje" className={isActive('/kits-altura#puntos-de-anclaje') ? 'active' : ''}>Puntos de anclaje</Link>
                      <Link href="/kits-altura#cascos-de-proteccion" className={isActive('/kits-altura#cascos-de-proteccion') ? 'active' : ''}>Cascos de protección</Link>
                      <Link href="/kits-altura#guantes-especializados" className={isActive('/kits-altura#guantes-especializados') ? 'active' : ''}>Guantes especializados</Link>
                      <Link href="/kits-altura#gafas-de-proteccion" className={isActive('/kits-altura#gafas-de-proteccion') ? 'active' : ''}>Gafas de protección</Link>
                      <Link href="/kits-altura#proteccion-auditiva" className={isActive('/kits-altura#proteccion-auditiva') ? 'active' : ''}>Protección auditiva</Link>
                      <div className="nav-subdropdown-parent">
                        <div className="subdropdown-trigger" style={{ padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '0.85rem', color: '#444', textTransform: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s ease' }} onClick={() => window.location.href = '/kits-altura#epp'}>
                          Equipo de protección personal
                          <span style={{ fontSize: '0.65rem', color: '#888' }}>▶</span>
                        </div>
                        <div className="nav-subdropdown">
                          <Link href="/kits-altura#epp" className={isActive('/kits-altura#epp') ? 'active' : ''}>Arnés</Link>
                          <Link href="/kits-altura#epp" className={isActive('/kits-altura#epp') ? 'active' : ''}>Eslinga</Link>
                          <Link href="/kits-altura#epp" className={isActive('/kits-altura#epp') ? 'active' : ''}>Cascos</Link>
                          <Link href="/kits-altura#epp" className={isActive('/kits-altura#epp') ? 'active' : ''}>Kits para trabajos en alturas</Link>
                          <Link href="/kits-altura#mosqueton-acero" onClick={(e) => handleInternalLink(e, '#mosqueton-acero')} className={isActive('/kits-altura#mosqueton-acero') ? 'active' : ''}>Mosquetones</Link>
                          <Link href="/kits-altura#freno-cuerda" onClick={(e) => handleInternalLink(e, '#freno-cuerda')} className={isActive('/kits-altura#freno-cuerda') ? 'active' : ''}>Frenos y accesorios anticaída</Link>
                          <Link href="/kits-altura#epp-gen" onClick={(e) => handleInternalLink(e, '#epp-gen')} className={isActive('/kits-altura#epp-gen') ? 'active' : ''}>Kit de EPP general</Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><Link href="/trabajos" className={isActive('/trabajos') ? 'active' : ''}>NUESTROS TRABAJOS</Link></li>
                  <li><Link href="/nosotros" className={isActive('/nosotros') ? 'active' : ''}>NOSOTROS</Link></li>
                  <li><Link href="/contacto" className={isActive('/contacto') ? 'active' : ''}>CONTÁCTANOS</Link></li>
                </ul>
              </div>
              {/* Eslogan — centrado bajo la pastilla, con position absolute para no romper la alineación de la barra */}
              <div style={{
                position: 'absolute',
                top: '100%',
                marginTop: '10px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading), Montserrat, sans-serif',
                  fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
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
              <a href="https://www.tiktok.com/@alturas.global.so?_r=1&_t=ZS-9AB4at2biQ1" target="_blank" rel="noreferrer" className="social-round-btn" aria-label="TikTok">
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

          <div className="mobile-nav-accordion">
            <button
              className="mobile-nav-link mobile-nav-accordion-btn"
              onClick={() => setProductosOpen(!productosOpen)}
            >
              Productos
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: productosOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`mobile-nav-sub ${productosOpen ? 'active' : ''}`}>
              <Link href="/kits-altura#linea-de-vida" className="mobile-nav-sublink" onClick={closeMenu}>Línea de vida</Link>
              <Link href="/kits-altura#puntos-de-anclaje" className="mobile-nav-sublink" onClick={closeMenu}>Puntos de anclaje</Link>
              <Link href="/kits-altura#cascos-de-proteccion" className="mobile-nav-sublink" onClick={closeMenu}>Cascos de protección</Link>
              <Link href="/kits-altura#guantes-especializados" className="mobile-nav-sublink" onClick={closeMenu}>Guantes especializados</Link>
              <Link href="/kits-altura#gafas-de-proteccion" className="mobile-nav-sublink" onClick={closeMenu}>Gafas de protección</Link>
              <Link href="/kits-altura#proteccion-auditiva" className="mobile-nav-sublink" onClick={closeMenu}>Protección auditiva</Link>

              <div className="mobile-nav-accordion" style={{ paddingLeft: '2rem' }}>
                <button
                  className="mobile-nav-link mobile-nav-accordion-btn"
                  onClick={() => setEppOpen(!eppOpen)}
                  style={{ paddingLeft: 0, paddingRight: '1.5rem', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'none', fontWeight: 500, borderLeft: 'none' }}
                >
                  Equipo de protección personal
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    style={{ transform: eppOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`mobile-nav-sub ${eppOpen ? 'active' : ''}`}>
                  <Link href="/kits-altura#epp" className="mobile-nav-sublink" onClick={closeMenu} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Arnés</Link>
                  <Link href="/kits-altura#epp" className="mobile-nav-sublink" onClick={closeMenu} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Eslinga</Link>
                  <Link href="/kits-altura#epp" className="mobile-nav-sublink" onClick={closeMenu} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Cascos</Link>
                  <Link href="/kits-altura#epp" className="mobile-nav-sublink" onClick={closeMenu} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Kits para trabajos en alturas</Link>
                  <Link href="/kits-altura#mosqueton-acero" className="mobile-nav-sublink" onClick={(e) => { closeMenu(); handleInternalLink(e, '#mosqueton-acero'); }} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Mosquetones</Link>
                  <Link href="/kits-altura#freno-cuerda" className="mobile-nav-sublink" onClick={(e) => { closeMenu(); handleInternalLink(e, '#freno-cuerda'); }} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Frenos y accesorios anticaída</Link>
                  <Link href="/kits-altura#epp-gen" className="mobile-nav-sublink" onClick={(e) => { closeMenu(); handleInternalLink(e, '#epp-gen'); }} style={{ paddingLeft: '1rem', paddingTop: '0.3rem', paddingBottom: '0.3rem' }}>Kit de EPP general</Link>
                </div>
              </div>
            </div>
          </div>

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
            <a href="https://www.tiktok.com/@alturas.global.so?_r=1&_t=ZS-9AB4at2biQ1" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
