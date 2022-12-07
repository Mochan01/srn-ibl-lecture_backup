import React, {
  FC,
  useEffect,
  useMemo,
  useState,
  memo,
  Fragment,
  useCallback,
} from "react";
import styled from "styled-components";
import { QuizAnswerBtn, QUIZ_ANSWER_BTN } from "./QuizAnswerBtn";
import {
  QuizChoiceBtn,
  QuizChoiceBtnProps,
  QUIZ_CHOICE_BTN,
} from "./QuizChoiceBtn";
import { SIZE } from "../../../../data/SIZE";
import { useAudio, useGetRefSize } from "../../../../hooks";

export interface QuizAreaProps {
  questions: string[];
  correctIndex: number;
  $x?: number;
  $y?: number;
  $width?: number;
  $height?: number;
  onAnswer?: (isCorrect: boolean) => void;
}

interface IsMaxLen {
  isMaxLen: boolean;
}

interface MainProps
  extends IsMaxLen,
    Omit<QuizAreaProps, "onAnswer" | "questions" | "correctIndex"> {
  touchEnabled: boolean;
}

const Main = styled.div.attrs<MainProps>(({ $x, $y, $width, $height }) => ({
  style: {
    transform: `scale(${$width}%, ${$height}%)`,
    left: `${$x}%`,
    top: `${$y}%`,
  },
}))<MainProps>`
  position: absolute;
  transform-origin: left top;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${SIZE.QUIZ_COLUMN_G}px;
  row-gap: ${SIZE.QUIZ_ROW_G}px;
  pointer-events: ${({ touchEnabled }) => (touchEnabled ? "auto" : "none")};
`;

const AnswerBtn = styled(QuizAnswerBtn)<IsMaxLen>(
  ({ isMaxLen }) => `
  justify-self: ${isMaxLen ? "center" : "end"};
  ${isMaxLen ? "grid-column: 1 / 3; grid-row: 3 / 4;" : ""}
  align-self: end;
`
);

export const QuizArea: FC<QuizAreaProps> = ({
  questions,
  correctIndex,
  $x = 0,
  $y = 0,
  $width = 0,
  $height = 0,
  onAnswer = () => {},
}) => {
  // 解答ボタン 状態管理
  const [isAnswer, setAnswer] = useState(false);

  // 選択ボタン 状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();

  // 正解音
  const [play] = useAudio("quiz_correct.mp3", { volume: 0.4 });

  // 解答ボタン 状態管理
  useEffect(() => {
    if (!isAnswer) return;

    const isCorrect = chooseIndex === correctIndex;

    // 正解音の為、1秒待機
    if (isCorrect) play();
    const timer = setTimeout(() => onAnswer(isCorrect), 1000);

    return () => clearTimeout(timer);
  }, [isAnswer]);

  const mutation =
    typeof chooseIndex === "number"
      ? isAnswer
        ? QUIZ_ANSWER_BTN.RED
        : QUIZ_ANSWER_BTN.WHITE
      : QUIZ_ANSWER_BTN.GRAY;

  // 選択肢が4択の場合と３択の場合を出し仕分け
  const isMaxLen = useMemo(() => questions.length === 4, [questions]);

  const [ref, width, height] = useGetRefSize<HTMLDivElement>();

  return (
    <Main
      ref={ref}
      $width={calcRatio(width, $width)}
      $height={calcRatio(height, $height)}
      $x={calcRatio(SIZE.W, $x)}
      $y={calcRatio(SIZE.H, $y)}
      touchEnabled={!isAnswer}
      isMaxLen={isMaxLen}
    >
      {questions.map((question, i) => (
        <Fragment key={i}>
          <QuizBtnMemo
            isCorrect={i === correctIndex}
            isChoose={i === chooseIndex}
            onClick={useCallback(() => setChooseIndex(i), [])}
            {...{ isAnswer }}
          >
            {question}
          </QuizBtnMemo>
        </Fragment>
      ))}
      <AnswerBtn onClick={() => setAnswer(true)} {...{ isMaxLen, mutation }} />
    </Main>
  );
};

interface QuizBtnMemoProps {
  isCorrect: boolean;
  isChoose: boolean;
  isAnswer: boolean;
  onClick: () => void;
  children: string;
}

const QuizBtnMemo: FC<QuizBtnMemoProps> = memo(
  ({ isCorrect, isChoose, isAnswer, onClick, children }) => {
    let mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
    if (!isAnswer) {
      // 回答前は、選択したボタンをオレンジにする
      mutation = isChoose ? QUIZ_CHOICE_BTN.ORANGE : QUIZ_CHOICE_BTN.WHITE;
    } else {
      if (isCorrect) {
        // 回答後は、正解のボタンをオレンジにする
        mutation = QUIZ_CHOICE_BTN.ORANGE;
      } else {
        // また、選択したボタンが不正解の場合は、当該ボタンを灰色にする
        mutation = isChoose ? QUIZ_CHOICE_BTN.GRAY : QUIZ_CHOICE_BTN.WHITE;
      }
    }

    // 選択したボタンにのみ○×を表示する
    let sign: QuizChoiceBtnProps["sign"];
    if (isAnswer && isChoose) sign = isCorrect ? "circle" : "cross";

    return (
      <QuizChoiceBtn {...{ mutation, sign, onClick }}>{children}</QuizChoiceBtn>
    );
  }
);

const calcRatio = (fullSize: number, size: number): number => {
  let percentage = size / fullSize;
  percentage = percentage * 100;
  percentage = Math.floor(percentage);

  return percentage;
};
