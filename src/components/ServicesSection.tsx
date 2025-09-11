import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight} from 'lucide-react';

import { Link } from 'react-router-dom';
import {services} from '../services/getservices'


const ServicesSection = () => {

  return (
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
                  
                  {/* Icon Overlay */}
                  {/* <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div> */}
                </div>
              </CardHeader>
              
              <CardContent className=" p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                 <div className='font-sans text-muted-foreground mb-4 text-sm leading-relaxed' dangerouslySetInnerHTML={{ __html: service.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service.description }} />
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
        
        {/* CTA Section */}
        {/* <div className="text-center mt-16">
         <Link to="/services">
                 <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button></Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;