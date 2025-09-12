import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Video, Phone, MessageCircle } from 'lucide-react';
import aboutImage from '@/assets/images/CONTIVIBE strategy flyer.webp';
import whatsapIcon from '@/assets/images/whatsappicon2.webp'

const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div data-aos="slide-right" className="space-y-10">
            <div>
              {/* <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                About Contivibe Media
              </h2> */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-roboto">
                Discover{' '}
                <span className="text-primary">Who We Are</span>
              </h3>
            </div>

            <div className="space-y-5 text-gray-700 text-md leading-relaxed font-sans">
              <p>
                Contivibe Media Limited is a content & media production company specializing in creating impactful content for various platforms and capturing moments in Realtime.
              </p>
              <p>
                Contivibe Media combines "Conti" from "content" and "Vibe, vibe meaning "vibration" or "energy". This name means we are, a company that creates content that resonates with audiences, evoking a specific energy.
              </p>
              <p>
                Every time we stand behind the lens or PC we are not putting something together, we are capturing moments and memories that speak 1000 words, content that resonates with audience. We blend creativity and positivity to produce moments, content full of energy, reflecting our mission to produce engaging and impactful media.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className='font-roboto'>
                      <h4 className="font-semibold mb-2 text-foreground">Quality content</h4>
                      <p className="text-sm text-muted-foreground ">High-quality visuals and stories to grow your brand's engagement organically..</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div className='font-roboto'>
                      <h4 className="font-semibold mb-2 text-foreground">Live Streaming Expertise</h4>
                      <p className="text-sm text-muted-foreground">Seamless live broadcasts tailored to engage your audience in real time.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-medium">(+256) 783 694161</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <MessageCircle className="w-5 h-5 text-primary" /> */}
                <img src={whatsapIcon} alt="" height='30' width='30' />
                <span className="font-medium">WhatsApp Available</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Marketing and branding design workspace"
                className="w-full h-full lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute -left-6 bg-background shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="text-center font-roboto">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;