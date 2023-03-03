import React, { FC, useContext } from "react";
import {
  getChoiceBtnStatus,
  determineButtonColor,
  getMarkSymbol,
  DetermineButtonColor,
  GetMarkSymbol,
} from "../utils";
import { QuizChoiceBtn as Main } from "../../QuizChoiceBtn";
import { QuizSingleSelectorProviderContext } from "../providers";

export interface QuizChoiceBtnProps {
  questions: string[];
}

export const QuizChoiceBtn: FC<QuizChoiceBtnProps> = ({ questions }) => {
  const [{ isAnswer, correctIndex, chooseIndex }, setState] = useContext(
    QuizSingleSelectorProviderContext
  );

  return (
    <>
      {questions.map((question, i) => {
        const getBtnStatus = getChoiceBtnStatus(
          isAnswer,
          i,
          correctIndex,
          chooseIndex
        );

        const mutation =
          getBtnStatus<DetermineButtonColor>(determineButtonColor);
        const sign = getBtnStatus<GetMarkSymbol>(getMarkSymbol);
        const onClick = () => setState((s) => ({ ...s, chooseIndex: i }));

        return (
          <Main key={i} {...{ mutation, sign, onClick }}>
            {question}
          </Main>
        );
      })}
    </>
  );
};
