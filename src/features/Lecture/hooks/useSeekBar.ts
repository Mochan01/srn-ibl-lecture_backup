import { useContext, useState, useEffect, useMemo } from "react";
import {
  GetDataProviderContext,
  GlobalStateContext,
  TimerContext,
} from "../../../stores/providers";
import {
  handleStepArray,
  handleStep,
  getTotalTime,
  getTime,
  getLength,
} from "../../../utils";

/**
 * シークバーの進捗操作
 * @param onTimeUp
 * @returns
 */
export const useSeekBar = () => {
  const { progress } = useContext(GlobalStateContext);
  const getData = useContext(GetDataProviderContext);

  // そのスライドの一番最後のstepのデータを取得する関数
  const getLastStepData = useMemo(() => {
    return handleStep(
      getData(
        progress.slide,
        handleStepArray(getData(progress.slide))(getLength)
      )
    );
  }, [getData, progress.slide]);

  // 現在のステップのデータを取得する関数
  const getStepData = useMemo(
    () => handleStep(getData(progress.slide, progress.step)),
    [getData, progress]
  );

  const { time } = useContext(TimerContext);
  const [value, setValue] = useState(0);
  useEffect(() => {
    // 現在位置を計算して表示
    const totalTime = getStepData(getTotalTime);
    const stepTime = getStepData(getTime);
    const currentTime = totalTime - stepTime + time;
    setValue((currentTime / getLastStepData(getTotalTime)) * 100);
  }, [getStepData, getLastStepData, time]);

  return value;
};
