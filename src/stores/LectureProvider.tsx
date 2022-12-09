import React, { FC, useMemo, ReactNode } from "react";
import {
  GetDataProvider,
  SeekProvider,
  TimerProvider,
  PlayStatusProviderProps,
  GlobalStateProvider,
} from "./providers";
import { handleJson } from "../utils";
import { JsonData } from "../types";

interface LectureProviderProps
  extends Pick<PlayStatusProviderProps, "isPlaying"> {
  json: JsonData;
  children: ReactNode;
}

export const LectureProvider: FC<LectureProviderProps> = ({
  json,
  isPlaying,
  children,
}) => {
  const getData = useMemo(() => handleJson(json), []);
  return (
    <GlobalStateProvider {...{ isPlaying }}>
      <GetDataProvider {...{ getData }}>
        <TimerProvider>
          <SeekProvider>
            {children}
          </SeekProvider>
        </TimerProvider>
      </GetDataProvider>
    </GlobalStateProvider>
  );
};
