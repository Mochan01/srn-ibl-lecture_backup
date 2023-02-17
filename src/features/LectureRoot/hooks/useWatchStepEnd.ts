import { useContext } from "react";
import {
  GlobalStateContext,
  TimerContext,
  JsonDataProviderContext,
} from "../providers";
import { handleJsonData, getStepData } from "../utils";

/**
 * ステップが終了したか判定する
 */
export const useWatchStepEnd = () => {
  const { progress } = useContext(GlobalStateContext);

  // 当該ステップの再生時間を取得
  const data = useContext(JsonDataProviderContext);
  const getJsonData = handleJsonData(data, progress);
  const { time: audioTime } = getJsonData(getStepData).audio;

  // タイマーが動いてるときだけ、判定をいれる
  const { time, status } = useContext(TimerContext);
  return !!audioTime && status === "RUNNING" && audioTime <= time;
};
