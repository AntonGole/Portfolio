import { useEffect, useState } from "react";

export const useParallax = (speed: number = 5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY / speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return {
    style: {
      transform: `translateY(${offsetY}px)`,
      transition: "transform 0.1s ease-out",
    },
  };
};
