import Hero from '@/components/home/Hero';
import QuickBar from '@/components/home/QuickBar';
import Services from '@/components/home/Services';
import Courses from '@/components/home/Courses';
import Pathways from '@/components/home/Pathways';
import Universities from '@/components/home/Universities';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import CTA from '@/components/home/CTA';
import ContactSection from '@/components/home/ContactSection';
import Privacy from '@/components/home/Privacy';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <QuickBar />
      <Services />
      <Courses />
      <Pathways />
      <Universities />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactSection />
      <Privacy />
      <WhatsAppButton />
    </>
  );
}
