import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import GoogleReviewsWidget from 'google-reviews-widget';

const GoogleRatingSection = () => {
  // Sample reviews - replace with actual Google Business reviews
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Contivibe Media exceeded our expectations! Their video production quality is outstanding and the team was professional throughout the entire process.",
      date: "2 weeks ago",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "Amazing work on our marketing campaign. The creative team really understood our vision and delivered beyond what we imagined.",
      date: "1 month ago",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      rating: 5,
      text: "Professional, creative, and reliable. Contivibe Media helped us tell our story in a way that truly connects with our audience.",
      date: "2 months ago",
      avatar: "LR"
    }
  ];

  const handleRateUs = () => {
    // Replace with actual Google Business profile URL
    const googleBusinessUrl = "https://g.page/r/CXjJo-5_qlvDEAI/review";
    window.open(googleBusinessUrl, '_blank');
  };

  const handleViewAllReviews = () => {
    // Replace with actual Google Business profile URL
    const googleBusinessUrl = "https://www.google.com/search?sca_esv=37b289db0e7768a1&rlz=1C1FKPE_enUG1128UG1128&sxsrf=AE3TifNtSJ8Ns8cDM7IbyIFnmSx6CFOueQ:1758089185984&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3ba4jaRTE3dMAo-rOva4kQlQk8diYGS1mAF7oE8OgH2rRaq0CyVCJyun8xtB52oU5YaJr_6NjTej93jzzdJ_2E4x30E&q=Contivibe+Media+Reviews&sa=X&ved=2ahUKEwjhxqfLkN-PAxVYYEEAHTzTGUUQ0bkNegQIMhAE&biw=1153&bih=552&dpr=1#lrd=";
    window.open(googleBusinessUrl, '_blank');
  };

  return (
    <section className="py-4 lg:py-2 bg-background font-roboto my-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="w-8 h-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Google Reviews
            </h2>
          </div>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-foreground">5.0</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-6 h-6 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
            </div>
            <div className="text-muted-foreground">
              <p className="text-lg">Based on 19 reviews</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-2">
            <Button 
              onClick={handleRateUs}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Rate Us on Google
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleViewAllReviews}
              size="lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              View All Reviews
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

         {/* <div className="my-10 mx-10">
            <GoogleReviewsWidget instanceId="MA1CjXyxV7VHlHySq1t6" />
         </div> */}

        </div>


      </div>
    </section>
  );
};

export default GoogleRatingSection;