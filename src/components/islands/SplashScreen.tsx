import { useState, useEffect } from 'react';

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 3000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 16);

    const fadeTimer = setTimeout(() => setFading(true), 4500);
    const doneTimer = setTimeout(onComplete, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000005',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Stars bg hint */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(30,0,80,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', position: 'relative' }}>
        <h1 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(32px, 6vw, 72px)',
          fontWeight: 300,
          color: '#e8eaf6',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '12px',
        }}>
          Haris Daniel Noh
        </h1>
        <div style={{
          width: '40px', height: '2px',
          background: 'linear-gradient(to right, #ffd54f, rgba(255,213,79,0.3))',
          margin: '0 auto 20px',
        }} />
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(13px, 2vw, 16px)',
          fontWeight: 300,
          color: '#90a4ae',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          Full-Stack Software Engineer
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: '48px', width: '200px', textAlign: 'center' }}>
        <div style={{
          width: '100%', height: '1px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '1px',
          overflow: 'hidden',
          marginBottom: '12px',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(to right, #ffd54f, rgba(255,213,79,0.6))',
            transition: 'width 0.1s linear',
            boxShadow: '0 0 8px rgba(255,213,79,0.4)',
          }} />
        </div>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '10px',
          color: 'rgba(255,213,79,0.4)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          Loading portfolio...
        </p>
      </div>
    </div>
  );
}
