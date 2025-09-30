import axios from 'axios';
import { useEffect, useState } from 'react';
import CMS_API_URL from './constants';

export interface Service {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  featured_image: string;
}

const API_URL = CMS_API_URL + 'public/services';

const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await axios.get<Service[]>(API_URL);
    return response.data.reverse();
  } catch (error) {
    console.error('Error fetching services:', error);
    return []; 
  }
};


export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      const data = await fetchServices();
      setServices(data);
      setLoading(false);
    };

    loadServices();
  }, []);

  return { services, loading };
};
