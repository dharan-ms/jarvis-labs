export default function Cta() {
  return (
    <section style={{ padding: '4rem 1.5rem' }}>
      <div className="container">
        <div className="cta-banner">
          <h2>Ready to get started?</h2>
          <p>Launch your first GPU instance in under 90 seconds. No contracts, no surprises.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-primary">View GPU Pricing →</a>
            <a href="mailto:support@jarvislabs.ai" className="btn-ghost">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
