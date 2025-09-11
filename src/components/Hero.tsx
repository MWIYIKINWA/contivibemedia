import { Button } from '@/components/ui/button';
import {Eye, Radio, PlayCircle, X, Pause } from 'lucide-react';
import heroImage from '@/assets/images/header.webp';
import { useRef, useState } from 'react';
import { useRadio } from '@/context/AppContext';

const Hero = () => {

const [showVideo, setShowVideo] = useState(false);
const {isPlaying, toggleRadio} = useRadio();




  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  animate-fade-in"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(8, 8, 8, 0.78), rgba(44, 44, 44, 0.4)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
         <p className="text-xl md:text-2xl lg:text-2xl  text-gray-300 max-w-3xl mx-auto animate-fade-up font-sans" style={{animationDelay: '0.2s'}}>
            Ready for a content partner who moves fast and delivers results?
          </p>

            <h6 className="text-3xl md:text-5xl lg:text-6xl  mb-6 animate-fade-up  font-keanutty mt-5" >
            We  Capture Moments <span className="font-kaushan">&amp;</span> Content <span className="font-kaushan">&amp;</span> turn them into brand impact
          </h6>

 {/* playing video */}
 {showVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div className="relative w-full max-w-4xl aspect-video">
      <iframe className='w-full h-full' src="https://www.youtube.com/embed/2BPE6CHVzQY?si=BGSDVYv542WNRK2J&amp;start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  </div>
)}

{/* //play radio */}

{/* //.................... */}
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary max-w-3xl mx-auto animate-fade-up font-extrabold" style={{animationDelay: '0.2s'}}>
             Get in touch today
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up mt-5" style={{animationDelay: '0.4s'}}>
            <Button
              size="lg"
              onClick={() => setShowVideo(true)}
              className="bg-primary text-primary-foreground hover:bg-brand-red-hover px-5 py-2  shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 font-roboto"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Portfolio
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={toggleRadio}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-4 py-3  backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
            >
             {isPlaying ? <><Pause className="w-5 h-5 mr-2"/> Playing....</>  :  <><Radio className="w-5 h-5 mr-2" /> Listen to HiFi Radio</>
              }
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;