import React, { useCallback, useContext, useMemo, useState } from "react";
import styled from "styled-components";
import { QuizAnswerBtn, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList";
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";
import { SIZE } from "../../../data/SIZE";
const Main = styled.div.attrs(({ $x, $y, $width, $height }) => ({
    style: {
        transform: `scale(${$width}%, ${$height}%)`,
        left: `${$x}%`,
        top: `${$y}%`
    }
})) `
  position: absolute;
  transform-origin: left top;
  display: grid;
  grid-template-columns: ${SIZE.QUIZ_Q_BTN_W}px ${SIZE.QUIZ_Q_BTN_W}px;
  grid-template-rows:
    ${SIZE.QUIZ_Q_BTN_H}px
    ${SIZE.QUIZ_Q_BTN_H}px
    ${({ isMaxLen }) => isMaxLen && `${SIZE.QUIZ_A_BTN_H}px`};
  column-gap: ${SIZE.QUIZ_COLUMN_G}px;
  row-gap: ${SIZE.QUIZ_ROW_G}px;
`;
const AnswerBtnWrapper = styled.div `
  justify-self: ${({ isMaxLen }) => isMaxLen ? "center" : "end"};
  align-self: end;
  ${({ isMaxLen }) => isMaxLen && `
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  `}
`;
export const QuizArea = ({ questions, correctIndex, $x, $y, $width, $height }) => {
    // 選択ボタン 状態管理
    const [chooseIndex, setChooseIndex] = useState();
    const choiceClickHandler = i => {
        setChooseIndex(i);
        setAnswered(false);
    };
    // 解答ボタン 状態管理
    const [isAnswered, setAnswered] = useState();
    const { setPlay } = useContext(PlayContext);
    const { slideProgress } = useContext(SlideProgressContext);
    const factory = useContext(FactoryContext);
    const { currentProgress, stepList, setStepList } = useGetStepList();
    const props = {
        len: questions.length,
        mutation: typeof isAnswered === "boolean"
            ? (isAnswered ? QUIZ_ANSWER_BTN.RED : QUIZ_ANSWER_BTN.WHITE)
            : QUIZ_ANSWER_BTN.GRAY,
        onClick: useCallback(() => {
            setAnswered(true);
            setPlay(true);
            const [correct, inCorrect] = factory.getNextStepDataOnQuiz(slideProgress, stepList[stepList.length - 1].stepProgress);
            setStepList({
                type: "ADD",
                stepList: [chooseIndex === correctIndex ? correct : inCorrect]
            });
        }, [slideProgress, currentProgress, chooseIndex])
    };
    // 選択肢が4択の場合と３択の場合を出し仕分け
    const isMaxLen = useMemo(() => questions.length === 4, [questions]);
    return (React.createElement(Main, Object.assign({ "$width": calcRatio(SIZE.QUIZ_AREA_W, $width), "$height": calcRatio(isMaxLen ? SIZE.QUIZ_AREA_FOUR_H : SIZE.QUIZ_AREA_TREE_H, $height), "$x": calcRatio(SIZE.W, $x), "$y": calcRatio(SIZE.H, $y) }, { isMaxLen }),
        questions.map((x, i) => (React.createElement(QuizChoiceBtn, { key: i, mutation: chooseIndex === i
                ? QUIZ_CHOICE_BTN.ORANGE
                : QUIZ_CHOICE_BTN.WHITE, onClick: () => choiceClickHandler(i), isCorrect: isAnswered ? i === correctIndex : null }, x))),
        React.createElement(AnswerBtnWrapper, Object.assign({}, { isMaxLen }),
            React.createElement(QuizAnswerBtn, Object.assign({}, props)))));
};
const calcRatio = (fullSize, size) => {
    let percentage = size / fullSize;
    percentage = percentage * 100;
    percentage = Math.floor(percentage);
    return percentage;
};
//# sourceMappingURL=QuizArea.js.map