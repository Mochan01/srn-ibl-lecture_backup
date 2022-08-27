import React, { FC, useContext, useEffect, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { useStepProgress } from "../../../hooks/useStepProgress";
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

  const nextStep = useStepProgress(steps.length);

  // 進捗の状態管理
  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  useEffect(() => setStepsProgress(nextStep), [nextStep]);

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
