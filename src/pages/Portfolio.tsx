import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';
import heroBg from '@/assets/images/header1.webp';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import im1 from '../assets/images/photos/image-1-thumb.webp'
import im2 from '../assets/images/photos/image-11-thumb.webp'
import im3 from '../assets/images/photos/image-12-thumb.webp'
import im4 from '../assets/images/photos/image-13-thumb.webp'
import im5 from '../assets/images/photos/image-14-thumb.webp'
import im6 from '../assets/images/photos/image-15-thumb.webp'
import im7 from '../assets/images/photos/image-16-thumb.webp'
import im8 from '../assets/images/photos/image-17-thumb.webp'
import im9 from '../assets/images/photos/image-18-thumb.webp'
import im10 from '../assets/images/photos/image-19-thumb.webp'
import im11 from '../assets/images/photos/image-2-thumb.webp'
import im12 from '../assets/images/photos/image-20-thumb.webp'
import { Link } from 'react-router-dom';
import { fetchYouTubeVideos, YoutubeVideo } from "../services/getYoutubeVideos";

const Portfolio = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchYouTubeVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    loadVideos();
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'video', name: 'Video Production' },
    { id: 'photography', name: 'Photography' },
    { id: 'content', name: 'Content Marketing' },
    { id: 'streaming', name: 'Live Streaming' },
  ];

  const projects = [
    {
      id: 1,
      image: im1,
    },
    {
      id: 2,
      image: im2,
    },    {
      id: 3,
      image: im3,
    },    {
      id: 4,
      image: im4,
    },    {
      id: 5,
      image: im5,
    },    {
      id: 6,
      image: im6,
    },    {
      id: 7,
      image: im7,
    },    {
      id: 8,
      image: im8,
    },    {
      id: 9,
      image: im9,
    },    {
      id: 10,
      image: im10,
    },    {
      id: 11,
      image: im11,
    },    {
      id: 12,
      image: im12,
    },
 
 
  ];

  const filteredProjects = projects
  

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat/>
      <ScrollToTop/>
      <PageHeader 
        title="Our Portfolio" 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background to-muted/50">
          <div className="container-custom font-roboto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                Creating <span className="text-primary">Impactful Digital Solutions</span>
              </h1>
              <p className="text-md text-muted-foreground leading-relaxed font-sans">
              At Contivibe, we deliver innovative digital solutions that engage and empower businesses. From cutting-edge web development to creative content strategies, our services are tailored to help clients thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

          <div className="flex flex-row sm:flex-row gap-2 justify-center items-center animate-fade-up mb-3 font-roboto">
                  <a href="#port_images">
                    <Button size="lg" className="text-primary-foreground hover:bg-brand-red-hover px-8 py-4">
                  Photography
                </Button>
                  </a>
                  <a href="#port_videos">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-8 py-4">
                  Videos
                </Button>
                  </a>
            </div>

        {/* photography Portfolio Grid */}

        <section className="bg-primary py-10 font-roboto"  id='port_images'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-5">
                PHOTOGRAPHY
          </h1>
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm"
                         onClick={() => setSelectedImage(project.image)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      
      {/* Videos Portfolio Grid */}

      <section className="bg-primary py-10 font-roboto"  id='port_videos' >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-10">
                VIDEOS
          </h1>
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {videos.map((video) => (
          <YoutubeVideo
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
          />
        ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding font-roboto">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">
                Like What You See?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-sans">
                Let's create something amazing together. Our team is ready to bring your vision to life with the same quality and creativity you see in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-8 py-4">
                  Start Your Project
                </Button>
                  </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background font-sans">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10M+</div>
                <div className="text-muted-foreground">Content Views</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Hours Streamed</div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />

   {selectedImage && (
  <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
    <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
      <div className="relative">
        <img
          src={selectedImage}
          alt="Selected Project"
          className="w-full rounded-lg"
        />
      </div>
    </DialogContent>
  </Dialog>
)} 

    </div>
  );
};

export default Portfolio;