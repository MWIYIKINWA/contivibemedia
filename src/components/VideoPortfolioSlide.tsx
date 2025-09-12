import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/images/slide_port/WhatsApp Image 2025-09-12 at 3.03.40 PM (1).jpeg';
import portfolio2 from '@/assets/images/slide_port/WhatsApp Image 2025-09-12 at 3.03.40 PM (2).jpeg';
import portfolio3 from '@/assets/images/slide_port/WhatsApp Image 2025-09-12 at 3.03.41 PM.jpeg';
import portfolio4 from '@/assets/images/slide_port/WhatsApp Image 2025-09-12 at 3.03.42 PM.jpeg';
import portfolio5 from '@/assets/images/slide_port/WhatsApp Image 2025-09-12 at 3.11.56 PM.jpeg';

const VideoPortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolioImages = [
    {
      src: portfolio1,
      title: 'Nina Mugerwa',
      description: 'Serenade Live Concert 2024'
    },
    {
      src: portfolio4,
      title: 'Cancer Run',
      description: '2024'
    },
    {
      src: portfolio5,
      title: 'UCEO Jennifer Bamuturaki ',
      description: 'At CEO Workshop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
}, []);


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center lg:grid-cols-2 gap-8 items-center">

            {/* Portfolio Slider Column */}
          <div className="space-y-6">
            {/* <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Portfolio Highlights
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Discover our diverse range of projects across different industries 
                and creative disciplines.
              </p>
            </div> */}

            <div className="relative pr-4 border-r border-primary">
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {portfolioImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                          <p className="text-white/90">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {portfolioImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>


          {/* Video Column */}

    
            {/* <div className="space-y-3">            
            <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden group hover-lift">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                        <blockquote
                        className="tiktok-embed"
                        cite="https://www.tiktok.com/@contivibemedia/video/7478755829672348983"
                        data-video-id="7478755829672348983"
                        style={{ maxWidth: '605px', minWidth: '325px' }}
                        >
                        <section>
                       
                            <a
                            target="_blank"
                            title="♬ original sound - Contivibe Media"
                            href="https://www.tiktok.com/music/original-sound-7478755868872952582?refer=embed"
                            >
                            ♬ original sound - Contivibe Media
                            </a>
                        </section>
                        </blockquote>

              </div>
            </div>
          </div> */}




          <div className="space-y-6">            
            <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden group hover-lift">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/shorts/WEr1sZTOcGo?si=WZHbtW7GsfbKYneZ"
                  title="Contivibe Media Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>



    
        </div>
      </div>

      {/* Mobile Red Divider */}
      <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent my-12"></div>
    </section>
  );
};

export default VideoPortfolioSection;