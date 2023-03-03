import React, {
  FC,
  createContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
} from "react";

interface QuizMultiSelectorProviderInitialState {
  correctIndexes: number[];
  chooseIndexes: number[];
  isAnswer: boolean;
}

type ContextState = [
  QuizMultiSelectorProviderInitialState,
  Dispatch<SetStateAction<QuizMultiSelectorProviderInitialState>>
];

export const QuizMultiSelectorProviderContext = createContext<ContextState>(
  {} as ContextState
);

export const QuizMultiSelectorProvider: FC<
  Pick<QuizMultiSelectorProviderInitialState, "correctIndexes"> & {
    children: ReactNode;
  }
> = ({ correctIndexes, children }) => {
  const [state, setState] = useState<QuizMultiSelectorProviderInitialState>({
    correctIndexes,
    chooseIndexes: [],
    isAnswer: false,
  });

  return (
    <QuizMultiSelectorProviderContext.Provider value={[state, setState]}>
      {children}
    </QuizMultiSelectorProviderContext.Provider>
  );
};
