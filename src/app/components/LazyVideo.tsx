'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, VideoHTMLAttributes } from 'react';

type LazyVideoProps = {
  /** Archivo para pantallas grandes (se usa también si no hay versión móvil). */
  src: string;
  /** Versión más liviana para teléfonos. Opcional. */
  mobileSrc?: string;
  poster?: string;
  className?: string;
  style?: CSSProperties;
  /** Distancia a la que empieza a cargar antes de entrar en pantalla. */
  rootMargin?: string;
} & Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'poster' | 'preload' | 'autoPlay' | 'loop' | 'muted' | 'playsInline' | 'className' | 'style'>;

/**
 * Video decorativo que no se descarga hasta que el usuario se acerca a él.
 *
 * Mientras no está cerca se muestra el póster (su primer fotograma), así que
 * la página se ve exactamente igual desde el primer instante, pero se ahorran
 * varios MB de datos móviles. Al alejarse se pausa para no gastar batería.
 */
export default function LazyVideo({
  src,
  mobileSrc,
  poster,
  className,
  style,
  rootMargin = '300px 0px',
  ...rest
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [chosenSrc, setChosenSrc] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  // Elige el archivo más liviano en teléfonos.
  useEffect(() => {
    if (!mobileSrc) {
      setChosenSrc(src);
      return;
    }
    const query = window.matchMedia('(max-width: 768px)');
    const update = () => setChosenSrc(query.matches ? mobileSrc : src);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, [src, mobileSrc]);

  // Solo empieza a cargar cuando se acerca a la pantalla.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
          } else {
            video.pause();
          }
        }
      },
      { rootMargin }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin]);

  // Reproduce en cuanto hay archivo y el video está cerca.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !started || !chosenSrc) return;
    video.play().catch(() => {});
  }, [started, chosenSrc]);

  return (
    <video
      ref={videoRef}
      src={started ? chosenSrc ?? undefined : undefined}
      poster={poster}
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={style}
      suppressHydrationWarning
      {...rest}
    />
  );
}
