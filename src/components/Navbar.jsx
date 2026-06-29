import { useState, useEffect } from 'react';

const links = [
  { label: 'How it works', href: '#how' },
  { label: 'CLI & SDK', href: '#cli' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Docs', href: 'https://docs.jarvislabs.ai/', external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav>
      <a href="#" className="nav-logo">
        <img src="/logo.png" alt="Jarvis Labs AI logo" className="logo-img" />
        Jarvis Labs AI
      </a>
      <button
        className="nav-burger"
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? '✕' : '☰'}
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#" className="nav-cta" onClick={() => setOpen(false)}>Get Started</a>
        </li>
      </ul>
    </nav>
  );
}
