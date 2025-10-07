import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CMS_API_URL from './constants';

const AboutFlyer: React.FC = () => {
  const [flyerUrl, setFlyerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlyer = async () => {
      try {
        const response = await axios.get(CMS_API_URL + 'public/flyer');
        setFlyerUrl(response.data.file_url);
      } catch (error) {
        console.error('Failed to fetch flyer image:', error);
      }
    };

    fetchFlyer();
  }, []);

  return (

        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {flyerUrl ? (
          <img
            src={flyerUrl}
            alt="Contivibe strategy flyer"
            className="w-full h-full lg:h-full object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Loading flyer...
          </div>
        )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div> 
    

  
  );
};

export default AboutFlyer;
