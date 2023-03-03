import React, { FC } from "react";
import { QuizChoiceBtn, QuizAnswerBtn, BtnWrapper } from "./components";
import { QuizSingleSelectorProvider } from "./providers";

export interface QuizSingleSelectorProps {
  questions: string[];
  correctIndex: number;
  onAnswer?: (isCorrect: boolean) => void;
  className?: string;
}

/**
 * クイズ回答用（選択式）
 * @param param0
 * @returns
 */
export const QuizSingleSelector: FC<QuizSingleSelectorProps> = ({
  questions,
  correctIndex,
  onAnswer,
  ...props
}) => {
  return (
    <QuizSingleSelectorProvider {...{ correctIndex }}>
      <BtnWrapper {...props}>
        <QuizChoiceBtn {...{ questions }} />
        <QuizAnswerBtn {...{ onAnswer }} isMaxLen={questions.length === 4} />
      </BtnWrapper>
    </QuizSingleSelectorProvider>
  );
};
