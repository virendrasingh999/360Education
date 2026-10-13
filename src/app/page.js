import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Courses from '@/components/home/Courses';
import Universities from '@/components/home/Universities';
import ContactSection from '@/components/home/ContactSection';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
      <Universities />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
