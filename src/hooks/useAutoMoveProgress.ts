import { useContext, useEffect, useMemo } from "react";
import {
  GetDataProviderContext,
  GlobalStateContext,
  TimerContext,
  GlobalDispatchContext,
} from "../stores/providers";
import { handleStep, getGoTo, getQuestion } from "../utils";

/**
 * 次のステップに進むかどうかを判定し、進ませる
 */
export const useAutoMoveProgress = (isStepEnd: boolean) => {
  const { progress } = useContext(GlobalStateContext);
  const getData = useContext(GetDataProviderContext);

  // 次のに進むステップを取得
  const nextProgress = useMemo(() => {
    if (!isStepEnd) return;

    // ステップを自動で次に進めるか？判定
    const getStepData = handleStep(getData(progress.slide, progress.step));
    if (getStepData(getQuestion).length) return;

    // ユーザーに「次ページ」ボタンの押下を促すので、
    // 次のスライドに進む前に停止する
    if (!getData(progress.slide, progress.step + 1)) return;

    const nextProgress = getStepData(getGoTo);
    if (!nextProgress) {
      console.error("The property 'go_to' was undefined on the JSON.");
      return false;
    }

    return nextProgress;
  }, [isStepEnd, getData, progress]);

  const dispatch = useContext(GlobalDispatchContext);
  const { reset } = useContext(TimerContext);
  useEffect(() => {
    if (!nextProgress) return;

    reset();
    dispatch({ type: "progress", val: nextProgress });
  }, [nextProgress, reset, dispatch]);
};
