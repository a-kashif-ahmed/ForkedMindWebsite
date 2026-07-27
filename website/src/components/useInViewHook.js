import { useEffect, useRef, useState } from "react";
export const useInView = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setVisible(true);
          });
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};