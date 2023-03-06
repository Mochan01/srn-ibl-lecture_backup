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
          setState((state) =>
            // 正解が一つの場合は入れ替え
            correctIndexes.length === 1
              ? {
                  ...state,
                  chooseIndexes: [i],
                }
              : // 正解が複数の場合は追加
                {
                  ...state,
                  chooseIndexes: state.chooseIndexes.includes(i)
                    ? state.chooseIndexes.filter((index) => index !== i)
                    : [...chooseIndexes, i],
                }
          );

        return (
          <Main key={i} {...{ mutation, sign, onClick }}>
            {question}
          </Main>
        );
      })}
    </>
  );
};
