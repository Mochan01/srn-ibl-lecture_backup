import React, { FC, Fragment, useContext } from "react";
import styled from "styled-components";
import { Panel } from "../../atoms/Panel/Panel";
import { Narration } from "../../providers/Narration/Narration";
import { QuizArea } from "../../molecules/QuizArea/QuizArea";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { Timer } from "../../providers/Timer/Timer";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";

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
  const factory = useContext(FactoryContext);

  const onEnd = () => {
    const stepData = factory.getNextStepData(slideProgress, currentProgress);

    // スライドが終わりだったとき
    // レクチャーが終わりだったとき
    if (!stepData) {
      setIsRunSeek(false);
      return;
    }

    setStepList({ type: "ADD", stepList: [stepData] });
  };

  return (
    <>
      <Main>
        { stepList && stepList.map(({
            image,
            motion1,
            motion2,
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

          const isOver = i <= currentProgress;
          const isEqual =  i === currentProgress;
          
          return (
            <Fragment key={ `${ slideProgress }_${ i }` }>
              { isOver && <Panel { ...{ image, motion1, motion2 } } /> }
              { play && isEqual && sound && <Narration { ...{ sound } } /> }
              { play && isEqual && <Timer { ...{ onEnd, duration } } /> }
              { questions && isOver && 
                <Panel { ...{ motion1, motion2 } }>
                  <QuizArea
                    touchedEnable={ true }
                    questions={ questions }
                    correctIndex={ correctIndex }
                    x={ x }
                    y={ y }
                    width={ width }
                    height={ height } />
                </Panel> }
            </Fragment>
          );
        }) }
      </Main>
    </>
  );
};
