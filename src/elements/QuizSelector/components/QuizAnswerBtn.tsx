import React, { FC, useCallback, useMemo, useContext } from "react";
import styled from "styled-components";
import { usePingPong } from "../../../hooks";
import { QuizAnswerBtn as Main } from "../../QuizAnswerBtn";
import { QuizSelectorProviderContext } from "../providers";

export interface QuizAnswerBtnProps {
  onAnswer?: (isCorrect: boolean) => void;
  isEven: boolean;
}

const AnswerBtn = styled(Main)<{ isEven: boolean }>(
  ({ isEven }) => `
  justify-self: ${isEven ? "center" : "end"};
  ${isEven ? "grid-column: 1 / 3;" : ""}
  align-self: end;
`
);

export const QuizAnswerBtn: FC<QuizAnswerBtnProps> = ({ onAnswer, isEven }) => {
  const [{ isAnswer, correctIndexes, chooseIndexes }, setState] = useContext(
    QuizSelectorProviderContext
  );

  const variant = useMemo(() => {
    return chooseIndexes.length !== 0 ? (isAnswer ? "RED" : "WHITE") : "GRAY";
  }, [chooseIndexes, isAnswer]);

  const isCorrect = useMemo(
    () =>
      correctIndexes.length === chooseIndexes.length &&
      correctIndexes.every(
        // この比較は選択順に依存するのでソート必須
        (value, index) => value === chooseIndexes.sort((a, b) => a - b)[index]
      ),
    [chooseIndexes, correctIndexes]
  );

  const playPingPong = usePingPong(isCorrect);

  const onClick = useCallback(async () => {
    setState((s) => ({ ...s, isAnswer: true }));

    await playPingPong();
    onAnswer && onAnswer(isCorrect);
  }, [setState, onAnswer, isCorrect, playPingPong]);

  return <AnswerBtn {...{ variant, isEven, onClick }} />;
};
