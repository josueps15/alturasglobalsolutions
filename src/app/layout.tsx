import type { Metadata } from 'next';
import Link from 'next/link';
import Header from './components/Header';
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
        <Header />
        
        <main className="main-content">
          {children}
        </main>

        <footer className="footer-ianasa-style" style={{ backgroundColor: '#0f172a', backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(13,105,120,0.3) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '100% 100%, 30px 30px', padding: '5rem 0 0 0', position: 'relative', overflow: 'hidden' }}>
          
          <div className="container" style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 2 }}>
            <img src="/logo_oficial_v3.png" alt="Altura Global Solutions" style={{ height: '180px', display: 'inline-block', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.6))' }} />
            <p style={{ maxWidth: '650px', margin: '1.5rem auto 0 auto', color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.7' }}>
              Somos especialistas en Ingeniería Vertical, Líneas de Vida Certificadas y Trabajos en Altura, ofreciendo soluciones inteligentes y seguras.
            </p>
          </div>
          
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', paddingBottom: '4rem', position: 'relative', zIndex: 2 }}>
            <div className="footer-col">
              <h4 className="footer-title" style={{ color: 'var(--primary-orange)', fontSize: '1.3rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Información</h4>
              <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><Link href="/" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Inicio</Link></li>
                <li><Link href="/soluciones" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Nuestros Servicios</Link></li>
                <li><Link href="/trabajos" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Nuestros Trabajos</Link></li>
                <li><Link href="/nosotros" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Sobre Nosotros</Link></li>
                <li><Link href="/certificaciones" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Certificaciones</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title" style={{ color: 'var(--primary-teal)', fontSize: '1.3rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Apartados Importantes</h4>
              <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><Link href="/terminos" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Términos y Condiciones</Link></li>
                <li><Link href="/reclamaciones" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Libro de Reclamaciones</Link></li>
                <li><Link href="/faq" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Preguntas Frecuentes</Link></li>
                <li><Link href="/privacidad" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>Políticas de Privacidad</Link></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-title" style={{ color: 'var(--primary-orange)', fontSize: '1.3rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contáctanos y Redes Sociales</h4>
              <ul className="footer-contact" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ventas@alturasglobalsolutions.com" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary-teal)' }}>✉</span> ventas@alturasglobalsolutions.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/593980001234?text=Hola,%20deseo%20comunicarme%20con%20ustedes" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary-teal)' }}>📞</span> +593 98 000 1234
                  </a>
                </li>
              </ul>
              
              <div className="social-icons" style={{ display: 'flex', gap: '1.2rem' }}>
                <a href="https://www.facebook.com/share/1Dwm9SuQtj/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/alturasglobalsolutions?igsh=MTZ6enk2NGVxdmNvcQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.tiktok.com/@alturasglobalsolutions?_r=1&_t=ZS-972xFgehEiD" target="_blank" rel="noreferrer" aria-label="TikTok" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'background 0.3s' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1.5rem 0' }}>
            <div className="container">
              <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', width: '100%' }}>
                &copy; {new Date().getFullYear()} Altura Global Solutions. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </footer>

        <div className="whatsapp-float-container">
          <div className="whatsapp-message">
            ¿Interesado en nuestros<br/>servicios? Contáctanos aquí.
          </div>
          <a href="https://wa.me/593980001234" target="_blank" rel="noreferrer" className="whatsapp-btn">
            <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
