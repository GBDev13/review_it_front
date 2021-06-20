import { useRef } from 'react';

export default function useDebounce(fn: (arg?: any) => any, delay: number) {
  const timeoutRef = useRef(null);

  function debouncedFn(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
