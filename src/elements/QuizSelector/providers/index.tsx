import React, {
  FC,
  createContext,
  ReactNode,
  Dispatch,
  useState,
  SetStateAction,
} from "react";

interface QuizSelectorProviderInitialState {
  correctIndex: number;
  chooseIndex: number | undefined;
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
  Pick<QuizSelectorProviderInitialState, "correctIndex"> & {
    children: ReactNode;
  }
> = ({ correctIndex, children }) => {
  const [state, setState] = useState<QuizSelectorProviderInitialState>({
    correctIndex,
    chooseIndex: undefined,
    isAnswer: false,
  });

  return (
    <QuizSelectorProviderContext.Provider value={[state, setState]}>
      {children}
    </QuizSelectorProviderContext.Provider>
  );
};
