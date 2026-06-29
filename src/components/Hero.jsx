import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HLS_SRC = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); };

    let hls;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC;
      video.addEventListener('loadedmetadata', play);
    } else if (Hls.isSupported()) {
      hls = new Hls({ lowLatencyMode: false });
      hls.loadSource(HLS_SRC);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, play);
    }

    return () => {
      if (hls) hls.destroy();
      video.removeEventListener('loadedmetadata', play);
    };
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero-video-overlay" />
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-badge">H100 · H200 · A100 — On Demand</div>

      <h1>Rent GPUs.<br /><span className="accent-word">Ship Faster.</span></h1>

      <p className="hero-sub">Spin up H100s, H200s or RTX GPUs for LLM fine-tuning, Stable Diffusion rendering, or any deep-learning experiment.</p>
      <p className="hero-deploy">Deploy in 90 seconds — pay by the minute. No contracts, no surprises.</p>

      <div className="hero-actions">
        <a href="#pricing" className="btn-primary">View Pricing →</a>
        <a href="#" className="btn-ghost">Contact Sales</a>
      </div>

      <p className="hero-pricing">from <span>H100 $2.69</span> · <span>A100 $0.89</span> · <span>RTX 5000 $0.39</span>/hr</p>

      <p className="hero-trust">Trusted by <strong>27,343 AI developers</strong></p>

      <div className="cli-card">
        <div className="cli-bar">
          <div className="cli-dot" style={{ background: '#ff5f57' }} />
          <div className="cli-dot" style={{ background: '#febc2e' }} />
          <div className="cli-dot" style={{ background: '#28c840' }} />
        </div>
        <div className="cli-line"><span className="prompt">$</span> <span className="cmd">pip install jarvislabs</span></div>
        <div className="cli-line"><span className="ok">✓</span> <span className="dim">Installed jarvislabs v2.4.1</span></div>
        <div className="cli-line"><span className="prompt">$</span> <span className="cmd">jl create --gpu A100</span></div>
        <div className="cli-line"><span className="ok">✓</span> <span className="dim">Instance ready in 38s</span></div>
        <div className="cli-line"><span className="prompt">$</span> <span className="cmd">jl run train.py --gpu A100</span></div>
        <div className="cli-line"><span className="dim">⠋ Uploading code &amp; starting training...</span><span className="cli-cursor" /></div>
      </div>
    </section>
  );
}
