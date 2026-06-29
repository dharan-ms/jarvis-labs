import { useState } from 'react';

const faqs = [
  {
    q: 'How do I rent a GPU from JarvisLabs.ai?',
    a: "Sign up, top-up your credits, select your preferred GPU (e.g., A100, H100), and launch your instance. Within minutes, you'll have a fully configured environment ready for AI training or any GPU-accelerated workload.",
  },
  {
    q: 'Do you offer a free trial?',
    a: "We don't offer a free trial, but you can start exploring with as little as $10. Our pay-as-you-go model ensures you only pay when you rent a GPU and use it.",
  },
  {
    q: 'How am I charged for GPU usage?',
    a: "You're charged only for the time your rented GPU instance is running. When paused, you pay solely for storage. Our per-minute billing means no hidden fees or commitments.",
  },
  {
    q: 'What is a template?',
    a: 'A template is a pre-built container with a primary framework (e.g., PyTorch, TensorFlow). After you rent a GPU, you can install custom packages via apt or pip to suit your project.',
  },
  {
    q: 'How quickly can I start using my GPU?',
    a: 'Once you rent a GPU, instances typically launch in seconds. Start coding immediately via JupyterLab, VS Code Web, or SSH.',
  },
  {
    q: 'How is my data protected?',
    a: 'Your rented GPU instances run in isolated environments with private networking, ensuring proper data isolation and security.',
  },
  {
    q: 'What happens when I pause my instance?',
    a: "Pausing stops GPU usage charges. You pay only for storage while it's paused. Resume anytime to continue working where you left off.",
  },
  {
    q: 'What happens when I delete/destroy my instance?',
    a: 'Deletion is permanent, and data cannot be recovered. After deletion, no further charges apply.',
  },
  {
    q: 'What regions do you support for renting GPUs?',
    a: 'We currently offer GPU rentals in India and Finland, with more regions coming soon.',
  },
  {
    q: 'What kind of support is included?',
    a: "We provide technical support related to the entire lifecycle of your rented GPU instance. While we do our best to address framework-specific queries, we can't guarantee support for all open-source tools.",
  },
  {
    q: 'How are payments handled?',
    a: 'We use Stripe for secure payments. Pay with credit/debit cards or net banking, ensuring a smooth transaction process.',
  },
  {
    q: 'Do you support UPI, PayPal, etc?',
    a: 'Not currently. We support Stripe transactions at this time.',
  },
  {
    q: 'What is the refund policy?',
    a: "We don't offer refunds. If you have a valid reason, email us at support@jarvislabs.ai, and we'll review your request.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">FAQ</div>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Frequently Asked Questions</h2>
        <p className="section-desc">
          Can't find what you're looking for? Reach out to our{' '}
          <a href="mailto:support@jarvislabs.ai" style={{ color: 'var(--accent)', textDecoration: 'none' }}>support team</a>.
        </p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={item.q} open={openIndex === i}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === i ? null : i);
                }}
              >
                {item.q}
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
