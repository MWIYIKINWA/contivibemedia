import React, { useEffect } from 'react';

const ElfsightSocialFeed: React.FC = () => {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-78b27775-2fc9-4b58-9798-a77ea61b8aa1"
      data-elfsight-app-lazy
    />
  );
};

export default ElfsightSocialFeed;
