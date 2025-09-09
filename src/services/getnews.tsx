
import news1 from '@/assets/images/service-7.webp';
import news2 from '@/assets/images/new2.jpg';
import news3 from '@/assets/images/news3.jpg';
   
    export const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'news', name: 'Company News' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'industry', name: 'Industry Insights' },
    { id: 'case-studies', name: 'Case Studies' },
  ];
   
   export const featuredPost = {
    id: 1,
    title: "Amplifying Your NGO's Impact through Strategic Media",
    excerpt: 'In today’s fast-paced digital world, non-governmental organizations (NGOs) face an increasingly complex challenge: how to effectively reach their target audiences, inspire action, and secure funding to support their mission. The solution lies in...',
    content: 'Live streaming has emerged as one of the most powerful tools for real-time engagement...',
    author: 'James Asaba',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'industry',
    image: news1,
    tags: ['Live Streaming', 'Digital Marketing', 'East Africa', 'Trends'],
    views: 1205
  };
 
 export const blogPosts = [
    {
      id: 2,
      title: 'What is SEO and Why Does it Matter?',
      excerpt: 'SEO (Search Engine Optimization) refers to the practice of enhancing your website to increase its chances of ranking higher in search engine results, especially on Google. This is crucial because websites at the top of Google’s search results...',
      author: 'Ruth Alice Mbabazi',
      date: '2024-03-12',
      readTime: '6 min read',
      category: 'tutorials',
      image: news2,
      tags: ['Content Creation', 'Social Media', 'Strategy'],
      views: 892
    },
    {
      id: 3,
      title: 'Understanding Your Audience',
      excerpt: 'In the modern world, content marketing has become a major key component of any successful marketing strategy. By producing and handing out valuable, relevant, and consistently engaging content, business owners can lure and retain a clearly defined...',
      author: 'Calvin Engola',
      date: '2024-03-10',
      readTime: '3 min read',
      category: 'news',
      image: news3,
      tags: ['Awards', 'Recognition', 'Achievement'],
      views: 654
    },
    {
      id: 4,
      title: 'Case Study: Rotary Cancer Run Digital Campaign Success',
      excerpt: 'Discover how our comprehensive digital strategy helped the Rotary Cancer Run achieve record-breaking participation and awareness.',
      author: 'Peter Mugerwa',
      date: '2024-03-08',
      readTime: '10 min read',
      category: 'case-studies',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
      tags: ['Case Study', 'Digital Campaign', 'Non-Profit'],
      views: 1156
    },
    {
      id: 5,
      title: 'Photography Tips for Better Brand Storytelling',
      excerpt: 'Master the art of visual storytelling with these professional photography techniques that will elevate your brand narrative.',
      author: 'Deborah Twimomujuni',
      date: '2024-03-05',
      readTime: '7 min read',
      category: 'tutorials',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=300&fit=crop',
      tags: ['Photography', 'Brand Storytelling', 'Visual Content'],
      views: 723
    },
  ];

  export default {
  featuredPost,
  categories,
  blogPosts
};