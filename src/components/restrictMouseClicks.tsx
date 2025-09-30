import { useEffect } from 'react';

const useBlockMouseEvents = () => {
  useEffect(() => {
    const isAllowedTarget = (target: EventTarget | null): boolean => {
      if (!(target instanceof HTMLElement)) return false;

      return (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement || // Native dropdowns
        target.closest('.dropdown') !== null || // Custom dropdowns by class
        target.getAttribute('role') === 'combobox' // ARIA role for dropdowns
      );
    };

    const blockContextMenu = (e: MouseEvent) => {
      if (isAllowedTarget(e.target)) return;
      e.preventDefault();
    };

    const blockLeftClick = (e: MouseEvent) => {
      if (isAllowedTarget(e.target)) return;
      if (e.button === 0) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const blockKeys = (e: KeyboardEvent) => {
      if (isAllowedTarget(e.target)) return;
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
