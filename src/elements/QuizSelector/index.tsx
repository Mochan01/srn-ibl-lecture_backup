import React, { FC, useMemo } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";
import { filQuestion, getCorrectIndexes, getQuestionSelect } from "./utils";
import { BtnWrapper, QuizChoiceBtn, QuizAnswerBtn } from "./components";
import { QuizSelectorProvider } from "./providers";

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

  const correctIndexes = useMemo(
    () => getSelects(getCorrectIndexes),
    [getSelects]
  );

  const questions = useMemo(() => getSelects(filQuestion), [getSelects]);
  return (
    <QuizSelectorProvider {...{ correctIndexes }}>
      <BtnWrapper {...props}>
        <QuizChoiceBtn {...{ questions }} />
        <QuizAnswerBtn {...{ onAnswer }} isMaxLen={questions.length === 4} />
      </BtnWrapper>
    </QuizSelectorProvider>
  );
};
