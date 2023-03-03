import React, { FC, useMemo } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types/lecture";
import { filQuestion, getCorrectIndexes, getQuestionSelect } from "./utils";
import { QuizMultiSelector } from "../QuizMultiSelector";
import { QuizSingleSelector } from "../QuizSingleSelector";

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
    <>
      {correctIndexes.length === 1 ? (
        <QuizSingleSelector
          correctIndex={correctIndexes[0]}
          {...{ questions, onAnswer, props }}
        />
      ) : (
        <QuizMultiSelector
          {...{ questions, correctIndexes, onAnswer, props }}
        />
      )}
    </>
  );
};
