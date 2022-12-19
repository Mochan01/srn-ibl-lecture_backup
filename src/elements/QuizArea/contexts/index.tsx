import React, { FC, createContext, Dispatch, ReactNode } from "react";
import { QuizState, QuizAction, useQuizReducer } from "../hooks/useQuizReducer";

interface QuizProviderProps {
  correctIndex: number;
  children?: ReactNode;
}

interface QuizContextProps {
  correctIndex: number;
  state: QuizState;
  setState: Dispatch<QuizAction>;
}
export const QuizContext = createContext<QuizContextProps>(
  {} as QuizContextProps
);

export const QuizProvider: FC<QuizProviderProps> = ({ correctIndex, children }) => {
  const [state, setState] = useQuizReducer();
  return <QuizContext.Provider value={{ correctIndex, state, setState }} {...{ children }} />;
};
