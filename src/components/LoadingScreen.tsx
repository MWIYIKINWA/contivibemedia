import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import heroImage from '@/assets/images/mainback.webp';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;
    let isComplete = false;

    // Preload hero image
    const img = new Image();
    img.src = heroImage;

    const updateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress >= 90 && !isComplete) {
          return 90; 
        }
        if (isComplete && prevProgress >= 100) {
          return 100;
        }
        return Math.min(prevProgress + Math.random() * 8, isComplete ? 100 : 90);
      });
    };

    progressTimer = setInterval(updateProgress, 120);

    const handleLoadComplete = () => {
      if (isComplete) return;
      isComplete = true;
      
      // Complete the progress
      const completeTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(completeTimer);
            setTimeout(onLoadingComplete, 300);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    };

    // Wait for both window load and hero image load
    const checkAllLoaded = () => {
      const windowLoaded = document.readyState === 'complete';
      const imageLoaded = img.complete && img.naturalHeight !== 0;
      
      if (windowLoaded && imageLoaded) {
        handleLoadComplete();
      }
    };

    // Check immediately
    checkAllLoaded();

    // Listen for window load
    window.addEventListener('load', checkAllLoaded);
    
    // Listen for hero image load
    img.addEventListener('load', checkAllLoaded);
    img.addEventListener('error', handleLoadComplete); // Complete even if image fails

    return () => {
      clearInterval(progressTimer);
      window.removeEventListener('load', checkAllLoaded);
      img.removeEventListener('load', checkAllLoaded);
      img.removeEventListener('error', handleLoadComplete);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md w-full px-6">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary font-roboto">
            Contivibe Media
          </h1>
          <p className="text-muted-foreground">
            We Capture Moments & Transform them into Brand Impact
          </p>
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <div className="text-6xl font-bold text-primary tabular-nums">
            {Math.round(progress)}%
          </div>
          <Progress value={progress} className="w-full h-2" />
        </div>

        {/* Loading text */}
        <div className="text-sm text-muted-foreground">
          Loading your creative experience...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;