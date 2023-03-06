import React, {
  FC,
  createContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
} from "react";

interface QuizSelectorProviderInitialState {
  correctIndexes: number[];
  chooseIndexes: number[];
  isAnswer: boolean;
}

type ContextState = [
  QuizSelectorProviderInitialState,
  Dispatch<SetStateAction<QuizSelectorProviderInitialState>>
];

export const QuizSelectorProviderContext = createContext<ContextState>(
  {} as ContextState
);

export const QuizSelectorProvider: FC<
  Pick<QuizSelectorProviderInitialState, "correctIndexes"> & {
    children: ReactNode;
  }
> = ({ correctIndexes, children }) => {
  const [state, setState] = useState<QuizSelectorProviderInitialState>({
    correctIndexes,
    chooseIndexes: [],
    isAnswer: false,
  });

  return (
    <QuizSelectorProviderContext.Provider value={[state, setState]}>
      {children}
    </QuizSelectorProviderContext.Provider>
  );
};
