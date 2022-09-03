import React, { FC, Fragment, useContext } from "react";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { Panel } from "../../atoms/Panel/Panel";
import { Narration } from "../../atoms/Narration/Narration";
import { QuizArea } from "../../molecules/QuizArea/QuizArea";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { Timer } from "../../atoms/Timer/Timer";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { StepsFactory } from "../../../factories/StepsFactory";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";

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
  const { setIsRunSeek } = useContext(RunSeekContext);
  const { slideProgress } = useContext(SlideProgressContext);

  const onEnd = () => {
    const stepData = StepsFactory.getNextStepData(slideProgress, currentProgress);

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
