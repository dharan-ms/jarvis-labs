import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CliSection from './components/CliSection.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <CliSection />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
