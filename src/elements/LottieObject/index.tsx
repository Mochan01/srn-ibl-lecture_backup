import React, { FC, useEffect, useRef } from "react";
import lottie from "lottie-web";

export interface LottieObjectProps {
  path: string;
  name?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

/**
 * https://www.npmjs.com/package/lottie-web
 */
export const LottieObject: FC<LottieObjectProps> = ({
  path,
  name,
  autoplay = false,
  loop = false,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const render = useRef(false);

  useEffect(() => {
    // useEffect走るたびに無限にlottieオブジェクトが追加されるので阻止すること
    if (render.current) return;
    render.current = true;

    ref.current &&
      lottie.loadAnimation({
        container: ref.current, // the dom element that will contain the animation
        renderer: "svg",
        path, // the path to the animation json,
        name,
        autoplay,
        loop,
      });
  }, [ref, path, name, autoplay, loop]);

  return <div {...{ ...props, ref }} />;
};
