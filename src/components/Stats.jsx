import { useEffect, useRef } from 'react';

const stats = [
  { num: '27,000+', label: 'AI developers' },
  { num: '50M+', label: 'GPU hours served' },
  { num: '99.9%', label: 'Uptime SLA' },
  { num: '<90s', label: 'Instance launch' },
];

export default function Stats() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setSpeed = () => { video.playbackRate = 1.5; };
    setSpeed();
    video.addEventListener('loadedmetadata', setSpeed);
    video.addEventListener('play', setSpeed);
    return () => {
      video.removeEventListener('loadedmetadata', setSpeed);
      video.removeEventListener('play', setSpeed);
    };
  }, []);

  return (
    <div className="stats">
      <div className="stats-inner">
        <div className="stats-heading">
          <div className="section-label">Trusted worldwide</div>
          <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Powering teams that push boundaries</h2>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="trusted-row">
          <video
            ref={videoRef}
            className="trusted-video"
            src="/trusted.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </div>
  );
}
