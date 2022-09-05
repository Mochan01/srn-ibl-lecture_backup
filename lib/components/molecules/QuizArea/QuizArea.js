import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { QuizAnswerBtn, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { StepsFactory } from "../../../factories/StepsFactory";
import { RunSeekContext } from "../../providers/RunSeekProvider/RunSeekProvider";
const Main = styled.div.attrs(({ x, y, width, height }) => ({
    style: {
        transform: `translate(${x}%, ${y}%) scale(${width}%, ${height}%)`
    }
})) `
  pointer-events: ${({ touchedEnable }) => touchedEnable ? "auto" : "none"};
  position: absolute;
  transform-origin: left top;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 24px;
`;
const AnswerBtnWrapper = styled.div `
  justify-self: ${({ len }) => len === 4 ? "center" : "end"};
  align-self: end;
  ${({ len }) => len === 4 && `
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  `}
`;
export const QuizArea = ({ questions, correctIndex, x = 0, y = 0, width = 100, height = 100 }) => {
    // 選択ボタン 状態管理
    const [chooseIndex, setChooseIndex] = useState();
    const choiceClickHandler = i => {
        setChooseIndex(i);
        setAnswered(false);
    };
    // 解答ボタン 状態管理
    const [isAnswered, setAnswered] = useState();
    const { setPlay } = useContext(PlayContext);
    const { setIsRunSeek } = useContext(RunSeekContext);
    const { slideProgress } = useContext(SlideProgressContext);
    const { currentProgress, stepList, setStepList } = useGetStepList();
    const props = {
        len: questions.length,
        mutation: typeof isAnswered === "boolean"
            ? (isAnswered ? QUIZ_ANSWER_BTN.RED : QUIZ_ANSWER_BTN.WHITE)
            : QUIZ_ANSWER_BTN.GRAY,
        onClick: useCallback(() => {
            setAnswered(true);
            setPlay(true);
            setIsRunSeek(true);
            const [correct, inCorrect] = StepsFactory.getNextStepDataOnQuiz(slideProgress, stepList[stepList.length - 1].stepProgress);
            setStepList({
                type: "ADD",
                stepList: [chooseIndex === correctIndex ? correct : inCorrect]
            });
        }, [slideProgress, currentProgress, chooseIndex])
    };
    return (React.createElement(Main, Object.assign({ touchedEnable: !isAnswered }, { x, y, width, height }),
        questions.map((x, i) => (React.createElement(QuizChoiceBtn, { key: i, mutation: chooseIndex === i
                ? QUIZ_CHOICE_BTN.ORANGE
                : QUIZ_CHOICE_BTN.WHITE, onClick: () => choiceClickHandler(i), isCorrect: isAnswered ? i === correctIndex : null }, x))),
        React.createElement(AnswerBtnWrapper, { len: questions.length },
            React.createElement(QuizAnswerBtn, Object.assign({}, props)))));
};
//# sourceMappingURL=QuizArea.js.map