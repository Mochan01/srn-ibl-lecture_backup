import React, { FC, memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { StepDataProps } from "../../../variable_types/StepDataProps";
import { QuizAnswerBtn, QuizAnswerBtnProps, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";
import { PlayContext } from "../../providers/PlayProvider/PlayProvider";
import { SeekProgressContext } from "../../providers/SeekProgressProvider/SeekProgressProvider";
import { SlideProgressContext } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsFactoryContext } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { useGetStepList } from "../../../hooks/useGetStepList"

export interface QuizAreaProps extends ContainerProps {
  questions: StepDataProps["questions"];
  correctIndex: StepDataProps["correctIndex"];
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

interface ContainerProps {
  x?: StepDataProps["x"];
  y?: StepDataProps["y"];
  width?: StepDataProps["width"];
  height?: StepDataProps["height"];
}

const Container = styled.div.attrs<ContainerProps>(
  ({ x, y, width, height }) => ({
    style: {
      transform: `translate(${ x }%, ${ y }%) scale(${ width }%, ${ height }%)`
    }
  })
)<ContainerProps>`
  transform-origin: left top;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 75%;
  }
`;

const Main = styled.div<{ touchedEnable: boolean }>`
  pointer-events: ${ ({ touchedEnable }) => touchedEnable ? "auto" : "none" };
  position: absolute;
  top: 0;
  left: 0;
`;

export const QuizArea: FC<QuizAreaProps> = ({
  questions,
  correctIndex,
  x = 0,
  y = 0,
  width = 100,
  height = 100
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
  // const { stepsProgress, setStepsProgress } = useContext(StepsProgressContext);
  const { seekProgress, setSeekProgress } = useContext(SeekProgressContext);
  const stepsFactory = useContext(StepsFactoryContext);

  const { currentProgress, stepList, setStepList } = useGetStepList();

  const answerBtnProps = {
    len: questions.length,
    mutation: typeof isAnswered === "boolean"
      ? (isAnswered ? QUIZ_ANSWER_BTN.RED : QUIZ_ANSWER_BTN.WHITE)
      : QUIZ_ANSWER_BTN.GRAY,
    onClick: useCallback(() => {

      // 再生中の場合は押させない
      // if (stepsProgress === seekProgress) return;

      setAnswered(true);
      setPlay(true);

      const [correct, inCorrect] = stepsFactory.getNextStepDataOnQuiz(
        slideProgress,
        stepList[stepList.length - 1].stepProgress
      );
  
      setStepList(s => [...s, chooseIndex === correctIndex ? correct : inCorrect]);

    }, [slideProgress, currentProgress, seekProgress, chooseIndex])
  };

  return(
    <Container x={ x } y={ y } width={ width } height={ height }>
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
    </Container>
  );
};

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
