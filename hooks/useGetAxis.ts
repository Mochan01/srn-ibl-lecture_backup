import { useEffect, useState } from "react";
import { Axis } from "../variable_types/Axis";

const getAxis = () => window.innerWidth > window.innerHeight ? "horizontal" : "vertical";

/**
 * window幅とwindow高さ、どちらが大きいか判定する
 * @returns 
 */
export const useGetAxis = () => {

  const [axis, setAxis] = useState<Axis>(getAxis());

  useEffect(() => {
    const fn = () => setAxis(getAxis());
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return axis;
};
