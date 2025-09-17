import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Camera, Film, TrendingUp, Eye, Heart, Radio, User, Pencil, Mic, Instagram } from 'lucide-react';
import heroBg from '../assets/images/header1.webp';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const About = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About' }
  ];

  const core_services = [
    {
      icon: Camera,
      title: 'Photography',
    },
    {
      icon: Video,
      title: 'Livestreaming & Videography',
    
    },
    {
      icon: Film,
      title: 'Documentary Production',
    },
    {
      icon: TrendingUp,
      title: 'Event Highlights & Recap Content',
    },
    {
      icon: Instagram,
      title: 'Digital & Social Media Content',
    },
    {
      icon: Pencil,
      title: 'Graphic Design & Creative Visuals',
    },
    {
      icon: Mic ,
      title: 'Online Radio & Podcast Setup',
    }
  ];

const values = [
    {
      id: 1,
      title: 'Creativity',
      description: 'We embrace innovative ideas in all our projects',
      color: 'bg-primary text-white'
    },
    {
      id: 2, 
      title: 'Positivity',
      description: 'We foster a positive and energetic environment that reflects in our content',
      color: 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400'
    },
    {
      id: 3,
      title: 'Authenticity',
      description: 'We capture genuine moments that truly connects with our audience',
      color: 'bg-primary text-white'
    },
    {
      id: 4,
      title: 'Impact',
      description: 'We aim to produce media that leaves a lasting impression and engages viewers on a deeper level'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHeader 
        title="About Us" 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />
      <WhatsAppChat/>
      <ScrollToTop/>
       <main>
        {/* Hero Section */}
        <section className="py-10 bg-gradient-to-b from-background to-muted/50">
          <div className="container-custom">
            <div data-aos="slide-right" className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-sans text-justify md:text-center">
               At Contivibe Media, we don’t just produce content, we create memorable experiences. 
              With every frame, shot, and edit, we deliver value-driven storytelling that keeps audiences connected, engaged, and inspired.
              </p>
            
            </div>
          </div>
        </section>

                {/* Brief */}
      <section className="py-10 bg-gradient-to-b from-muted/50 to-background">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h5 className="text-2xl md:text-4xl font-bold mb-6 font-roboto">
                Our <span className="text-primary">Core Services:</span>
              </h5>
            </div>

            <div className="flex flex-col items-center gap-8 font-sans animate-slide-left">
  {/* First Row: 4 items */}
                  <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto px-4 font-roboto">
                    {core_services.map((value) => (
                      <Card key={value.title} data-aos="slide-left" className="text-center hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-sm">
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <value.icon className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-xl mb-3">{value.title}</h4>
                        </CardContent>
                      </Card>
                    ))}
                  </div>


            </div>



            <div className="text-xl text-muted-foreground leading-relaxed mt-10 px-16 font-sans text-justify md:text-center">
              <p>From real-time event coverage to cinematic storytelling, 
                      we provide end-to-end visual solutions that elevate brands, celebrate milestones, and document impact. 
                      Our team combines creativity and technical expertise to ensure each moment is professionally captured and 
                      repackaged into meaningful digital assets.</p>
            <p></p>
            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10">
          <div className="container-custom">
            <div  data-aos="slide-right"  className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-roboto">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    To create winning and impactful media content that connects with audiences, 
capturing moments and memories that speak a thousand words.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-roboto">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                   To be the leading content and media production company known for our creativity, 
positivity, and ability to provoke specific energy through our work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
         
        </section>

      <hr className="mx-16 border-t border-primary"/>

        {/* Our values */}
     <section className="section-padding bg-background font-roboto">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.id}
              className={`group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm text-center ${value.color}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mx-auto mb-6 relative">
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl  opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold mb-4 group-hover:text-foreground transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-foreground text-sm leading-relaxed font-sans">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

        {/* Stats */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background font-sans">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center items-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              {/* <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      {/* <AboutSection/> */}
      <TeamSection/>
      <Footer />
    </div>
  );
};

export default About;