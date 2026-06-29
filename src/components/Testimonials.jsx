const testimonials = [
  {
    quote: '"The cheapest would probably be Jarvis Labs. They\'re very popular in our community."',
    name: 'Jeremy Howard',
    handle: 'Founder, fast.ai',
  },
  {
    quote: '"Looking to run a bigger model on GPU at a cheaper price, give @jarvislabsai a try and thank me later 😀 Got my machine up and running in a few mins 🔥"',
    name: 'SRK',
    handle: '@sudalairajkumar',
  },
  {
    quote: '"Fast start times, well priced, simple UI, easy billing. I have always chosen between config crap, expensive price, or long launch times. This is the first platform that gets all of these items right!"',
    name: 'Isaac Flath',
    handle: '@isaac_flath',
  },
  {
    quote: '"JarvisLabs IMO offers one of the best pricing for renting compute 💰 It\'s really fulfilling to hear one of the best startups from @fastdotai classroom is from India!"',
    name: 'Sanyam Bhutani',
    handle: '@bhutanisanyam1',
  },
  {
    quote: '"@jarvislabsai is the best GPU cloud provider for DL practitioners out there, period. More than once I had a question and support helped me in minutes, not only fast but so so friendly..."',
    name: 'Lucas Vazquez',
    handle: '@vzzqzzz',
  },
  {
    quote: '"Addict to @jarvislabsai. Less branded than others on the surface but super simple. Great GPUs — training on 8x A100s is amazing. This beats Paperspace premium accounts, Colab with custom VMs..."',
    name: 'Laurent Thevenet',
    handle: '@thelau',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-bg" id="testimonials">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">Testimonials</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Loved by AI Practitioners</h2>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
