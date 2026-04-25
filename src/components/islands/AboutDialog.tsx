import { useState, useEffect, useRef } from 'react';

interface Education {
  institution: string;
  level: string;
  badge: string;
}

interface Props {
  bio: string;
  story: {
    codingOrigin: string;
    motivation: string;
    philosophy: string;
    hobbies: readonly string[];
    milestones2025: readonly string[];
    goals2026: readonly string[];
  };
  education: readonly Education[];
  origin: { birthplace: string; siblings: string };
}

const badgeColors: Record<string, string> = {
  green:  'rgba(74,222,128,0.15)',
  blue:   'rgba(96,165,250,0.15)',
  purple: 'rgba(192,132,252,0.15)',
  orange: 'rgba(251,146,60,0.15)',
  red:    'rgba(248,113,113,0.15)',
};

export default function AboutDialog({ bio, story, education, origin }: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMounted(true);
    setTimeout(() => setVisible(true), 16);
  };

  const close = () => {
    setVisible(false);
    closeTimer.current = setTimeout(() => setMounted(false), 320);
  };

  useEffect(() => {
    const btn = document.getElementById('story-btn');
    btn?.addEventListener('click', open);
    return () => btn?.removeEventListener('click', open);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (visible) {
      document.addEventListener('keydown', handler);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => document.removeEventListener('keydown', handler);
  }, [visible]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 500,
        background: 'rgba(0,0,5,0.82)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 24px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.28s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0d0d14',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '4px',
          width: '100%',
          maxWidth: '680px',
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.34,1.2,0.64,1), opacity 0.28s ease',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Header */}
        <div style={{ padding: '28px 32px 0', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '4px' }}>About Me</h2>
              <p style={{ fontSize: '13px', color: '#90a4ae' }}>Get to know me better</p>
            </div>
            <button
              onClick={close}
              style={{
                background: 'none', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '2px', color: '#90a4ae',
                width: '32px', height: '32px',
                cursor: 'pointer', fontSize: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,213,79,0.4)'; e.currentTarget.style.color = '#ffd54f'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#90a4ae'; }}
            >✕</button>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '4px' }} />
        </div>

        {/* Scrollable content — smooth scroll */}
        <div style={{
          padding: '20px 32px 28px',
          overflowY: 'auto',
          flex: 1,
          scrollBehavior: 'smooth',
        }}
          // custom scrollbar via CSS class
          className="about-scroll"
        >

          <FadeSection delay={0}>
            <Section title="Who I Am" emoji="♡">
              <p style={bodyStyle}>
                Name's <strong>Haris Daniel Bin Noh</strong>. Born in {origin.birthplace}, raised on kampung life — open fields, slow mornings, no Wi-Fi. It sounds basic but honestly it shaped how I think, how I stay calm under pressure, and why I don't overcomplicate things.
              </p>
              <p style={bodyStyle}>I'm the {origin.siblings} — so I grew up knowing when to lead and when to just listen. That balance still follows me into every team I work with.</p>
              <p style={bodyStyle}>{bio}</p>
            </Section>
          </FadeSection>

          <Divider />

          <FadeSection delay={60}>
            <Section title="How I Got Here" emoji="✦">
              <p style={{ ...bodyStyle, marginBottom: '20px' }}>Went through the full Malaysian education route — kampung school, national secondary, MRSM, matriculation, then uni. Each place had its own kind of pressure and its own lessons. Wouldn't trade any of it.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {education.map((edu, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-8px)',
                    transition: `opacity 0.3s ease ${120 + i * 60}ms, transform 0.3s ease ${120 + i * 60}ms`,
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: badgeColors[edu.badge] || 'rgba(255,213,79,0.2)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      flexShrink: 0, marginTop: '5px',
                    }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#e8eaf6' }}>{edu.institution}</div>
                      <div style={{ fontSize: '11px', color: '#90a4ae', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{edu.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </FadeSection>

          <Divider />

          <FadeSection delay={120}>
            <Section title="What Drives Me" emoji="◎">
              <p style={bodyStyle}>{story.motivation}</p>
              <p style={bodyStyle}>{story.codingOrigin}</p>
              <p style={bodyStyle}>
                When things get overwhelming I go hiking. No playlist, no agenda — just trail and trees. I try to get up a mountain at least once a month. Every summit reminds me of the same thing: <em style={{ color: '#ffd54f' }}>{story.philosophy}</em>
              </p>
            </Section>
          </FadeSection>

          <Divider />

          <FadeSection delay={180}>
            <Section title="2025 Wins" emoji="★">
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {story.milestones2025.map((m, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '12px', alignItems: 'flex-start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-8px)',
                    transition: `opacity 0.3s ease ${240 + i * 50}ms, transform 0.3s ease ${240 + i * 50}ms`,
                  }}>
                    <span style={{ color: '#ffd54f', opacity: 0.6, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ fontSize: '14px', color: '#90a4ae', lineHeight: 1.6 }}>{m}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeSection>

          <Divider />

          <FadeSection delay={240}>
            <Section title="2026 Goals" emoji="◈">
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {story.goals2026.map((g, i) => (
                  <li key={i} style={{
                    display: 'flex', gap: '12px', alignItems: 'flex-start',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-8px)',
                    transition: `opacity 0.3s ease ${300 + i * 50}ms, transform 0.3s ease ${300 + i * 50}ms`,
                  }}>
                    <span style={{ color: '#ffd54f', opacity: 0.5, flexShrink: 0, marginTop: '2px', fontSize: '10px' }}>◆</span>
                    <span style={{ fontSize: '14px', color: '#90a4ae', lineHeight: 1.6 }}>{g}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </FadeSection>

        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease 250ms',
        }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            If you read this far, respect. Let's connect. ✦
          </p>
        </div>
      </div>

      <style>{`
        .about-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,213,79,0.2) transparent;
        }
        .about-scroll::-webkit-scrollbar { width: 4px; }
        .about-scroll::-webkit-scrollbar-track { background: transparent; }
        .about-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,213,79,0.2);
          border-radius: 2px;
        }
        .about-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,213,79,0.4);
        }
      `}</style>
    </div>
  );
}

function FadeSection({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay + 80);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity 0.35s ease, transform 0.35s ease',
    }}>
      {children}
    </div>
  );
}

const bodyStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#90a4ae',
  lineHeight: 1.8,
  marginBottom: '12px',
};

function Section({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <span style={{ color: '#ffd54f', fontSize: '13px', opacity: 0.6 }}>{emoji}</span>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e8eaf6' }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '20px 0 28px' }} />;
}
