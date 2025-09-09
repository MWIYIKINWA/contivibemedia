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
      <main>
   
    <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-left">
          <h2 className="text-3xl font-semibold text-primary mb-2 tracking-wide font-roboto">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-4xl lg:text-5xl mb-6 leading-tight font-keanutty">
            Let us tell your Story
            
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              data-aos="slide-right"
              className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm animate-slide-left font-roboto"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-primary/60 transition-colors duration-300" />
                
                </div>
              </CardHeader>
              
              <CardContent className=" p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service.description}
                </p>
                
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Link to={`/services/${service.id}`}>
                    <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
      </div>
    </section>

        {/* CTA Section */}
        <section className="section-padding font-sans">
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