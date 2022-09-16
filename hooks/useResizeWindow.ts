import { useEffect, useState } from "react";

export const useResizeWindow = (): [number, number] => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const setWindowSize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    setWindowSize();
    window.addEventListener("resize", setWindowSize);
    return () => window.removeEventListener("resize", setWindowSize);
  }, []);

  return [windowWidth, windowHeight];
};
