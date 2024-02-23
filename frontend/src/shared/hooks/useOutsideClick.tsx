import { useEffect, useRef } from 'react';

/**
 * Custom React hook to detect clicks outside a specified element
 * @param {function} callback - Function to be called when outside click is detected
 * @returns Reference to the DOM element that triggers the outside click
 */

const useOutsideClick = (callback: (value: boolean) => void) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
  return ref;
};

export default useOutsideClick;
