
import { useState } from 'react';
import { Download } from 'lucide-react';
import CMS_API_URL from '@/services/constants';

const API_URL = CMS_API_URL + 'public/getpdf';

const DownloadButton = () => {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'done'>('idle');

const handleDownload = async () => {
  setStatus('downloading');

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const link = document.createElement('a');
    link.href = data.file_url;
    link.download = data.file_name || 'contivibe.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();

    setStatus('done');
    setTimeout(() => setStatus('idle'), 2000);
  } catch (error) {
    console.error('Download failed:', error);
    setStatus('idle');
  }
};


  const getLabel = () => {
    switch (status) {
      case 'downloading':
        return 'Downloading...';
      case 'done':
        return 'Downloaded';
      default:
        return 'Portfolio';
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-12 py-3 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center"
    >
      <Download className="mr-4" />
      {getLabel()}
    </button>
  );
};

export default DownloadButton;
