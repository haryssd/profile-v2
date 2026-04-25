import { useEffect, useRef } from 'react';

interface Star {
  x: number; y: number; r: number;
  o: number; twinkle: number; speed: number;
  color: string;
}
interface ShootingStar {
  x: number; y: number; len: number;
  speed: number; angle: number;
  life: number; decay: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        o: Math.random() * 0.7 + 0.15,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
        color: Math.random() < 0.05 ? '#ffd54f' :
               Math.random() < 0.08 ? '#b0c4ff' : '#e8eaf6',
      }));
    };

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
      });
    };

    const schedule = () => {
      const t = setTimeout(() => { spawnShootingStar(); schedule(); },
        30000 + Math.random() * 20000);
      return t;
    };

    resize();
    window.addEventListener('resize', resize);
    const t1 = setTimeout(spawnShootingStar, 4000);
    const t2 = schedule();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        s.twinkle += s.speed;
        const o = s.o * (0.6 + 0.4 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = o;
        ctx.fill();
      });

      shootingStars = shootingStars.filter(ss => ss.life > 0);
      shootingStars.forEach(ss => {
        const tx = ss.x + Math.cos(ss.angle) * ss.len;
        const ty = ss.y + Math.sin(ss.angle) * ss.len;
        const grad = ctx.createLinearGradient(ss.x, ss.y, tx, ty);
        grad.addColorStop(0, `rgba(255,213,79,0)`);
        grad.addColorStop(0.4, `rgba(255,213,79,${ss.life * 0.6})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.life * 0.9})`);
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = ss.life;
        ctx.stroke();
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.life -= ss.decay;
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
