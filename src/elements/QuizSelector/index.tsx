import React, { FC, useMemo, useState } from "react";
import styled from "styled-components";
import { QuizChoiceBtn, QUIZ_CHOICE_BTN } from "./components";
import { QuizAnswerBtn } from "../QuizAnswerBtn";
import { Variant } from "../QuizAnswerBtn/types";
import { SIZE } from "../../data/SIZE";
import { quizChoiceBtnWidth } from "./config/index";

export interface QuizSelectorProps {
  questions: string[];
  correctIndex: number;
  onAnswer?: (isCorrect: boolean) => void;
}

const Main = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, ${quizChoiceBtnWidth}px);
  column-gap: ${SIZE.QUIZ_COLUMN_G}px;
  row-gap: ${SIZE.QUIZ_ROW_G}px;
`;

const AnswerBtn = styled(QuizAnswerBtn)<{ isMaxLen: boolean }>(
  ({ isMaxLen }) => `
  justify-self: ${isMaxLen ? "center" : "end"};
  ${isMaxLen ? "grid-column: 1 / 3; grid-row: 3 / 4;" : ""}
  align-self: end;
`
);

export const QuizSelector: FC<QuizSelectorProps> = ({
  questions,
  correctIndex,
  onAnswer,
}) => {
  // 選択状態の状態管理
  const [chooseIndex, setChooseIndex] = useState<number>();
  const [isAnswer, setIsAnswer] = useState(false);

  const answerBtnColor: Variant = useMemo(
    () =>
      typeof chooseIndex === "number" ? (isAnswer ? "RED" : "WHITE") : "GRAY",
    [chooseIndex, isAnswer]
  );

  return (
    <Main>
      {/** 選択肢のボタン */}
      {questions.map((question, i) => {
        // ボタンの色判定
        const isChosen = i === chooseIndex;
        const isCorrect = i === correctIndex;
        let mutation;
        if (isAnswer) {
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

        // 解答後につくマルバツの記号アイコン判定
        const sign =
          isAnswer && isChosen ? (isCorrect ? "circle" : "cross") : void 0;

        return (
          <QuizChoiceBtn
            key={i}
            {...{ mutation, sign }}
            onClick={() => setChooseIndex(i)}
          >
            {question}
          </QuizChoiceBtn>
        );
      })}
      {/** 解答ボタン */}
      <AnswerBtn
        variant={answerBtnColor}
        onClick={() => {
          setIsAnswer(true);
          onAnswer && onAnswer(chooseIndex === correctIndex);
        }}
        isMaxLen={questions.length === 4}
      />
    </Main>
  );
};
