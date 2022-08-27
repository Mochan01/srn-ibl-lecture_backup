import React, { FC, useContext, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { Narration, NarrationProps } from "../../atoms/Narration/Narration";

export type StepNarrationProps = StepProps & NarrationProps;

export interface SlideProps {
  steps: StepNarrationProps[];
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
  steps
}) => {

  const { stepsProgress } = useContext(StepsProgressContext);

  return (
    <>
      <Main>
        { /** stepに応じて描画 */ }
        { steps.map(({ image, sound }, i) => {
          if (i > stepsProgress) return;
          return <Fragment key={ i }>
            { i <= stepsProgress && <Step image={ image } /> }
            { i === stepsProgress && <Narration sound={ sound } /> }
          </Fragment>;
        }) }
      </Main>
    </>
  );
};
