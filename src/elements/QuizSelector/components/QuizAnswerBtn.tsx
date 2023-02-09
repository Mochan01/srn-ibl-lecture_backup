import React, { FC, useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import { useAudio } from '../../../hooks/useAudio';
import { QuizAnswerBtn as Main } from "../../QuizAnswerBtn";
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

  const variant = useMemo(() => {
    return typeof chooseIndex === "number"
      ? isAnswer
        ? "RED"
        : "WHITE"
      : "GRAY";
  }, [chooseIndex, isAnswer]);

  const [play] = useAudio("quiz_correct.mp3");

  const onClick = useCallback(() => {
    setState((s) => ({ ...s, isAnswer: true }));

    const isCorrect = chooseIndex === correctIndex;

    isCorrect && play();
    onAnswer && onAnswer(isCorrect);
  }, [setState, onAnswer, chooseIndex, correctIndex]);

  return <AnswerBtn {...{ variant, isMaxLen, onClick }} />;
};
