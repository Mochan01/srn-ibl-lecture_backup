import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { Narration, NarrationProps } from "../../atoms/Narration/Narration";

export type StepNarrationProps = StepProps & NarrationProps;

export interface SlideProps {
  steps: StepNarrationProps[];
  stepsProgress: number;
  play: boolean;
}

const Main = styled(SwiperSlide)`
  & > div {
    &:first-child {
      position: static;
    }
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const Slide: FC<SlideProps> = ({
  steps,
  stepsProgress,
  play
}) => {
  return (
    <>
      <Main>
        { /** ステップに応じて描画 */ }
        { steps.map(({ image, sound }, i) => {
          if (i > stepsProgress) return;
          return <Fragment key={ i }>
            { i <= stepsProgress && <Step image={ image } /> }
            { play && i === stepsProgress &&
              <Narration sound={ sound } /> }
          </Fragment>;
        }) }
      </Main>
    </>
  );
};
