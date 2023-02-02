import { useContext, useEffect } from "react";
import { Progress } from "src-ibl-lecture-master/types/stepType";
import { TimerContext, GlobalDispatchContext } from "../providers";

/**
 * 次のステップに進むかどうかを判定し、進ませる
 */
export const useAutoMoveProgress = (nextProgress?: Progress) => {
  const dispatch = useContext(GlobalDispatchContext);
  const { reset } = useContext(TimerContext);
  useEffect(() => {
    if (!nextProgress) return;

    reset();
    dispatch({ type: "progress", val: nextProgress });
  }, [nextProgress, reset, dispatch]);
};
