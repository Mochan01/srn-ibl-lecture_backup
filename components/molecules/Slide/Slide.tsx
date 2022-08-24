import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { useStepProgress } from "../../../hooks/useStepProgress";
import { StepsProgressContext } from "../../providers/Context/Context";

export interface SlideProps {
  steps: StepProps[];
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
  useEffect(() => {
    setStepsProgress(nextStep);
  }, [nextStep]);

  return (
    <>
      <Main>
        { /** stepに応じて描画 */ }
        { steps.map(({ $src }, i) => {
          if (i > stepsProgress) return;
          return <Step key={ i } $src={ $src } />;
        }) }
      </Main>
    </>
  );
};
