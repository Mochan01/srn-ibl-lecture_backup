import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { QuizChoiceBtn, QuizAnswerBtn, QuizAnswerBtnProps } from "./components";
import { SIZE } from "../../data/SIZE";
import { QuizSelectorProvider } from "./providers";
import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";
import { getCorrectIndex, filQuestion, getQuestionSelect } from "./utils";

export interface QuizSelectorProps
  extends Pick<QuizAnswerBtnProps, "onAnswer"> {
  questionSelect: Lecture["question_select"];
}

const Main = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 246px);
  column-gap: ${SIZE.QUIZ_COLUMN_G}px;
  row-gap: ${SIZE.QUIZ_ROW_G}px;
`;

export const QuizSelector: FC<QuizSelectorProps> = ({
  questionSelect,
  onAnswer,
}) => {
  const getSelects = useMemo(
    () => getQuestionSelect(questionSelect),
    [questionSelect]
  );
  const correctIndex = useMemo(() => getSelects(getCorrectIndex), [getSelects]);
  const questions = useMemo(() => getSelects(filQuestion), [getSelects]);
  return (
    <QuizSelectorProvider {...{ correctIndex }}>
      <Main>
        <QuizChoiceBtn {...{ questions }} />
        <QuizAnswerBtn {...{ onAnswer }} isMaxLen={questions.length === 4} />
      </Main>
    </QuizSelectorProvider>
  );
};
