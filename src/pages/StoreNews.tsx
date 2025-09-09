import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Eye, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import heroBg from '@/assets/images/header1.webp';
import {  featuredPost,categories,blogPosts} from '@/services/getnews'
import WhatsAppChat from '@/components/whatsapp';
import ScrollToTop from '@/components/scroll_to_top';
import { Link } from 'react-router-dom';

const StoreNews = () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Sector News' }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

 



 

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppChat/>
      <ScrollToTop/>
      <PageHeader 
        title="Sector News" 
        breadcrumbs={breadcrumbs}
        backgroundImage={heroBg}
      />
      <main>
        {/* Hero Section */}
       

      

        {/* Categories Filter */}
        {/* <section className="pt-4 pb-2 bg-muted/30">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section> */}

        {/* Featured Post */}
        <section className="py-10 font-roboto">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured news article</h2>
            </div>

            <Link to={`/news/${featuredPost.id}`}>
                        <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>
                    
                   <Link to={`/news/${featuredPost.id}`}>
                      <Button className="bg-primary text-primary-foreground hover:bg-brand-red-hover">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                   </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
            </Link>

          </div>
        </section>


           <div className="container-custom my-6">
            <div className="max-w-4xl mx-auto text-center">            
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

        {/* Blog Posts Grid */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background font-roboto">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link to={`/news/${post.id}`}>
                 <Card 
                  key={post.id}
                  className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:bg-primary hover:text-primary-foreground p-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {/* <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                Load More Articles
              </Button>
            </div> */}
          </div>
        </section>

      
    
      </main>

      <Footer />
    </div>
  );
};

export default StoreNews;