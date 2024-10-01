import { useRef } from "react";

export const useThrottle = (callback: () => void, delay: number) => {
  const lastTime = useRef(0);

  const throttle = () => {
    let now = Date.now();

    if (now - lastTime.current >= delay) {
      callback();
      lastTime.current = Date.now();
    }
  };

  return throttle;
};
