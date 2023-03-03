import React, { FC } from "react";
import { QuizChoiceBtn, QuizAnswerBtn, BtnWrapper } from "./components";
import { QuizMultiSelectorProvider } from "./providers";

export interface QuizMultiSelectorProps {
  onAnswer?: (isCorrect: boolean) => void;
  correctIndexes: number[];
  questions: string[];
  className?: string;
}

/**
 * クイズ回答用（選択式）
 * @param param0
 * @returns
 */
export const QuizMultiSelector: FC<QuizMultiSelectorProps> = ({
  correctIndexes,
  questions,
  onAnswer,
  ...props
}) => {
  return (
    <QuizMultiSelectorProvider {...{ correctIndexes }}>
      <BtnWrapper {...props}>
        <QuizChoiceBtn {...{ questions }} />
        <QuizAnswerBtn {...{ onAnswer }} isMaxLen={questions.length === 4} />
      </BtnWrapper>
    </QuizMultiSelectorProvider>
  );
};
