import React, { FC, useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import {
  QuizAnswerBtn as Main,
  QUIZ_ANSWER_BTN,
} from "../../../elements/QuizAnswerBtn";
import { QuizSelectorProviderContext } from "../providers";

export interface QuizAnswerBtnProps {
  onAnswer?: (isCorrect: boolean) => void;
  isMaxLen: boolean;
}

const AnswerBtn = styled(Main)<{ isMaxLen: boolean }>(
  ({ isMaxLen }) => `
  justify-self: ${isMaxLen ? "center" : "end"};
  ${isMaxLen ? "grid-column: 1 / 3; grid-row: 3 / 4;" : ""}
  align-self: end;
`
);

export const QuizAnswerBtn: FC<QuizAnswerBtnProps> = ({
  onAnswer,
  isMaxLen,
}) => {
  const [{ isAnswer, correctIndex, chooseIndex }, setState] = useContext(
    QuizSelectorProviderContext
  );

  const mutation = useMemo(() => {
    return typeof chooseIndex === "number"
      ? isAnswer
        ? QUIZ_ANSWER_BTN.RED
        : QUIZ_ANSWER_BTN.WHITE
      : QUIZ_ANSWER_BTN.GRAY;
  }, [chooseIndex, isAnswer]);

  const onClick = useCallback(() => {
    setState((s) => ({ ...s, isAnswer: true }));
    onAnswer && onAnswer(chooseIndex === correctIndex);
  }, [setState, onAnswer, chooseIndex, correctIndex]);

  return <AnswerBtn {...{ mutation, isMaxLen, onClick }} />;
};
