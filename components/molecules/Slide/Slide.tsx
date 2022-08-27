import React, { FC, useContext, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { Narration, NarrationProps } from "../../atoms/Narration/Narration";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";

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

  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { play } = useContext(PlayContext);

  // 音声が終わったら次のステップに進む
  const onEnd = () => {
    setStepsProgress(s => s + 1);
  };

  return (
    <>
      <Main>
        { /** ステップに応じて描画 */ }
        { steps.map(({ image, sound }, i) => {
          if (i > stepsProgress) return;
          return <Fragment key={ i }>
            { i <= stepsProgress && <Step image={ image } /> }
            { play && i === stepsProgress &&
              <Narration sound={ sound } onEnd={ onEnd } /> }
          </Fragment>;
        }) }
      </Main>
    </>
  );
};
