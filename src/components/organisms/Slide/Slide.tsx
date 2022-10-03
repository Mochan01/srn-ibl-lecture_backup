import React, { FC, Fragment, useContext } from "react";
import styled from "styled-components";
import { Panel } from "../../atoms/Panel/Panel";
import { QuizArea } from "../../molecules/QuizArea/QuizArea";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";
import { ProgressionTrigger } from "../../providers/ProgressionTrigger/ProgressionTrigger";
import { IsSlideEndContext } from "../../providers/IsSlideEndProvider/IsSlideEndProvider";
import { IsStepEndContext } from "../../providers/IsStepEndProvider/IsStepEndProvider";

export interface SlideProps {
}

const Main = styled.div`
  & > div {
    &:first-child {
      position: static;
    }
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Slide: FC<SlideProps> = ({
}) => {

  const { stepList, setStepList, currentProgress } = useGetStepList();

  const { play } = useContext(PlayContext);
  const { setIsRunSeek } = useContext(RunSeekContext);
  const { slideProgress } = useContext(SlideProgressContext);
  const { setIsSlideEnd } = useContext(IsSlideEndContext);
  const { setIsStepEnd } = useContext(IsStepEndContext);
  const factory = useContext(FactoryContext);

  const onLoad = () => {
    setIsRunSeek(true);
  };

  const onUnMount = () => {
    setIsRunSeek(false);
    setIsSlideEnd(false);
    setIsStepEnd(false);
  };

  const onEnd = () => {
    setIsRunSeek(false);
    const [stepData, trigger] = factory.getNextStepData(slideProgress, currentProgress);

    if (!stepData) {

      if (trigger !== "on_answer") {
        const isLectureEnd = factory.slides.length - 1 <= slideProgress;
        setIsSlideEnd(isLectureEnd);
        setIsStepEnd(!isLectureEnd);
      }
      return;
    }

    setStepList({ type: "ADD", stepList: [stepData] });
  };

  const { setPlay } = useContext(PlayContext);

  const onAnswer = (isCorrect: boolean) => {
    setPlay(true);

    const [correct, inCorrect] = factory.getNextStepDataOnQuiz(
      slideProgress,
      stepList[stepList.length - 1].stepProgress
    );

    setStepList({ type: "ADD", stepList: [isCorrect ? correct : inCorrect] });
  }

  return (
    <>
      <Main>
        { stepList && stepList.map(({
            image,
            motion1,
            motion2,
            sound,
            duration,
            stepProgress,
            questions,
            correctIndex,
            $x,
            $y,
            $width,
            $height
          }) => {

          const isOver = stepProgress <= currentProgress;
          const isEqual =  stepProgress === currentProgress;

          return (
            <Fragment key={ `${ slideProgress }_${ stepProgress }` }>
              { isOver && <Panel { ...{ image, motion1, motion2 } } /> }
              { play && isEqual &&
                <ProgressionTrigger { ...{ sound, duration, onLoad, onUnMount, onEnd } } /> }
              { questions.length && isOver && 
                <Panel { ...{ motion1, motion2 } }>
                  <QuizArea { ...{ questions, correctIndex, $x, $y, $width, $height, onAnswer } } />
                </Panel> }
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
