import { useEffect, useState } from "react";

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}

export const useResizeWindow = (): WindowSize => {

  const [size, setSize] = useState<WindowSize>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  });

  useEffect(() => {
    const fn = () => setSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    });
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return size;
};
