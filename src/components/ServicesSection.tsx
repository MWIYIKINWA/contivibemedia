import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useServices } from '@/services/getservices';




const ServicesSection = () => {
  
const { services, loading} = useServices();

  return (
    <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-left">
          <h2 className="text-3xl font-semibold text-primary mb-2 tracking-wide font-roboto">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-4xl lg:text-5xl mb-6 leading-tight font-keanutty">
            Let us tell your Story
          </h3>
        </div>

        {/* Updated Services Container - Using Flex instead of Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4 font-roboto">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.featured_image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-primary/60 transition-colors duration-300" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <div
                  className="prose font-sans text-muted-foreground mb-4 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html:
                      service.description.length > 200
                        ? service.description.slice(0, 200) + "..."
                        : service.description
                  }}
                />
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
  );
};

export default ServicesSection;