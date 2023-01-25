import React, { FC, useMemo, ReactNode } from "react";
import {
  GetDataProvider,
  SeekProvider,
  TimerProvider,
  GlobalStateProvider,
} from "./providers";
import { handleJson } from "../utils";
import { JsonData } from "../types";

export interface LectureProviderProps {
  json: JsonData;
  autoPlay?: boolean;
  children?: ReactNode;
}

export const LectureProvider: FC<LectureProviderProps> = ({
  json,
  autoPlay = false,
  children,
}) => {
  const getData = useMemo(() => handleJson(json), [json]);
  return (
    <GlobalStateProvider isPlaying={autoPlay}>
      <GetDataProvider {...{ getData }}>
        <TimerProvider>
          <SeekProvider>{children}</SeekProvider>
        </TimerProvider>
      </GetDataProvider>
    </GlobalStateProvider>
  );
};
