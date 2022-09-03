import React, { FC, Fragment, useContext } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Step } from "../../atoms/Step/Step";
import { Narration } from "../../atoms/Narration/Narration";
import { QuizArea } from "../../molecules/QuizArea/QuizArea";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { Boy } from "../../atoms/Boy/Boy";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { StepsFactory } from "../../../factories/StepsFactory";

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
  const { stepList, setStepList, currentProgress } = useGetStepList();
  const { slideProgress } = useContext(SlideProgressContext);

  const onEnd = () => {
    const stepData = StepsFactory.getNextStepData(slideProgress, currentProgress);
    if (!stepData) return;

    setStepList(s => [...s, stepData]);
  };

  return (
    <>
      <Main>
        { stepList && stepList.map(({
            image,
            sound,
            duration,
            talking,
            questions,
            correctIndex,
            x,
            y,
            width,
            height
          }, i) => {

          const currentProgress = stepList[stepList.length - 1].stepProgress;

          return (
            <Fragment key={ i }>
              { i <= currentProgress && <Step image={ image } /> }
              { questions && i <= currentProgress && 
                <QuizArea
                  questions={ questions }
                  correctIndex={ correctIndex }
                  x={ x }
                  y={ y }
                  width={ width }
                  height={ height } /> }
              { play && i === currentProgress && talking === "teacher" &&
                <Narration { ...{ sound, onEnd, duration } } /> }
              { play && i === currentProgress && talking === "boy" &&
                <Boy { ...{ onEnd, duration } } /> }
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
