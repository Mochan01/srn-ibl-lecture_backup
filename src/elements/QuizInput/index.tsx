import React, { FC, useCallback, useRef } from "react";
import styled from "styled-components";
import { Btn } from "./components/Btn";
import { TextBox } from "./components/TextBox";

export interface QuizInputProps {
  answer: string;
  onAnswer?: (isCorrect: boolean) => void;
}

const Main = styled.div``;

export const QuizInput: FC<QuizInputProps> = ({ answer, onAnswer }) => {
  const ref = useRef("");

  const onEnter = useCallback(() => {
    const isCorrect = ref.current === answer;
    onAnswer && onAnswer(isCorrect);
  }, [answer, onAnswer]);

  return (
    <Main>
      <TextBox {...{ onEnter }} onChange={(value) => (ref.current = value)} />
      <Btn onClick={onEnter} />
    </Main>
  );
};
