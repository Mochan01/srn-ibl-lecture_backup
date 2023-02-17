import { useCallback, useContext } from "react";
import { Progress } from "../../../types";
import { TimerContext, GlobalDispatchContext } from "../providers";

/**
 * タイマーをリセットし、進捗を進める
 */
export const useMoveProgress = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { reset } = useContext(TimerContext);

  return useCallback(
    (val: Progress) => {
      reset();
      dispatch({ type: "progress", val });
    },
    [reset, dispatch]
  );
};
