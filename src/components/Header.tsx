
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Play, Quote } from 'lucide-react';
import logo from '@/assets/logo-white.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Sector News', href: '/store-news' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent font-roboto">
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
           <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Contivibe Media Logo" className="h-10 w-auto" />

           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary relative group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Quote Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <Quote className="w-4 h-4 mr-2" />
              Request a Quote
            </Button></Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute p-5 m-6 rounded-md top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-fade-up">
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg transition-colors duration-300 hover:text-primary py-1 ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}
                  >
                    {item.name}
                     <hr/>
                  </Link>
                ))}
              <Link  to="/contact" >
                <Button
                  variant="default"
                  className="bg-primary text-primary-foreground hover:bg-brand-red-hover w-full justify-center mt-4"
                >
                  <Quote className="w-4 h-4 mr-2" />
                  Request a Quote
                </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
      <hr className="mx-4 border-t border-gray-400" />
    </header>
  );
};

export default Header;