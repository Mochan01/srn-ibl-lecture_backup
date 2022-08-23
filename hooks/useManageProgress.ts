import { Dispatch, useMemo, useReducer } from "react";

interface UseAllProgress {
  slide?: number;
  step?: number;
}

/**
 * スライド / ステップの進捗を記録する、また、返す
 * @returns 
 */
export const useManageProgress = (): [UseAllProgress, Dispatch<UseAllProgress>] => {

  const reducer = (
    state: UseAllProgress,
    { slide, step }: UseAllProgress
  ): UseAllProgress => {

    let nextState = {};

    if (slide !== void(0)) {
      nextState = { ...nextState, slide };
    }

    if (step !== void(0)) {
      nextState = { ...nextState, step };
    }

    return { ...state, ...nextState }
  };

  const initState: UseAllProgress = {
    slide: 0,
    step: 0
  };

  const [state, dispatch] = useReducer(reducer, initState);

  // stateがオブジェクト型なのでmemo化をカマしてレンダリング抑制
  const cache
    = useMemo(() => state, [...Object.keys(state)].map(x => state[x]));

  return [cache, dispatch];
};
