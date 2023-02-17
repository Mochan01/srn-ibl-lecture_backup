import React, { FC, createContext, ReactNode, useContext } from "react";
import { useTimer } from "use-timer";
import { GlobalStateContext } from ".";
import { JsonDataProviderContext } from "../providers";
import { handleJsonData, getStepData } from "../utils";

export interface TimerProviderProps {
  children: ReactNode;
}

type TimerMethodsProviderProps = ReturnType<typeof useTimer>;

export const TimerContext = createContext<TimerMethodsProviderProps>(
  {} as TimerMethodsProviderProps
);

/**
 * タイマーを受け渡す
 * @returns
 */
export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
  const { progress } = useContext(GlobalStateContext);

  // 当該ステップの再生時間を取得
  const data = useContext(JsonDataProviderContext);
  const getJsonData = handleJsonData(data, progress);
  const { time: endTime } = getJsonData(getStepData).audio;

  const value = useTimer({
    interval: 100,
    step: 100,
    endTime,
  });

  return <TimerContext.Provider {...{ value, children }} />;
};
