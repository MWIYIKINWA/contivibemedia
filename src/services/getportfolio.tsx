import axios from 'axios';
import { useEffect, useState } from 'react';
import CMS_API_URL from './constants';

const API_URL = CMS_API_URL + 'public/portfolio';


const transformPortfolioImages = (data: any[]) => {
  const imagesWithDetails = [];

  data.forEach(portfolio => {
    portfolio.images.forEach(image => {
      imagesWithDetails.push({
        id: image.id,
        image_url: image.image_url,
        title: portfolio.event_title,
        description: portfolio.description
      });
    });
  });

  return imagesWithDetails;
};

interface PortfolioImage {
  id: string | number;
  image_url: string;
  title: string;
  description: string;
}

const fetchPortfolioImages = async () => {
  try {
    const response = await axios.get(API_URL);
    const transformed = transformPortfolioImages(response.data);
    return transformed;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return [];
  }
};

const getPortfolioImages = () => {
  const [portfolioImages, setPortfolioImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const loadPortfolioImages = async () => {
      try {
        const data = await fetchPortfolioImages();
        setPortfolioImages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioImages();
  }, []);

  return {portfolioImages, loading}
}

export default getPortfolioImages;