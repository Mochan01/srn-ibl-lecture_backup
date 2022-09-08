import React, { FC, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { StepProps } from "../../../variable_types/StepProps";
import { QuizAnswerBtn, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { useGetStepList } from "../../../hooks/useGetStepList"
import { FactoryContext } from "../../providers/FactoryProvider/FactoryProvider";
import { SIZE } from "../../../data/SIZE";

export interface QuizAreaProps extends ContainerProps {
  questions: StepProps["questions"];
  correctIndex: StepProps["correctIndex"];
}

interface ContainerProps {
  x?: StepProps["x"];
  y?: StepProps["y"];
  width?: StepProps["width"];
  height?: StepProps["height"];
  touchedEnable: boolean;
}

const Main = styled.div.attrs<ContainerProps>(
  ({ x, y, width, height }) => ({
    style: {
      transform: `translate(${ x }%, ${ y }%) scale(${ width }%, ${ height }%)`
    }
  })
)<ContainerProps>`
  pointer-events: ${ ({ touchedEnable }) => touchedEnable ? "auto" : "none" };
  position: absolute;
  transform-origin: left top;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: ${ SIZE.QUIZ_Q_BTN_W }px ${ SIZE.QUIZ_Q_BTN_W }px;
  grid-template-rows: ${ SIZE.QUIZ_Q_BTN_H }px ${ SIZE.QUIZ_Q_BTN_H }px ${ SIZE.QUIZ_A_BTN_H }px;
  column-gap: ${ SIZE.QUIZ_COLUMN_G }px;
  row-gap: ${ SIZE.QUIZ_ROW_G }px;
`;

const AnswerBtnWrapper = styled.div<{ len: number }>`
  justify-self: ${ ({ len }) => len === 4 ? "center" : "end" };
  align-self: end;
  ${ ({ len }) => len === 4 && `
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  ` }
`;

export const QuizArea: FC<QuizAreaProps> = ({
  questions,
  correctIndex,
  x = 0,
  y = 0,
  width = SIZE.QUIZ_Q_BTN_W * 2 + SIZE.QUIZ_COLUMN_G,
  height = SIZE.QUIZ_Q_BTN_H * 2 + SIZE.QUIZ_ROW_G * 2 + SIZE.QUIZ_A_BTN_H
}) => {

  // 選択ボタン 状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();
  const choiceClickHandler = i => {
    setChooseIndex(i);
    setAnswered(false);
  };

  // 解答ボタン 状態管理
  const [isAnswered, setAnswered] = useState<boolean>();

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

      const [correct, inCorrect] = factory.getNextStepDataOnQuiz(
        slideProgress,
        stepList[stepList.length - 1].stepProgress
      );

      setStepList({
        type: "ADD",
        stepList: [chooseIndex === correctIndex ? correct : inCorrect]
      });

    }, [slideProgress, currentProgress, chooseIndex])
  };

  return(
    <Main
      touchedEnable={ !isAnswered }
      width={ calcRatio(412, width) }
      height={ calcRatio(210, height) }
      { ...{ x, y } }
    >
      { questions.map((x, i) => (
        <QuizChoiceBtn
          key={ i }
          mutation={
            chooseIndex === i
              ? QUIZ_CHOICE_BTN.ORANGE
              : QUIZ_CHOICE_BTN.WHITE
          }
          onClick={ () => choiceClickHandler(i) }
          isCorrect={ isAnswered ? i === correctIndex : null }
        >
          { x }
        </QuizChoiceBtn> )) }
        <AnswerBtnWrapper len={ questions.length } >
          <QuizAnswerBtn { ...props } />
        </AnswerBtnWrapper>
    </Main>
  );
};


const calcRatio = (fullSize: number, size: number): number => {
  let percentage = size / fullSize;
  percentage = percentage * 100;
  percentage = Math.floor(percentage);

  return percentage;
};
