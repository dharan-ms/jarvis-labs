const gpus = [
  { name: 'H100 SXM', vendor: 'NVIDIA · Best Performance', price: '$2.69', unit: '/hour', featured: true },
  { name: 'A100-80GB', vendor: 'NVIDIA', price: '$1.49', unit: '/hour' },
  { name: 'RTX 6000 Ada', vendor: 'NVIDIA', price: '$0.99', unit: '/hour' },
  { name: 'A100', vendor: 'NVIDIA', price: '$0.89', unit: '/hour' },
  { name: 'A6000', vendor: 'NVIDIA', price: '$0.79', unit: '/hour' },
  { name: 'A5000', vendor: 'NVIDIA', price: '$0.44', unit: '/hour' },
  { name: 'RTX 5000', vendor: 'NVIDIA · Best Value', price: '$0.39', unit: '/hour' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <video
        className="pricing-bg-video"
        src="/pricing-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="pricing-bg-overlay" />
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Pricing</div>
        <h2 className="section-title">Pay as you go</h2>
        <p className="section-desc">Choose from the latest NVIDIA GPUs at competitive hourly rates. No minimum commitments. Paused instances only incur storage fees.</p>
        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--green)', marginBottom: '2.5rem', fontWeight: 600 }}>GPU rental starts from $0.39/hr</p>

        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text2)', textAlign: 'left', marginBottom: '1rem' }}>GPU Rental Pricing</h3>
        <div className="pricing-grid">
          {gpus.map((g) => (
            <div className={`price-card${g.featured ? ' featured' : ''}`} key={g.name}>
              <div>
                <div className="gpu-name">{g.name}</div>
                <div className="gpu-vendor">{g.vendor}</div>
              </div>
              <div>
                <div className="gpu-price">{g.price}</div>
                <div className="gpu-unit">{g.unit}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text2)', textAlign: 'left', marginBottom: '1rem', marginTop: '2rem' }}>Storage</h3>
        <div className="storage-card">
          <div>
            <div className="gpu-name">Instance Storage</div>
            <div className="gpu-vendor">Per GB, charged only when paused</div>
          </div>
          <div>
            <div className="gpu-price">$0.00014</div>
            <div className="gpu-unit">/GB/hour</div>
          </div>
        </div>
      </div>
    </section>
  );
}
