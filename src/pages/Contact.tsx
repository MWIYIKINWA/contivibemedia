import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/images/header1.webp';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';

const Contact = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['(+256) 393 252224', '(+256) 783 694161', '(+256) 751 238600'],
      action: 'Call Us Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['sales@contivibemedia.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Plot 53, Kira Road- Kamwokya', 'Msm Chambers', 'P.O.BOX 169217, Kampala Uganda'],
      action: 'Get Directions'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['(+256) 783 694161', 'Available 24/7'],
      action: 'Chat Now'
    }
  ];

  const services = [
    'Content Marketing & Strategy',
    'Events & Products Photography',
    'Livestreaming & Videography',
    'TVCs & Motion Videos',
    'Short Videos & Documentaries',
    'Digital, Content & Strategy',
    'Public Relations & Strategy',
    'Production for Business Growth'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat/>
      <ScrollToTop/>
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />
      <main>


        {/* Contact Information Cards */}
        <section className="py-6">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 font-roboto">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm font-sans">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background font-roboto">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <div className="mb-4">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent inquiries, please call us directly.
                  </p>
                </div>

                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="+256 xxx xxx xxx"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Service Interest</Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-2"
                          placeholder="Tell us about your project, timeline, and budget..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-brand-red-hover py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Additional Info */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                  <p className="text-muted-foreground">
                    Located in the heart of Kampala, our office is easily accessible and we welcome scheduled visits.
                  </p>
                </div>

                {/* Google Maps Embed Placeholder */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm mb-8">
                  <CardContent className="p-0">
                    <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                       
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.7477636671665!2d32.588308!3d0.340746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd1b06464177%3A0xc35baa7feea3c978!2sContivibe%20Media!5e0!3m2!1sen!2sug!4v1757407721489!5m2!1sen!2sug"
                       
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday:</span>
                        <span>8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday:</span>
                        <span>8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex items-center mt-4 pt-4 border-t border-border">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        <span className="text-xs text-muted-foreground">WhatsApp support available 24/7</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Get quick answers to common questions about our services and process.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer: "Project timelines vary depending on scope, but most projects are completed within 2-6 weeks. We'll provide a detailed timeline during our initial consultation."
                  },
                  {
                    question: "Do you offer payment plans?",
                    answer: "Yes, we offer flexible payment options including milestone-based payments for larger projects. We'll discuss the best payment structure for your budget."
                  },
                  {
                    question: "Can you work with tight deadlines?",
                    answer: "We understand urgent needs and can accommodate rush projects with additional planning. Contact us to discuss your specific timeline requirements."
                  },
                  {
                    question: "Do you provide ongoing content support?",
                    answer: "Absolutely! We offer ongoing content management, social media support, and maintenance services to keep your content fresh and engaging."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;