import { CheckCircle, Clock, Users, Package, Globe, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Comprehensive Visual Storytelling",
      description: "From livestreaming and photography to documentaries and recap content, we cover every angle to ensure your story is told with clarity and impact."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround, High Quality",
      description: "Same-day or next-day delivery for photography and event highlights, while maintaining professional quality across all platforms."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Authentic, People-Centered Content",
      description: "Through interviews, street vox pops, and documentaries, we capture real voices and genuine stories that resonate with audiences."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Bundled Packages for Greater Value",
      description: "Our integrated packages combine photography, videography, digital content, and design, giving you more impact and consistent brand visibility."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Digital Engagement & Reach",
      description: "From social media content to podcasts and online radio, we help brands grow their presence, connect with audiences, and keep engagement alive."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted by Leading Brands in Uganda",
      description: "With proven experience delivering livestreams, events, and content for corporates, NGOs, and institutions, we understand both the local market and global digital standards."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden font-roboto">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            Why <span className="text-black">Brands Choose</span> Contivibe Media
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div data-aos = "slide-left"
              key={index}
              className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/80 hover: transition-all duration-500 hover:shadow-2xl hover:   hover-scale"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl  group-hover: duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 font-sans">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 font-sans">
                  {feature.description}
                </p>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-16" style={{ animationDelay: '900ms' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Trusted by 500+ satisfied clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;