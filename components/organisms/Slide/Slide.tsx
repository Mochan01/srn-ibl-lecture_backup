import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step, StepProps } from "../../atoms/Step/Step";
import { Narration, NarrationProps } from "../../atoms/Narration/Narration";
import { QuizArea, QuizAreaProps } from "../../molecules/QuizArea/QuizArea";

export type StepDataProps = StepProps & NarrationProps & QuizAreaProps;

export interface SlideProps {
  steps: StepDataProps[];
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
        { steps.map(({
            image,
            sound,
            questions,
            correctIndex,
            x,
            y,
            width,
            height
          }, i) => {
  
          // ステップに応じて描画 
          if (i > stepsProgress) return;

          return (
            <Fragment key={ i }>
              { i <= stepsProgress && <Step image={ image } /> }
              { questions && i <= stepsProgress && 
                <QuizArea
                  questions={ questions }
                  correctIndex={ correctIndex }
                  x={ x }
                  y={ y }
                  width={ width }
                  height={ height } /> }
              { play && i === stepsProgress &&
                <Narration sound={ sound } /> }
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
