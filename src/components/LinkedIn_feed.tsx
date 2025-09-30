import React from 'react';

const LinkedInWidget: React.FC = () => {
  return (
    <div className='m-16' style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
      <iframe
        src="https://www.juicer.io/api/feeds/contivibemedia/iframe"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
        loading="lazy"
        title="LinkedIn Feed"
      ></iframe>
    </div>
  );
};


export default LinkedInWidget;
