import { useEffect, useState } from 'react';
import client1 from '@/assets/images/client1.png'
import client2 from '@/assets/images/client2.png'
import client3 from '@/assets/images/client3.png'
import client4 from '@/assets/images/client4.png'
import client5 from '@/assets/images/client5.png'
import client6 from '@/assets/images/client6.png'
import client7 from '@/assets/images/client7.png'
import client8 from '@/assets/images/client8.png'
import client9 from '@/assets/images/client9.png'
import client10 from '@/assets/images/client10.png'
import { Link } from 'react-router-dom';

const ClientsSection = () => {
  const [currentOffset, setCurrentOffset] = useState(0);

  // Client logos and names
  const clients = [
    {
      name: 'Rotary Cancer Run 2024',
      logo: client1,
    },
    {
      name: 'Human Resource Managers Association of Uganda',
      logo: client2,
    },
    {
      name: 'Uhuru Institute',
      logo: client3,
    },
    {
      name: 'Uganda Tourism Board',
      logo: client4,
    },
    {
      name: 'East African Business Council',
      logo: client5,
    },
    {
      name: 'Kampala Capital City Authority',
      logo: client6,
    },
    {
      name: 'Makerere University',
      logo: client7,
    },
    {
      name: 'Bank of Uganda',
      logo: client8,
    },    {
      name: 'Bank of Uganda',
      logo: client9,
    },    {
      name: 'Bank of Uganda',
      logo: client10,
    },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(prev => {
        const newOffset = prev - 1;
        // Reset when we've scrolled through all original clients
        if (Math.abs(newOffset) >= clients.length * 220) {
          return 0;
        }
        return newOffset;
      });
    }, 30); // Smooth scrolling speed

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Valued Clients
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            Trusted by Leading Organizations{' '}
            <span className="text-primary">Across Uganda</span>
          </h3>
        </div>

        {/* Clients Slider Container */}
        <div className="relative overflow-hidden font-roboto">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* Sliding Clients */}
          <div 
            className="flex space-x-8 transition-transform duration-75 ease-linear"
            style={{ 
              transform: `translateX(${currentOffset}px)`,
              width: `${duplicatedClients.length * 220}px` 
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-52 h-24 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-full h-full flex items-center justify-center p-4">
                  <div className="text-center">
                    {/* Placeholder for client logo */}
                    <div className="w-full h-full rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      {/* <div className="w-8 h-8 bg-primary/30 rounded"></div> */}
                      <img src={client.logo} alt="" />
                    </div>
              
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 font-roboto">
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">Government</div>
            <div className="text-sm text-muted-foreground">Agencies & Institutions</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">NGOs</div>
            <div className="text-sm text-muted-foreground">Non-Profit Organizations</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">Education</div>
            <div className="text-sm text-muted-foreground">Universities & Schools</div>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg">
            <div className="text-2xl font-bold text-primary mb-2">Corporate</div>
            <div className="text-sm text-muted-foreground">Private Companies</div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 font-roboto">
            Ready to join our growing list of satisfied clients?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to='/contact'>
                       <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-roboto">
              Start Your Project
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;