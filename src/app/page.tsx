import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Ticker from '@/components/Ticker';
import NewsTicker from '@/components/NewsTicker';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <NewsTicker />
      <Hero />
      <Features />
      <Ticker />
      <Portfolio />
      <Testimonials />
      <Ticker />
      <CTA />
    </main>
  );
}
