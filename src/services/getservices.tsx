import contentMarketingImg from '@/assets/images/service-1.webp';
import photographyImg from '@/assets/images/service-2.1.webp';
import streamingImg from '@/assets/images/service-3.1.webp';
import tvcImg from '@/assets/images/service-4.webp';
import shortdemo from '@/assets/images/service-5.webp';
import digitalimg from '@/assets/images/service-6.2.webp';
import publiceImg from '@/assets/images/service-7.webp';
import eventsimg from '@/assets/images/service-8.webp';
import podcastimg from '@/assets/images/service-9.1.webp';
import { Camera, Film, Smartphone, Target, TrendingUp, Tv, Users, Video } from 'lucide-react';


  export const services = [
    {
      id: 1,
      title: 'Content Marketing & Strategy',
      description: `We help businesses plan and create valuable content, such as quality blog posts, articles, videos, social media posters, infographics, podcasts, social media banners etc that attract and engage customers.  
      We start by analyzing existing content to help plan content types that suit different channels as well as designing a calendar. The focus is on building a strong connection with the target audience and increasing brand visibility.`,
      icon: Target,
      image: contentMarketingImg,
      features: ['Develop effective content marketing plans', 'Create engaging, high-quality content', 'Increase brand visibility and credibility', 'Drive business growth', 'Measure content success']
    },
    {
      id: 2,
      title: 'Events & Products Photography',
      description: `We offer professional photography services for events, such as corporate gatherings, product launches, Parties, Galas, Tradeshows, other corporate or social events.

We provide comprehensive event coverage, including pre-event preparation, Event setup, and live event capture. Our photographers blend documentary, portrait, and candid styles to capture authentic moments. Clients receive high-resolution or even edited images, often with same-day or next-day delivery options.`,
      icon: Camera,
      image: photographyImg,
      features: ['Capture memorable events in real-time', 'Tell your event and Brand Story', 'Enhance brand visibility', 'Build a professional visual identity']
    },
    {
      id: 3,
      title: 'Livestreaming & Videography',
      description: `This involves capturing live events, like conferences or concerts, and broadcasting them over the internet in real-time. It also includes recording and producing videos.

Contivibe Media's Livestreaming & Videography service enables businesses and individuals to captivate audiences through high-quality video content. We offer professional Live Streaming services for events, ensuring high-quality broadcast to your audience in real-time. We provide reliable streaming experiences that keep your viewers connected and engaged. Our Livestreaming & Videography will help you;`,
      icon: Video,
      image: streamingImg,
      features: ['Extend event reach and engagement',
'Create captivating video content',
'Elevate brand storytelling',
'Enhance social media presence',
'Preserve memories']
    },
    {
      id: 4,
      title: 'TVCs & Motion Videos',
      description: `TV commercials (TVCs) and motion videos are visual advertisements for businesses, shown on TV or online. These videos are designed to promote products, services, or brands in a creative and engaging way.

Contivibe Media's TVCs & Motion Videos service helps our clients;`,
      icon: Tv,
      image: tvcImg,
      features: ['Craft compelling brand stories',
'Increase audience engagement',
'Drive sales and conversions',
'Enhance brand reputation',
'Stand out in a crowded market.']
    },
    {
      id: 5,
      title: 'Short Videos & Documentaries',
      description: `Production of short films and documentaries that tell a story or explore a subject in depth. These can be used for entertainment, education, or raising awareness about a particular topic. Contivibe Media's Short Films & Documentaries service helps our clients;`,
      icon: Film,
      image: shortdemo,
      features: ['Create engaging', 'informative content.',
                    'Tell impactful stories.',
                    'Convey complex messages easily',
                    'Showcase brand values.',
                    'Increase audience engagement.',
                    'Showcase expertise and Brand values.',
                    'Preserve memories.',
                    'Educate and inspire.',]
    },
    {
      id: 6,
      title: 'Digital, Content & Strategy',
      description: `At Contivibe Media, we specialize in crafting compelling digital narratives that resonate with audiences. Our Digital Content & Strategy services are designed to amplify your brand's online presence through strategic content creation, influencer collaborations, and real-time event coverage`,
      icon: Smartphone,
      image: digitalimg,
      features: ['Content Strategy Development Tailored content plans aligning with your brand goals and audience preferences.',
'Influencer Marketing Campaigns Connecting your brand with influencers to expand reach and credibility',
'Live Event Social Media Coverage Real-time updates and engagement during events to maximize audience interaction.',
'Multimedia Content Creation Production of high-quality photos, videos, graphics, and articles to tell your brand story.',
'Social Media Management Strategic planning and execution across platforms to maintain consistent brand messaging.',
'Analytics and Reporting In-depth analysis of content performance to inform future strategies.',
'SEO Optimization Enhancing content visibility through search engine optimization techniques.',
'Email Marketing Campaigns Crafting targeted email content to nurture leads and retain customers',
'Community Engagement Building and managing online communities to foster brand loyalty.',
'Content Calendar Planning Organizing and scheduling content releases for consistent audience engagement',
'Social Media & Digital Content We Create and manage content specifically for social media platforms, such as LinkedIn, Tiktok, Instagram, Facebook, Twitter (X) etc. This includes posts, posters, videos, and ads to boost online presence and engagement with your followers.'
]
    },
    {
      id: 7,
      title: 'Public Relations & Strategy Visibility',
      description: `We help businesses build a positive image and manage their reputation. This includes creating communication plans, writing press releases, and handling media relations to ensure that the public views the brand in a favourable way.`,
      icon: Users,
      image: publiceImg,
      features: ['Build and maintain a positive reputation',
                  'Secure media coverage and visibility.',
                  'Cultivate key relationships.',
                  'Effectively manage crises.',
                  'Drive business growth through targeted communication.']
    },
    {
      id: 8,
      title: 'Events Marketing & Visibility',
      description:`We Promote events to attract more attendees and ensure they are visible to the right audience. This includes online promotions, creating marketing materials, and managing event visibility across different channels.`,
      icon: TrendingUp,
      image: eventsimg,
      features: ['Create memorable events.',
'Increase brand awareness and engagement.',
'Drive business growth.',
'Build strategic partnerships.',
'Measure event success.']
    },
        {
      id: 9,
      title: 'Podcasting for Business Growth',
      description: `At Contivibe Media, we help small and medium-sized enterprises (SMEs) unlock the power of podcasting to connect with their audiences, strengthen their brand, and drive measurable business growth. Our Podcast Marketing services are designed to:`,
      icon: TrendingUp,
      image: podcastimg,
      features: ['Set up and optimize your podcast – from choosing the right format to distribution across platforms.',
'Produce compelling podcast content that tells your story and resonates with your target market.',
'Reach new audiences and expand your customer base through engaging audio and video podcasts.',
'Position your business as an industry leader by sharing insights, expertise, and real conversations.',
'Drive business growth with strategic podcasting that supports your sales and marketing goals.',
'Measure podcast performance to refine your approach and boost results',]
    }
  ];