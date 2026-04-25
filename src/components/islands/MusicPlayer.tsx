import { useState, useRef, useEffect, useCallback } from 'react';

interface Props {
  title: string;
  artist: string;
  youtubeId: string;
  startAt: number;
  previewDuration: number;
  albumArt: string;
}

export default function MusicPlayer({ title, artist, youtubeId, startAt, previewDuration, albumArt }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused' | 'done'>('idle');
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  const stopTracking = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startTracking = useCallback(() => {
    stopTracking();
    intervalRef.current = setInterval(() => {
      if (!playerRef.current) return;
      const t = playerRef.current.getCurrentTime?.() ?? 0;
      const elapsed = Math.max(0, t - startAt);
      const pct = Math.min((elapsed / previewDuration) * 100, 100);
      setCurrentTime(elapsed);
      setProgress(pct);
      if (elapsed >= previewDuration) {
        stopTracking();
        setPlaying(false);
        setStatus('done');
      }
    }, 500);
  }, [startAt, previewDuration, stopTracking]);

  const handlePlay = () => {
    if (!playerRef.current) return;
    if (status === 'done') {
      playerRef.current.seekTo(startAt);
      setProgress(0); setCurrentTime(0);
      setStatus('playing'); setPlaying(true);
      playerRef.current.playVideo();
      startTracking();
    } else if (playing) {
      playerRef.current.pauseVideo();
      setPlaying(false); setStatus('paused');
      stopTracking();
    } else {
      playerRef.current.playVideo();
      setPlaying(true); setStatus('playing');
      startTracking();
    }
  };

  useEffect(() => () => stopTracking(), [stopTracking]);

  const btnLabel = status === 'done' ? '↺' : playing ? '❚❚' : '▶';
  const statusText = status === 'playing' ? 'Now Playing' : status === 'paused' ? 'Paused' : status === 'done' ? 'Done' : '30s Preview';

  return (
    <>
      {/* Hidden YouTube player */}
      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px', opacity: 0 }}>
        <div id="yt-player" />
      </div>

      {/* Floating container */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}>

        {/* Expanded panel — always rendered, animated via opacity/transform */}
        <div style={{
          background: '#0d0d18',
          border: '1px solid rgba(255,213,79,0.15)',
          borderRadius: '4px',
          padding: '20px',
          width: '260px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          opacity: expanded ? 1 : 0,
          transform: expanded ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          pointerEvents: expanded ? 'auto' : 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          transformOrigin: 'bottom right',
        }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  border: `1.5px solid ${playing ? '#ffd54f' : 'rgba(255,255,255,0.12)'}`,
                  overflow: 'hidden',
                  animation: playing ? 'spin 3s linear infinite' : 'none',
                  boxShadow: playing ? '0 0 12px rgba(255,213,79,0.3)' : 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}>
                  <img src={albumArt} alt={title} width={44} height={44}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: playing ? 'brightness(1.1)' : 'brightness(0.65)' }}
                    onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaf6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
                <div style={{ fontSize: '11px', color: '#90a4ae' }}>{artist}</div>
              </div>
            </div>

            {/* Progress */}
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden', marginBottom: '6px' }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'linear-gradient(to right, #ffd54f, rgba(255,213,79,0.5))',
                transition: 'width 0.5s linear',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#90a4ae', letterSpacing: '0.06em', marginBottom: '14px' }}>
              <span>{formatTime(currentTime)}</span>
              <span style={{ color: playing ? '#ffd54f' : '#90a4ae', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{statusText}</span>
              <span>{formatTime(previewDuration)}</span>
            </div>

            {/* Play button */}
            <button
              onClick={handlePlay}
              style={{
                width: '100%', padding: '8px',
                background: 'rgba(255,213,79,0.1)',
                border: '1px solid rgba(255,213,79,0.2)',
                borderRadius: '2px',
                color: '#ffd54f',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,213,79,0.18)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,213,79,0.1)')}
            >
              {status === 'done' ? 'Replay' : playing ? 'Pause' : 'Play'}
            </button>
          </div>

        {/* Vinyl disc toggle button */}
        <button
          onClick={() => setExpanded(v => !v)}
          title={expanded ? 'Close player' : `Now playing: ${title}`}
          style={{
            width: '56px', height: '56px',
            borderRadius: '50%',
            border: `2px solid ${playing ? '#ffd54f' : expanded ? 'rgba(255,213,79,0.4)' : 'rgba(255,255,255,0.12)'}`,
            overflow: 'hidden',
            cursor: 'pointer',
            padding: 0,
            background: '#111',
            animation: playing ? 'spin 3s linear infinite' : 'none',
            boxShadow: playing
              ? '0 0 20px rgba(255,213,79,0.4), 0 4px 20px rgba(0,0,0,0.5)'
              : '0 4px 20px rgba(0,0,0,0.4)',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            flexShrink: 0,
          }}
        >
          <img
            src={albumArt}
            alt={title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: playing ? 'brightness(1.1)' : 'brightness(0.6)',
              display: 'block',
            }}
            onError={e => {
              const el = e.target as HTMLImageElement;
              el.style.display = 'none';
              if (el.parentElement) el.parentElement.style.background = '#1a1a2e';
            }}
          />
        </button>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <YoutubeLoader youtubeId={youtubeId} startAt={startAt} playerRef={playerRef} />
    </>
  );
}

function YoutubeLoader({ youtubeId, startAt, playerRef }: { youtubeId: string; startAt: number; playerRef: React.MutableRefObject<any> }) {
  useEffect(() => {
    const loadYT = () => {
      if ((window as any).YT?.Player) {
        playerRef.current = new (window as any).YT.Player('yt-player', {
          videoId: youtubeId,
          playerVars: { autoplay: 0, controls: 0, rel: 0, modestbranding: 1, start: startAt },
          events: { onReady: () => {} },
        });
      }
    };
    if ((window as any).YT) { loadYT(); }
    else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = loadYT;
    }
  }, [youtubeId, startAt, playerRef]);
  return null;
}
