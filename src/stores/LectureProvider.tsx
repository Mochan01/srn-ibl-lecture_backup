import React, { FC, useMemo, ReactNode } from "react";
import {
  ProgressProvider,
  GetDataProvider,
  SeekProvider,
  AudioLoadingProvider,
  PlayStatusProvider,
} from "./providers";
import { handleJson } from "../utils";

interface LectureProviderProps {
  json: object;
  children: ReactNode;
}

export const LectureProvider: FC<LectureProviderProps> = ({
  json,
  children,
}) => {
  const getData = useMemo(() => handleJson(json), []);
  return (
    <PlayStatusProvider>
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
