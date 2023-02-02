import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";

export interface LottieObjectProps {
  path: string;
  name?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

const Main = styled.div``;

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

  return <Main {...{ ref }} {...props} />;
};
