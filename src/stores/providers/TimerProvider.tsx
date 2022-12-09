import React, {
  FC,
  createContext,
  ReactNode,
  useMemo,
  useContext,
} from "react";
import { useTimer } from "use-timer";
import { handleStep, getTime } from "../../utils";
import { GetDataProviderContext, GlobalStateContext } from ".";

export interface TimerProviderProps {
  children: ReactNode;
}

interface TimerMethodsProviderProps {
  time: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export const TimerContext =
  createContext<TimerMethodsProviderProps>({} as TimerMethodsProviderProps);

/**
 * タイマーを受け渡す
 * @returns
 */
export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
  const getData = useContext(GetDataProviderContext);
  const { progress } = useContext(GlobalStateContext);

  const getStep = useMemo(
    () => handleStep(getData(progress.slide, progress.step)),
    [getData, progress]
  );

  const { time, start, pause, reset } = useTimer({
    interval: 100,
    step: 100,
    endTime: getStep(getTime),
  });

  return (
    <TimerContext.Provider value={{ time, start, pause, reset }}>
      {children}
    </TimerContext.Provider>
  );
};
