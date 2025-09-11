import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import nina from '@/assets/images/review-4.png';
import kirabo from '@/assets/images/review-1.png';
import grace from '@/assets/images/review-2.png';
import nophoto from '@/assets/images/no-photo.webp';

// Responsive hook to set items per slide
const useResponsiveItems = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 768) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItems();
    window.addEventListener('resize', updateItems);
    return () => window.removeEventListener('resize', updateItems);
  }, []);

  return itemsPerSlide;
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = useResponsiveItems();

  const testimonials = [
    {
      name: 'Nicholas Ntume',
      position: 'CEO, Tech Innovations Ltd',
      image: nophoto,
      rating: 5,
      text: 'I have worked with contivibe Media on a commercial production for our Brand. The Creativity was awesome. The TVC they created got us more customers coming in and buying.',
    },
    {
      name: 'Nina Mugerwa',
      position: 'Marketing Director, Creative Solutions',
      image: nina,
      rating: 5,
      text: 'Contivibe media is reliable, they give the client an unforgettable experience...they do variety of takes to your satisfaction...I will always choose Contivibe media..',
    },
    {
      name: 'Jovan Lule',
      position: 'Founder, Digital Enterprises',
      image: nophoto,
      rating: 5,
      text: 'Contivibe is the next big thing. Nice photos, nice video coverage, smart team, good customer and well thought content. Thank you guys',
    },
    {
      name: 'Margaret Kirabo',
      position: 'Events Coordinator, Uganda Tourism Board',
      image: kirabo,
      rating: 5,
      text: 'I had an amazing experience with the Contivibe Media team at the HRMAU Sports Gala and their customer care is top notch. I highly recommend them',
    },
    {
      name: 'Grace Ssekyanzi',
      position: 'Events Coordinator, Uganda Tourism Board',
      image: grace,
      rating: 5,
      text: 'Contivibe Media helped me create content for my business. The short films, collaboration and the creativity were all amazing',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerSlide + testimonials.length) % testimonials.length);
  };

  const getSlideItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  return (
    <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-2 tracking-wide font-roboto">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-monospace">
            Our Clients Reviews
          </h3>
          <p className="text-md text-muted-foreground leading-relaxed font-sans">
            We are proud to share the experiences of our valued clients. Their feedback is a testament to our commitment to excellence and our dedication to delivering outstanding results. Here’s what they have to say about working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className={`grid grid-cols-1 ${itemsPerSlide > 1 ? 'md:grid-cols-3' : ''} gap-8 max-w-6xl mx-auto transition-all duration-900 ease-in-out animate-slide-left`}>
            {getSlideItems().map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed mb-6 italic text-foreground font-light">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-4 border-primary/20"
                      />
                      <div className="text-left">
                        <div className="font-bold text-foreground text-md">
                          {testimonial.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-11">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Project Delivery On Time</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">90%</div>
            <div className="text-sm text-muted-foreground">Repeat Client Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
