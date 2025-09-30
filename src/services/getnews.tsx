import axios from 'axios';
import { useEffect, useState } from 'react';
import CMS_API_URL from './constants';
   
  export const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'news', name: 'Company News' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'industry', name: 'Industry Insights' },
    { id: 'case-studies', name: 'Case Studies' },
  ];

  export interface blogPost{
    id: number;
    created_at: string;
    title:string;
    category:string;
    body:string;
    read_time:string;
    tags:string[];
    featured_image: string;
    author_name:string;
  }

    const API_URL = CMS_API_URL + 'public/sectornews';
  
    const fetchnews = async (): Promise<blogPost[]> => {
      try {
        const response = await axios.get<blogPost[]>(API_URL);
       return response.data.reverse();
      } catch (error) {
        console.error('Error fetching services:', error);
       return []; 
      }
    }

    export const blogPosts = () => {
      const [blogposts, setblogposts] = useState<blogPost[]>([]);
       const [loading, setLoading] = useState(true);


      useEffect(()=> {
         const loadnews = async () => {
          const data = await fetchnews();
          setblogposts(data);
          setLoading(false);
         };

         loadnews();
      },[])

      return {blogposts, loading}

    }
   
 

  export default {
  categories,
  blogPosts
};