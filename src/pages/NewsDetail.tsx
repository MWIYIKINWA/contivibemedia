import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Eye, ArrowLeft, Share } from 'lucide-react';
import heroBg from '@/assets/images/header1.webp';
import { featuredPost, categories, blogPosts } from '@/services/getnews';
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import PageHeader from '@/components/ui/PageHeader';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Combine featured post and blog posts to search through all
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find(p => p.id.toString() === id);
  
  // If post not found, show error message
  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <WhatsAppChat />
        <ScrollToTop />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/news">Back to News</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Sector News', href: '/store-news' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat />
      <ScrollToTop />
      
      {/* Page Header */}
          <PageHeader 
        title={post.title} 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />

      <main>
        {/* Article Content */}
        <section className="py-12 font-roboto">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Button variant="outline" asChild className="mb-8">
                <Link to="/store-news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to News
                </Link>
              </Button>
              
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center justify-between">
                  <Badge variant="secondary">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </Badge>
                <Badge variant="secondary" className='bg-primary text-white'>
                    By {post.author}
                  </Badge>
                  <small className='font-sans'>{post.date}</small>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* In a real app, this would be the full content from the post */}
                <div className="space-y-4">
                  {/* <p>
                    In today's fast-paced digital world, non-governmental organizations (NGOs) face an increasingly complex challenge: how to effectively reach their target audiences, inspire action, and secure funding to support their mission. The solution lies in strategic media engagement that amplifies your message and extends your reach.
                  </p> */}
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="text-sm font-medium mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container-custom">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Card key={relatedPost.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/news/${relatedPost.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;