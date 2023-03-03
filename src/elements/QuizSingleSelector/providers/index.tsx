import React, {
  FC,
  createContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
} from "react";

interface QuizSingleSelectorProviderInitialState {
  correctIndex: number;
  chooseIndex: number | undefined;
  isAnswer: boolean;
}

type ContextState = [
  QuizSingleSelectorProviderInitialState,
  Dispatch<SetStateAction<QuizSingleSelectorProviderInitialState>>
];

export const QuizSingleSelectorProviderContext = createContext<ContextState>(
  {} as ContextState
);

export const QuizSingleSelectorProvider: FC<
  Pick<QuizSingleSelectorProviderInitialState, "correctIndex"> & {
    children: ReactNode;
  }
> = ({ correctIndex, children }) => {
  const [state, setState] = useState<QuizSingleSelectorProviderInitialState>({
    correctIndex,
    chooseIndex: undefined,
    isAnswer: false,
  });

  return (
    <QuizSingleSelectorProviderContext.Provider value={[state, setState]}>
      {children}
    </QuizSingleSelectorProviderContext.Provider>
  );
};
