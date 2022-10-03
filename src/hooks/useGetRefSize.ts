import { useEffect, useState, useRef, RefObject } from "react";

/**
 * DOM要素のサイズを取得する
 * @returns [ref, 幅, 高]
 */
export const useGetRefSize = <T>(): [RefObject<T>, number, number] => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const { clientWidth, clientHeight } = ref.current;
    setWidth(clientWidth);
    setHeight(clientHeight);
  }, [ref.current]);

  return [ref, width, height];
};
