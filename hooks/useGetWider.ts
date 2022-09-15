import { useEffect, useState } from "react";

const getWider = () => window.innerWidth > window.innerHeight ? "width" : "height";

/**
 * window幅とwindow高さ、どちらが大きいか判定する
 * @returns 
 */
export const useGetWider = () => {

  const [wider, setWider] = useState<"width" | "height">(getWider());

  useEffect(() => {
    const fn = () => setWider(getWider());
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return wider;
};
