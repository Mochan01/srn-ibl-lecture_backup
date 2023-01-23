import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import {
  QuizAnswerBtn,
  QUIZ_ANSWER_BTN,
  QuizChoiceBtn,
  QUIZ_CHOICE_BTN,
} from "./components";
import { SIZE } from "../../data/SIZE";
import { useGetRefSize } from "../../hooks";
import { useCreateAnswerAction } from "./hooks";
import { getPercent } from "./utils";

export interface QuizAreaProps {
  questions: string[];
  correctIndex: number;
  $x?: number;
  $y?: number;
  $width?: number;
  $height?: number;
}

interface MainProps
  extends Omit<QuizAreaProps, "onAnswer" | "questions" | "correctIndex"> {
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

const AnswerBtn = styled(QuizAnswerBtn)<{ isMaxLen: boolean }>(
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
}) => {
  // DOMの大きさを取得（位置調整するため）
  const [ref, width, height] = useGetRefSize<HTMLDivElement>();

  // 選択状態の状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();
  const [isAlreadyAnswer, setIsAlreadyAnswer] = useState(false);

  // 解答ボタンを押したときの処理を生成
  // const answerAction = useCreateAnswerAction(correctIndex, chooseIndex);
  // 解答ボタンの色生成
  const mutation = useMemo(() => {
    return typeof chooseIndex === "number"
      ? isAlreadyAnswer
        ? QUIZ_ANSWER_BTN.RED
        : QUIZ_ANSWER_BTN.WHITE
      : QUIZ_ANSWER_BTN.GRAY;
  }, [chooseIndex, isAlreadyAnswer]);

  return (
    <Main
      {...{ ref }}
      $width={getPercent(width, $width)}
      $height={getPercent(height, $height)}
      $x={getPercent(SIZE.W, $x)}
      $y={getPercent(SIZE.H, $y)}
      touchEnabled={!isAlreadyAnswer}
    >
      {/** 選択肢のボタン */}
      {questions.map((question, i) => {
        const isChosen = i === chooseIndex;
        const isCorrect = i === correctIndex;

        // ボタンの色判定
        let mutation;
        if (isAlreadyAnswer) {
          if (isCorrect) {
            // 回答後は、正解のボタンをオレンジにする
            mutation = QUIZ_CHOICE_BTN.ORANGE;
          } else {
            // また、選択したボタンが不正解の場合は、当該ボタンを灰色にする
            mutation = isChosen ? QUIZ_CHOICE_BTN.GRAY : QUIZ_CHOICE_BTN.WHITE;
          }
        } else {
          // 回答前は、選択したボタンをオレンジにする
          mutation = isChosen ? QUIZ_CHOICE_BTN.ORANGE : QUIZ_CHOICE_BTN.WHITE;
        }

        // 解答後につくマツバツの記号アイコン判定
        const sign =
          isAlreadyAnswer && isChosen
            ? isCorrect
              ? "circle"
              : "cross"
            : void 0;

        const onClick = () => setChooseIndex(i);

        return (
          <QuizChoiceBtn key={i} {...{ mutation, sign, onClick }}>
            {question}
          </QuizChoiceBtn>
        );
      })}
      {/** 解答ボタン */}
      <AnswerBtn
        {...{ mutation }}
        onClick={() => {
         //  answerAction();
          setIsAlreadyAnswer(true);
        }}
        isMaxLen={questions.length === 4}
      />
    </Main>
  );
};
