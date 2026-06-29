const columns = [
  {
    title: 'Company',
    links: ['Pricing', 'GPU Cloud India', 'Universities', 'Supported Countries', 'Compare Providers', 'Careers', 'Contact Sales', 'Contact Us', 'Terms & Conditions'],
  },
  {
    title: 'GPUs',
    links: ['H200 GPUs', 'H100 GPUs', 'A100 80GB GPUs', 'A100 40GB GPUs', 'L4 GPUs', 'B200 Specs', 'RTX 6000 Pro'],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
              <img src="/logo.png" alt="Jarvis Labs AI logo" className="logo-img" />
              Jarvis Labs AI
            </a>
            <p>JarvisLabs.ai makes it simple and affordable to rent GPUs for AI, ML, and deep learning tasks, delivered with top-notch support.</p>
            <div className="footer-social">
              <a href="https://twitter.com/jarvislabsai" className="social-link" title="Twitter">𝕏</a>
              <a href="https://www.linkedin.com/company/jarvislabsai/" className="social-link" title="LinkedIn">in</a>
              <a href="https://github.com/jarvislabsai" className="social-link" title="GitHub">⌥</a>
              <a href="https://www.youtube.com/channel/UCAMo8bfMjeMyY_CTkcN9fcA" className="social-link" title="YouTube">▶</a>
            </div>
          </div>

          {columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">AI FAQs</a></li>
              <li><a href="#">CLI &amp; SDK Docs</a></li>
              <li><a href="mailto:support@jarvislabs.ai">support@jarvislabs.ai</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jarvislabs.ai · All Rights Reserved · Made with ❤️ in India</span>
          <span><a href="#">Terms &amp; Conditions</a></span>
        </div>
      </div>
    </footer>
  );
}
