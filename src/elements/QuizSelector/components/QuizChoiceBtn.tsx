import React, { FC, useContext } from "react";
import {
  getChoiceBtnStatus,
  determineButtonColor,
  getMarkSymbol,
  DetermineButtonColor,
  GetMarkSymbol,
} from "../utils";
import { QuizChoiceBtn as Main } from "../../QuizChoiceBtn";
import { QuizSelectorProviderContext } from "../providers";

export interface QuizChoiceBtnProps {
  questions: string[];
}

export const QuizChoiceBtn: FC<QuizChoiceBtnProps> = ({ questions }) => {
  const [{ isAnswer, correctIndexes, chooseIndexes }, setState] = useContext(
    QuizSelectorProviderContext
  );

  return (
    <>
      {questions.map((question, i) => {
        const getBtnStatus = getChoiceBtnStatus(
          isAnswer,
          i,
          correctIndexes,
          chooseIndexes
        );

        const mutation =
          getBtnStatus<DetermineButtonColor>(determineButtonColor);
        const sign = getBtnStatus<GetMarkSymbol>(getMarkSymbol);
        const onClick = () =>
          setState((state) => ({
            ...state,
            chooseIndexes: state.chooseIndexes.includes(i)
              ? state.chooseIndexes.filter((index) => index !== i)
              : [...chooseIndexes, i],
          }));

        return (
          <Main key={i} {...{ mutation, sign, onClick }}>
            {question}
          </Main>
        );
      })}
    </>
  );
};
