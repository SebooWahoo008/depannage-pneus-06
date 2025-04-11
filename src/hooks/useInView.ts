import { useState, useEffect, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement>({
  threshold = 0.1,
  triggerOnce = false,
  rootMargin = '0px'
}: InViewOptions = {}): {
  ref: RefObject<T>;
  isInView: boolean;
  hasBeenInView: boolean;
} {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView) {
          setIsInView(true);
          setHasBeenInView(true);
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          // Si triggerOnce est vrai et que l'élément a déjà été vu, 
          // on garde isInView à true, sinon on le met à false
          setIsInView(triggerOnce && hasBeenInView ? true : false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin, hasBeenInView]);

  return { ref, isInView, hasBeenInView };
} 