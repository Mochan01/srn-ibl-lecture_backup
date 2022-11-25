import React, { FC, useMemo, ReactNode } from "react";
import {
  ProgressProvider,
  GetDataProvider,
  SeekProvider,
  AudioLoadingProvider,
  PlayStatusProvider,
  PlayStatusProviderProps,
} from "./providers";
import { handleJson } from "../utils";

interface LectureProviderProps
  extends Pick<PlayStatusProviderProps, "isPlaying"> {
  json: object;
  children: ReactNode;
}

export const LectureProvider: FC<LectureProviderProps> = ({
  json,
  isPlaying,
  children,
}) => {
  const getData = useMemo(() => handleJson(json), []);
  return (
    <PlayStatusProvider {...{ isPlaying }}>
      <SeekProvider>
        <GetDataProvider {...{ getData }}>
          <ProgressProvider {...{ getData }}>
            <AudioLoadingProvider>{children}</AudioLoadingProvider>
          </ProgressProvider>
        </GetDataProvider>
      </SeekProvider>
    </PlayStatusProvider>
  );
};
