import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUs';
import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import VideoPortfolioSection from '@/components/VideoPortfolioSlide';
import GoogleRatingSection from '@/components/GoogleReview';
import { useEffect } from 'react';

const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatsAppButton />
        <ScrollToTop />
        <AboutSection />
        <VideoPortfolioSection/>
        <WhyChooseUsSection/>
        <ServicesSection />
        <TeamSection />
         <GoogleRatingSection/>
        <TestimonialsSection />
         <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


