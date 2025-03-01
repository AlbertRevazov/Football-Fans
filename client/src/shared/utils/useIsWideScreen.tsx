import { useEffect, useState } from 'react';

export const useIsWideScreen = () => {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 768);
    };

    if (typeof window !== 'undefined') {
      setIsWide(window.innerWidth > 768);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isWide;
};
