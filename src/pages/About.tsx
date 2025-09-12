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

  const values = [
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

  const firstRow = values.slice(0, 4);
const secondRow = values.slice(4);


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
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-sans">
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {firstRow.map((value) => (
      <Card key={value.title} data-aos="slide-left" className="text-center hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <value.icon className="w-8 h-8 text-primary" />
          </div>
          <h4 className="text-xl mb-3">{value.title}</h4>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Second Row: 3 items centered */}
  <div className="flex flex-row justify-center gap-5">
    {secondRow.map((value) => (
      <Card key={value.title} data-aos="slide-left" className="text-center hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm h-50 w-45">
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


    {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-left font-sans items-center">
  {values.map((value, index) => (
    <Card data-aos="slide-left" key={value.title} className="text-center hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm w-full h-full">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <value.icon className="w-8 h-8 text-primary" />
        </div>
        <h4 className="text-xl mb-3">{value.title}</h4>
      </CardContent>
    </Card>
  ))}
</div> */}

            <div className="text-xl text-muted-foreground leading-relaxed mt-10 px-16 font-sans text-center">
              <p>From real-time event coverage to cinematic storytelling, 
                      we provide end-to-end visual solutions that elevate brands, celebrate milestones, and document impact. 
                      Our team combines creativity and technical expertise to ensure each moment is professionally captured and 
                      repackaged into meaningful digital assets.</p>
            <p></p>
            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
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



        {/* Our Story */}
        {/* <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Founded with a passion for storytelling and a vision to transform how organizations communicate with their audiences, Contivibe Media has grown from a small creative team to a comprehensive media agency serving clients across Uganda and beyond.
                </p>
                
                <p className="mb-6">
                  Our journey began when our founders recognized a gap in the market for authentic, culturally-relevant content creation that truly resonates with East African audiences. We started with a simple belief: every organization has a unique story worth telling, and with the right approach, that story can create powerful connections and drive meaningful change.
                </p>

                <p className="mb-6">
                  Today, we continue to push the boundaries of creative excellence, combining traditional storytelling techniques with cutting-edge technology to deliver content that not only looks great but also achieves our clients' strategic objectives.
                </p>

                <p>
                  As we look to the future, we remain committed to our founding principles while constantly evolving to meet the changing needs of our clients and the dynamic media landscape. We're not just creating content – we're building bridges between brands and their communities, one story at a time.
                </p>
              </div>
            </div>
          </div>
        </section> */}

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