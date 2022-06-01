import { useEffect, useRef, useState } from 'react';

const useInview = (rootMargin = '0px') => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const checkInView = ([entry]) => setVisible(entry.isIntersecting);
    const options = {
      root: null,
      rootMargin: rootMargin,
      threshold: 1,
    };
    const observeVisible = new IntersectionObserver(checkInView, options);
    element && observeVisible.observe(element);
    return () => element && observeVisible.unobserve(element);
  }, [rootMargin]);

  return [visible, ref];
};

export default useInview;
