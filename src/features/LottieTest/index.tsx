import React, { FC, useEffect } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import { LottieObject } from "../../elements/LottieObject";
import { lottiePath } from "../../data/lottiePath";

export interface LottieTestProps {
  path: string;
  name?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
}

const Main = styled.div`
  position: relative;
  & > div {
    position: absolute;
  }
`;

/**
 * https://www.npmjs.com/package/lottie-web
 */
export const LottieTest: FC<LottieTestProps> = ({
  path,
  name,
  autoplay = false,
  loop = false,
  ...props
}) => {
  useEffect(() => {
    lottie.play("object1");

    setTimeout(() => {
      lottie.play("object2");
    }, 1000);
  }, []);

  return (
    <Main>
      <LottieObject path={lottiePath["tesuto.json"]} name="object1" />
      <LottieObject path={lottiePath["tesuto2.json"]} name="object2" />
    </Main>
  );
};
