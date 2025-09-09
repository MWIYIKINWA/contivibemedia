import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp, Eye, Heart } from 'lucide-react';
import heroBg from '../assets/images/header1.webp';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';

const About = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'About' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality content that exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their vision and bring it to life.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of trends and use cutting-edge technology to create impactful media solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to helping our clients grow their brands and achieve their business objectives.'
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
      <AboutSection/>
      <TeamSection/>
      <Footer />
    </div>
  );
};

export default About;