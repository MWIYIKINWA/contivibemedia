import { useEffect } from 'react';

const useBlockMouseEvents = () => {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      // Allow right-click only on input elements or textareas
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      e.preventDefault(); // Block right-click (context menu)
    };

    const blockLeftClick = (e: MouseEvent) => {
      // Allow left-click on input elements or textareas
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.button === 0) {
        // Left-click
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const blockKeys = (e: KeyboardEvent) => {
      // Allow keys in inputs, textareas, etc.
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Block Ctrl+C, Ctrl+U, and Ctrl+S outside of input areas
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
