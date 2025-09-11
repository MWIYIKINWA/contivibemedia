import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight
} from 'lucide-react';
import heroBg from '@/assets/images/header1.webp';
import { Link } from 'react-router-dom';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import {services} from '../services/getservices'
import ServicesSection from '@/components/ServicesSection';

const Services = () => {


  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services' }
  ];



  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat/>
      <ScrollToTop/>
      <PageHeader 
        title="Our Services" 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />
      <ServicesSection/>
      <main>

        {/* CTA Section */}
        <section className="py-10 font-sans">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a customized solution that brings your vision to life and achieves your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/contact'>
                   <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-8 py-4">
                  Request Quote
                </Button></Link>
                <Link to='/portfolio'>
                    <Button variant="outline" size="lg" className="px-8 py-4">
                  View Our Portfolio
                </Button></Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;