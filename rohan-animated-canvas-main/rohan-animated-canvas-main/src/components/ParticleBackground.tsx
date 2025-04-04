
import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const initParticles = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    particles.current = [];

    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, 255, 0.7)`,
      });
    }
  };

  const drawParticles = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }

      // Draw connections
      particles.current.forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1200})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });
  };

  const animate = () => {
    if (!canvasRef.current) return;
    drawParticles(canvasRef.current);
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(canvas);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
