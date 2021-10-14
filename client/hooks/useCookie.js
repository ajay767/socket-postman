import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function useCookie(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storageValue = Cookies.get(key);
    if (storageValue) return storageValue;
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    Cookies.set(key, value);
  }, [key, value]);

  return [value, setValue];
}
