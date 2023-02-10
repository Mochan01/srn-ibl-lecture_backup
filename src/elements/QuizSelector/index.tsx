import React, { FC, useMemo } from "react";
import { QuizChoiceBtn, QuizAnswerBtn, BtnWrapper } from "./components";
import { QuizSelectorProvider } from "./providers";
import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";
import { getCorrectIndex, filQuestion, getQuestionSelect } from "./utils";

export interface QuizSelectorProps {
  questionSelect: Lecture["question_select"];
  onAnswer?: (isCorrect: boolean) => void;
  className?: string;
}

/**
 * クイズ回答用（選択式）
 * @param param0
 * @returns
 */
export const QuizSelector: FC<QuizSelectorProps> = ({
  questionSelect,
  onAnswer,
  ...props
}) => {
  const getSelects = useMemo(
    () => getQuestionSelect(questionSelect),
    [questionSelect]
  );

  const correctIndex = useMemo(() => getSelects(getCorrectIndex), [getSelects]);
  const questions = useMemo(() => getSelects(filQuestion), [getSelects]);
  return (
    <QuizSelectorProvider {...{ correctIndex }}>
      <BtnWrapper {...props}>
        <QuizChoiceBtn {...{ questions }} />
        <QuizAnswerBtn {...{ onAnswer }} isMaxLen={questions.length === 4} />
      </BtnWrapper>
    </QuizSelectorProvider>
  );
};
