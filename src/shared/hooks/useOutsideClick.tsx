import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: (value: boolean) => void) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log('render');
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
