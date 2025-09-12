import { useState } from 'react';
import { Download } from 'lucide-react';

const DownloadButton = ({ path }: { path: string }) => {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    setStatus('downloading');

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = path;
      link.download = 'contivibe.pdf';
      link.click();

      setStatus('done');

      setTimeout(() => setStatus('idle'), 2000);
    }, 3000);
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
      className="px-10 py-3 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground hover:text-primary-foreground transition-colors duration-300 font-roboto flex"
    >
      <Download className="mr-4" />
      {getLabel()}
    </button>
  );
};

export default DownloadButton;
