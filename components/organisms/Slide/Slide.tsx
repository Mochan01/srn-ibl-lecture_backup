import React, { FC, Fragment, useContext, useMemo } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step } from "../../atoms/Step/Step";
import { Narration } from "../../atoms/Narration/Narration";
import { QuizArea, QuizAreaProps } from "../../molecules/QuizArea/QuizArea";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { StepsProgressContext } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { StepsFactoryContext } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { Boy } from "../../atoms/Boy/Boy";

export interface SlideProps {
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
}) => {

  const { play } = useContext(PlayContext);
  const { slideProgress } = useContext(SlideProgressContext);
  const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  const stepData = useMemo(() => {
    return stepsFactory.getStepDataPropsBySlide(slideProgress);
  }, [slideProgress]);

  const onEnd = () => {
    const { stepProgress, questions }
      = stepsFactory.getNextStepDataProps(slideProgress, stepsProgress);

    // ステップが終わりだったとき
    if (!stepProgress) return;

    // 解答ステップだったとき
    if (questions) return;

    setStepsProgress(stepProgress);
  };

  return (
    <>
      <Main>
        { stepData.map(({
            image,
            sound,
            boySpeechDuration,
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
              {/**
               * 
              { questions && i <= stepsProgress && 
                <QuizArea
                  questions={ questions }
                  correctIndex={ correctIndex }
                  x={ x }
                  y={ y }
                  width={ width }
                  height={ height } /> }
               * 
               */}
              { play && i === stepsProgress && !boySpeechDuration &&
                <Narration sound={ sound } onEnd={ onEnd } /> }
              { play && i === stepsProgress && boySpeechDuration &&
                <Boy boySpeechDuration={ boySpeechDuration } onEnd={ onEnd } /> }
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
