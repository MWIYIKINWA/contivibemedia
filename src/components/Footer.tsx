import { Link } from 'react-router-dom';
import {  
  Phone, 
  Mail, 
  MapPin,  
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter
} from 'lucide-react';
import logo from '@/assets/images/logo-white.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Sector news', href: '/store-news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    'Content Marketing',
    'Photography',
    'Live Streaming',
    'Video Production',
    'Public Relations',
    'Digital Strategy',
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-5 font-sans font-sans">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              
                <img src={logo} className='w-1/2' alt="" />
              
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed font-sans">
              We blend creativity and positivity to produce moments, content full of energy, reflecting our mission to produce engaging and impactful media.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/contivibemedia" target='_blank'
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-background/10  transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/contivibemedia/" target='_blank'
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-background/10  transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
              <a 
                href="https://www.youtube.com/@Contivibemedia1" target='_blank'
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-background/10  transition-colors duration-300 group"
              >
                <Youtube className="w-5 h-5 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/company/contivibemedia/"  target='_blank'
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-background/10  transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary-foreground transition-colors duration-300"  />
              </a>
              <a 
                href="https://x.com/contivibemedia" target='_blank'
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-background/10  transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>

            </div>
          </div>


          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary font-roboto">Our Services</h4>
            <ul className="space-y-1 font-sans">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-background/80 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary font-roboto">Get In Touch</h4>
            <div className="space-y-4 font-sans">
              
              {/* Email */}
              <div className="flex items-start space-x-3 ">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href="mailto:sales@contivibemedia.com"
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    sales@contivibemedia.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <div className="text-background/80 space-y-1">
                    <p>(+256) 393 252224</p>
                    <p>(+256) 783 694161</p>
                    <p>(+256) 751 238600</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-background/80 leading-relaxed">
                    Msm Chambers - Plot 53, Kira Road - Kamwokya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} Contivibe Media. All rights reserved.
            </div>
            <div className="text-background/60 text-sm text-center md:text-right">
              Designed & Developed by{' '}
              <span className="text-primary font-medium">ProsperSites</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;