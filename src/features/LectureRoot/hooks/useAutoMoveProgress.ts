import { useEffect } from "react";
import { Progress } from "../../../types";
import { useMoveProgress } from ".";

/**
 * 次のステップに進むかどうかを判定し、進ませる
 */
export const useAutoMoveProgress = (nextProgress?: Progress) => {
  const moveProgress = useMoveProgress();
  useEffect(() => {
    nextProgress && moveProgress(nextProgress);
  }, [moveProgress, nextProgress]);
};
