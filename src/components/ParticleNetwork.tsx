'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  color?: string;
  particleCount?: number;
  interactive?: boolean;
}

export default function ParticleNetwork({ color = '#1a365d', particleCount = 80, interactive = true }: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = canvas.width;
    let height = canvas.height;

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.baseX = Math.random() * width;
        this.baseY = Math.random() * height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.vx = (Math.random() - 0.5) * 0.3; // Velocidad reducida
        this.vy = (Math.random() - 0.5) * 0.3; // Velocidad reducida
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        // Move the base position naturally
        this.baseX += this.vx;
        this.baseY += this.vy;

        // Bounce base position off walls
        if (this.baseX < 0 || this.baseX > width) this.vx = -this.vx;
        if (this.baseY < 0 || this.baseY > height) this.vy = -this.vy;

        let dxOffset = 0;
        let dyOffset = 0;

        if (interactive) {
          const mdx = this.x - mouse.x;
          const mdy = this.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          const interactionRadius = 160; // Aumentado para que sientan el cursor desde más lejos
          
          if (dist < interactionRadius && dist > 0) {
            const force = (interactionRadius - dist) / interactionRadius;
            dxOffset = (mdx / dist) * force * 150; // Fuerza de repulsión mucho mayor para que se esparzan más
            dyOffset = (mdy / dist) * force * 150;
          }
        }

        // The target position is the base position plus any mouse repulsion offset
        const targetX = this.baseX + dxOffset;
        const targetY = this.baseY + dyOffset;

        // Spring physics: return quickly to target (0.15 is the return speed, higher is faster)
        this.x += (targetX - this.x) * 0.15;
        this.y += (targetY - this.y) * 0.15;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `${color}${Math.floor((1 - dist / 120) * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: interactive ? 'auto' : 'none',
        zIndex: 10
      }}
    />
  );
}
