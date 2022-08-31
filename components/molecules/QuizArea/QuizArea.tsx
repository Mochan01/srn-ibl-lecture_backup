import React, { FC, memo, useCallback, useState } from "react";
import styled from "styled-components";
import { QuizAnswerBtn, QuizAnswerBtnProps, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";


interface QuizAnswerBtnMemoProps extends QuizAnswerBtnProps, QuizAnswerBtnWrapperProps {
}

interface QuizAnswerBtnWrapperProps {
  len: number;
}

const QuizAnswerBtnWrapper = styled.div<QuizAnswerBtnWrapperProps>`
  width: 26% !important;
  margin: ${ ({ len }) => len === 4 ? "0 auto" : "0" };
`;

export const QuizAnswerBtnMemo: FC<QuizAnswerBtnMemoProps> = memo(({
  len,
  mutation,
  onClick
}) => {
  return <>
    <QuizAnswerBtnWrapper len={ len }>
      <QuizAnswerBtn
        mutation={ mutation }
        onClick={ onClick }
      />
    </QuizAnswerBtnWrapper>
  </>;
});


export interface QuizAreaProps {
  questions: string[];
  correctIndex: number;
}

const GAP = 2;
const Questions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-end;
  & > div {
    width: ${ 50 - GAP }%;
    margin-bottom: ${ GAP * 2 }%;
  }
`;

const Main = styled.div<{ touchedEnable: boolean }>`
  pointer-events: ${ ({ touchedEnable }) => touchedEnable ? "auto" : "none" };
`;

export const QuizArea: FC<QuizAreaProps> = ({
  questions,
  correctIndex
}) => {

  // 選択ボタン 状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();
  const choiceClickHandler = i => {
    setChooseIndex(i);
    setAnswered(false);
  };

  // 解答ボタン 状態管理
  const [isAnswered, setAnswered] = useState<boolean>();
  const answerBtnProps = {
    len: questions.length,
    mutation: typeof isAnswered === "boolean"
      ? (isAnswered ? QUIZ_ANSWER_BTN.RED : QUIZ_ANSWER_BTN.WHITE)
      : QUIZ_ANSWER_BTN.GRAY,
    onClick: useCallback(() => {
      setAnswered(true);
    }, [])
  };

  return(
    <Main touchedEnable={ !isAnswered }>
      <Questions>
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
        { questions.length === 3 && <QuizAnswerBtnMemo { ...answerBtnProps } /> }
      </Questions>
      { questions.length === 4 && <QuizAnswerBtnMemo { ...answerBtnProps } /> }
    </Main>
  );
};
