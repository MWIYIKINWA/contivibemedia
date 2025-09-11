import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { CircleMinus, Dot } from 'lucide-react';
import heroBg from '@/assets/images/header1.webp';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import { services } from '../services/getservices';
import { features } from 'process';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === parseInt(id || ''));

    const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },

  ];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }



  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat />
      <ScrollToTop />
      <PageHeader 
        title={service.title}
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />

      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 ">

            <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl" />
              </div>

              <div className='mx-10'>
                
                {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 font-keanutty">
                  {service.title}
                </h1> */}
                
                <div className='font-sans' dangerouslySetInnerHTML={{ __html: service.description }} />


                <div className="text-md grid grid-cols-1 gap-6 mb-8">
                  
                    
                    {
                       service.features.map((feature, index)=>(
                                           
                          <div key={index} className="font-sans text-md">
                             
                                    <div className="flex items-center">
                                    <Dot className="w-6 h-6 text-primary mr-3" />
                                    <p className="">{feature}</p>
                                    </div> 
                          </div>
                    
                       ))
                    }


                 
      
                </div>

                 <Link to='/contact'>
                <Button size="lg" className="bg-primary hover:bg-brand-red-hover">
                  Contact Us
                </Button>
                 </Link>
              </div>


            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding font-roboto">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <p className="text-muted-foreground">
                We follow a structured approach to ensure your project's success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: 'Consultation', desc: 'We discuss your goals and requirements' },
                { title: 'Planning', desc: 'We create a detailed project plan' },
                { title: 'Execution', desc: 'We bring your vision to life' },
                { title: 'Delivery', desc: 'We deliver exceptional results' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="section-padding bg-primary/10">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a customized solution that brings your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-8">
                  Request Quote
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="px-8">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;