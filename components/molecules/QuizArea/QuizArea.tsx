import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { QuizAnswerBtn, QUIZ_ANSWER_BTN } from "../../atoms/QuizAnswerBtn/QuizAnswerBtn";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "../../atoms/QuizChoiceBtn/QuizChoiceBtn";
import { SIZE } from "../../../data/SIZE";
import { useSound } from "use-sound";
import { QuizProps } from "../../../variable_types/StepProps";
const quiz_correct
  = new URL("../../../assets/quiz_correct.mp3", import.meta.url).toString();

export interface QuizAreaProps extends QuizProps {
  onAnswer?: (isCorrect: boolean) => void;
}

interface IsMaxLen {
  isMaxLen: boolean;
}

interface MainProps extends IsMaxLen {
  $x: QuizProps["$x"];
  $y: QuizProps["$y"];
  $width: QuizProps["$width"];
  $height: QuizProps["$height"];
  touchEnabled: boolean;
}

const Main = styled.div.attrs<MainProps>(
  ({ $x, $y, $width, $height }) => ({
    style: {
      transform: `scale(${ $width }%, ${ $height }%)`,
      left: `${ $x }%`,
      top: `${ $y }%`
    }
  })
)<MainProps>`
  position: absolute;
  transform-origin: left top;
  display: grid;
  grid-template-columns: ${ SIZE.QUIZ_Q_BTN_W }px ${ SIZE.QUIZ_Q_BTN_W }px;
  grid-template-rows:
    ${ SIZE.QUIZ_Q_BTN_H }px
    ${ SIZE.QUIZ_Q_BTN_H }px
    ${ ({ isMaxLen }) => isMaxLen && `${ SIZE.QUIZ_A_BTN_H }px` };
  column-gap: ${ SIZE.QUIZ_COLUMN_G }px;
  row-gap: ${ SIZE.QUIZ_ROW_G }px;
  pointer-events: ${ ({ touchEnabled }) => touchEnabled ? "auto" : "none" };
`;

const AnswerBtnWrapper = styled.div<IsMaxLen>`
  justify-self: ${ ({ isMaxLen }) => isMaxLen ? "center" : "end" };
  align-self: end;
  ${ ({ isMaxLen }) => isMaxLen && `
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  ` }
`;

export const QuizArea: FC<QuizAreaProps> = ({
  questions,
  correctIndex,
  $x,
  $y,
  $width,
  $height,
  onAnswer = () => {}
}) => {

  // 解答ボタン 状態管理
  const [isAnswered, setAnswered] = useState(false);

  // 選択ボタン 状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();

  // 正解音
  const [play] = useSound(quiz_correct, { volume: .1 });

  // 解答ボタン 状態管理
  useEffect(() => {
    if (!isAnswered) return;

    const isCorrect = chooseIndex === correctIndex;

    // 正解音の為、1秒待機
    if (isCorrect) play();
    const timer = setTimeout(() => onAnswer(isCorrect), 1000);

    return () => clearTimeout(timer);
  }, [isAnswered]);

  const mutation = typeof chooseIndex === "number"
    ? (isAnswered ? QUIZ_ANSWER_BTN.RED : QUIZ_ANSWER_BTN.WHITE)
    : QUIZ_ANSWER_BTN.GRAY;

  // 選択肢が4択の場合と３択の場合を出し仕分け
  const isMaxLen = useMemo(() => questions.length === 4, [questions]);

  return (
    <Main
      $width={ calcRatio(SIZE.QUIZ_AREA_W, $width) }
      $height={ calcRatio(isMaxLen ? SIZE.QUIZ_AREA_FOUR_H : SIZE.QUIZ_AREA_TREE_H, $height) }
      $x={ calcRatio(SIZE.W, $x) }
      $y={ calcRatio(SIZE.H, $y) }
      touchEnabled={ !isAnswered }
      isMaxLen={ isMaxLen }
    >
      { questions.map((x, i) => (
        <QuizChoiceBtn
          key={ i }
          mutation={
            chooseIndex === i
              ? QUIZ_CHOICE_BTN.ORANGE
              : QUIZ_CHOICE_BTN.WHITE
          }
          onClick={ () => setChooseIndex(i) }
          isCorrect={ isAnswered ? i === correctIndex : null }
        >
          { x }
        </QuizChoiceBtn> )) }
        <AnswerBtnWrapper isMaxLen={ isMaxLen }>
          <QuizAnswerBtn mutation={ mutation } onClick={ () => setAnswered(true) } />
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
