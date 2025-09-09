import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatsAppButton />
        <ScrollToTop />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
