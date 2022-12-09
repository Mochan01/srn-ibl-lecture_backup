import { useContext, useMemo } from "react";
import {
  GetDataProviderContext,
  GlobalStateContext,
  TimerContext,
} from "../stores/providers";
import { handleStep, getTime } from "../utils";

/**
 * ステップが終了したか判定する
 */
export const useWatchStepEnd = () => {
  const { progress } = useContext(GlobalStateContext);
  const getData = useContext(GetDataProviderContext);

  // 現在のステップのデータを取得する関数
  const getStepData = useMemo(
    () => handleStep(getData(progress.slide, progress.step)),
    [getData, progress]
  );

  const { time } = useContext(TimerContext);
  const isStepEnd = useMemo(
    () => getStepData(getTime) <= time,
    [getStepData, time]
  );

  return isStepEnd;
};
