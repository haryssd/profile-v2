import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  coordinates: string;
  emoji: string;
}

interface Props {
  items: GalleryItem[];
}

export default function GalleryLightbox({ items }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
      }}>
        {items.map((item, i) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            style={{
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '2px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              position: 'relative',
              cursor: 'pointer',
              background: '#0a0a14',
              transition: 'border-color 0.2s, transform 0.2s',
              animationDelay: `${i * 80}ms`,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,213,79,0.3)';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            {!errors[item.id] ? (
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                ref={(el) => {
                  // If image was already cached, onLoad never fires — check .complete on mount
                  if (el?.complete && !errors[item.id]) {
                    setLoaded(p => ({ ...p, [item.id]: true }));
                  }
                }}
                onLoad={() => setLoaded(p => ({ ...p, [item.id]: true }))}
                onError={() => setErrors(p => ({ ...p, [item.id]: true }))}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: loaded[item.id] ? 1 : 0,
                  transition: 'opacity 0.4s',
                }}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: '6px',
              }}>
                <span style={{ fontSize: '28px', opacity: 0.4 }}>{item.emoji}</span>
              </div>
            )}

            {/* Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,5,0.85) 0%, transparent 50%)',
              display: 'flex', alignItems: 'flex-end',
              padding: '10px',
              opacity: 0,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,213,79,0.8)', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '9px', color: '#90a4ae', letterSpacing: '0.06em' }}>
                  {item.coordinates}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,5,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
            <img
              src={selected.image}
              alt={selected.title}
              style={{
                width: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '2px',
                border: '1px solid rgba(255,213,79,0.1)',
              }}
            />
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px' }}>{selected.title}</div>
              <div style={{ fontSize: '13px', color: '#90a4ae', marginBottom: '8px' }}>{selected.description}</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,213,79,0.4)', letterSpacing: '0.1em' }}>{selected.coordinates}</div>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute', top: '-16px', right: '-16px',
                width: '36px', height: '36px',
                background: 'rgba(0,0,5,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                color: '#90a4ae',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
