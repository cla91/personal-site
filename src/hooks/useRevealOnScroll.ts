import { useEffect, useRef } from "react";

export default function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.classList.add("reveal");

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
          obs.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(element);

    return () => obs.disconnect();
  }, []);

  return ref;
}
