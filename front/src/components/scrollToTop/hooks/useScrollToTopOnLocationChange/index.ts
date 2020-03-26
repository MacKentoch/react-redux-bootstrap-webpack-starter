import { useRef, useEffect } from 'react';
import { Location } from 'history';

export function useScrollToTopOnLocationChange(location: any) {
  const prevLocation = useRef<Location | null>(null);

  useEffect(() => {
    prevLocation.current = location;
  }, []);

  useEffect(() => {
    if (prevLocation.current !== location) {
      window && window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);
}
