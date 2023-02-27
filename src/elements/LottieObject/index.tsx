import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import { SIZE } from "../../data/SIZE";

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

  useEffect(() => {
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

  return <div {...{ ref }} {...props} />;
};
