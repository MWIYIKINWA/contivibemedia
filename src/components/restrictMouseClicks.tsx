import { useEffect } from 'react';

const useBlockMouseEvents = () => {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // Block right-click (context menu)
    };

    const blockLeftClick = (e: MouseEvent) => {
      if (e.button === 0) {
        // Left-click
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const blockKeys = (e: KeyboardEvent) => {
      if (e.ctrlKey && ['c', 'u', 's'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('mousedown', blockLeftClick);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('mousedown', blockLeftClick);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);
};

export default useBlockMouseEvents;
