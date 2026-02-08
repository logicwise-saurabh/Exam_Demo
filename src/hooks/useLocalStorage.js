import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return initialValue;
    } else {
      return JSON.parse(storedValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
