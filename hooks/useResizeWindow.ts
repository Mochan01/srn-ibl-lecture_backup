import { useEffect, useState } from "react";

export const useResizeWindow = (): [number, number] => {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const setWindowSize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  }, []);

  return [windowWidth, windowHeight];
};
