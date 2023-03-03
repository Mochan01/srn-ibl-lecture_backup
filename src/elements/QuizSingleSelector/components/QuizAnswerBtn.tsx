import React, { FC, useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import { usePingPong } from "../../../hooks";
import { QuizAnswerBtn as Main } from "../../QuizAnswerBtn";
import { QuizSingleSelectorProviderContext } from "../providers";

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
    QuizSingleSelectorProviderContext
  );

  const variant = useMemo(() => {
    return typeof chooseIndex === "number"
      ? isAnswer
        ? "RED"
        : "WHITE"
      : "GRAY";
  }, [chooseIndex, isAnswer]);

  const isCorrect = useMemo(
    () => chooseIndex === correctIndex,
    [chooseIndex, correctIndex]
  );

  const playPingPong = usePingPong(isCorrect);

  const onClick = useCallback(async () => {
    setState((s) => ({ ...s, isAnswer: true }));

    await playPingPong();
    onAnswer && onAnswer(isCorrect);
  }, [setState, onAnswer, isCorrect, playPingPong]);

  return <AnswerBtn {...{ variant, isMaxLen, onClick }} />;
};
