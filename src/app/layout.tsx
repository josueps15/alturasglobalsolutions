import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Altura Global Solutions | Seguridad en Altura',
  description: 'Sistemas inteligentes y soluciones profesionales en protección contra caídas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="header-wrapper">
          <div className="container">
            <nav className="navbar">
              <div className="logo-container">
                <Link href="/">
                  <img 
                    src="/logo_oficial_v3.png" 
                    alt="Altura Global Solutions" 
                    className="logo-img" 
                  />
                </Link>
              </div>
              
              <div className="nav-menu">
                <ul className="nav-links">
                  <li><Link href="/">INICIO</Link></li>
                  <li className="nav-dropdown-parent">
                    <Link href="/soluciones">SERVICIOS <span className="dropdown-arrow">▾</span></Link>
                    <div className="nav-dropdown">
                      <Link href="/soluciones">Instalación Líneas de Vida</Link>
                      <Link href="/soluciones">Pintura en Altura</Link>
                      <Link href="/soluciones">Hidrolavado de Fachadas</Link>
                      <Link href="/soluciones">Izaje de Cargas Pesadas</Link>
                      <Link href="/soluciones">Mantenimiento Industrial</Link>
                      <Link href="/soluciones">Rescate y Capacitación</Link>
                    </div>
                  </li>
                  <li><Link href="/nosotros">NOSOTROS</Link></li>
                  <li><Link href="/trabajos">NUESTROS TRABAJOS</Link></li>
                  <li><Link href="/contacto">CONTÁCTANOS</Link></li>
                </ul>
              </div>

              <div className="header-cta">
                <Link href="/contacto" className="btn btn-primary header-cta-btn whatsapp-cta">
                  <span>CONTÁCTANOS</span>
                  <svg className="whatsapp-cta-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </nav>
          </div>
        </header>
        
        <main>
          {children}
        </main>

        <footer className="footer-ianasa-style">
          <div className="container footer-content">
            <div className="footer-col-left">
              <img src="/logo_oficial_v3.png" alt="Altura Global Solutions" className="footer-logo" />
              <p>Somos especialistas en Ingeniería Vertical, Líneas de Vida y Trabajos en Altura.</p>
            </div>
            
            <div className="footer-col-middle">
              <h4 className="footer-title">Información</h4>
              <ul className="footer-links">
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/soluciones">Nuestros Servicios</Link></li>
                <li><Link href="/trabajos">Nuestros Trabajos</Link></li>
                <li><Link href="/nosotros">Sobre Nosotros</Link></li>
                <li><Link href="/contacto">Contáctanos</Link></li>
                <li><Link href="/certificaciones">Certificaciones</Link></li>
              </ul>
            </div>
            
            <div className="footer-col-right">
              <h4 className="footer-title">Contáctanos</h4>
              <ul className="footer-contact">
                <li><span className="icon">✉</span> ingkevin1@hotmail.com</li>
                <li><span className="icon">📞</span> +593 99 386 8371</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-links flex gap-4 justify-center flex-wrap">
                <Link href="/terminos">Términos y Condiciones</Link> - 
                <Link href="/reclamaciones">Libro de Reclamaciones</Link> - 
                <Link href="/faq">Preguntas Frecuentes</Link> - 
                <Link href="/privacidad">Políticas de Privacidad</Link>
              </div>
              <div className="footer-social-bar">
                <span className="social-text">Síguenos en nuestras redes sociales:</span>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="whatsapp-float-container">
          <div className="whatsapp-message">
            ¿Interesado en nuestros<br/>servicios? Contáctanos aquí.
          </div>
          <a href="https://wa.me/593993868371" target="_blank" rel="noreferrer" className="whatsapp-btn">
            <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
