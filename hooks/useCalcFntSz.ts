import { useEffect, useRef, useState, RefObject } from "react";

/**
 * コンテナサイズを元に、ウインドウリサイズごとに現在のフォントサイズを計算する
 * @param strLen 1行にいくつ文字を置くか
 * @returns [ ref, フォントサイズ ]
 */
export const useCalcFntSz = (strLen: number): [RefObject<HTMLDivElement>, number] => {

  const [fz, setFz] = useState(16);
  const ref = useRef<HTMLDivElement>(null);

  // 文字サイズ計算
  useEffect(() => {

    const changeFz = () => {
      // offsetWidthは小数点とれないため1px分補正
      setFz(ref.current!.offsetWidth * ((100 / strLen) / 100) - 1);
    };

    changeFz();

    window.addEventListener("resize", changeFz);
    return () => window.removeEventListener("resize", changeFz);
  }, [ref.current]);


  return [ref, fz];
};
