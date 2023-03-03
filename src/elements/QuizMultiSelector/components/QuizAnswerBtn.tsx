import React, { FC, useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import { usePingPong } from "../../../hooks";
import { QuizAnswerBtn as Main } from "../../QuizAnswerBtn";
import { QuizMultiSelectorProviderContext } from "../providers";

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
  const [{ isAnswer, correctIndexes, chooseIndexes }, setState] = useContext(
    QuizMultiSelectorProviderContext
  );

  const variant = useMemo(() => {
    return chooseIndexes.length !== 0 ? (isAnswer ? "RED" : "WHITE") : "GRAY";
  }, [chooseIndexes, isAnswer]);

  const isCorrect = useMemo(
    () =>
      correctIndexes.length === chooseIndexes.length &&
      correctIndexes.every((value, index) => value === chooseIndexes[index]),
    [chooseIndexes, correctIndexes]
  );

  const playPingPong = usePingPong(isCorrect);

  const onClick = useCallback(async () => {
    setState((s) => ({ ...s, isAnswer: true }));

    await playPingPong();
    onAnswer && onAnswer(isCorrect);
  }, [setState, onAnswer, isCorrect, playPingPong]);

  return <AnswerBtn {...{ variant, isMaxLen, onClick }} />;
};
