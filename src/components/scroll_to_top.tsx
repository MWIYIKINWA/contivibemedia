
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '110px',
            right: '30px',
            padding: '15px 15px',
            fontSize: '18px',
            backgroundColor: '#e6262c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <ArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
