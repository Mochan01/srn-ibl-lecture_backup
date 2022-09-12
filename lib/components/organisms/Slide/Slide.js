import React, { Fragment, useContext } from "react";
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
const Main = styled.div `
  & > div {
    &:first-child {
      position: static;
    }
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const Slide = ({}) => {
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Main, null, stepList && stepList.map(({ image, motion1, motion2, sound, duration, stepProgress, questions, correctIndex, $x, $y, $width, $height }) => {
            const isOver = stepProgress <= currentProgress;
            const isEqual = stepProgress === currentProgress;
            return (React.createElement(Fragment, { key: `${slideProgress}_${stepProgress}` },
                isOver && React.createElement(Panel, Object.assign({}, { image, motion1, motion2 })),
                play && isEqual &&
                    React.createElement(ProgressionTrigger, Object.assign({}, { sound, onEnd, duration, onLoad, onUnMount })),
                questions.length && isOver &&
                    React.createElement(Panel, Object.assign({}, { motion1, motion2 }),
                        React.createElement(QuizArea, Object.assign({}, { questions, correctIndex, $x, $y, $width, $height })))));
        }))));
};
//# sourceMappingURL=Slide.js.map