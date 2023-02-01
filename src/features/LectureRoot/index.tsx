import React, { FC } from "react";
import { ChildWrapper, ChildWrapperProps } from "./components";
import { JsonDataProvider, JsonDataProviderProps } from "./providers";
import { SeekProvider, TimerProvider, GlobalStateProvider } from "./providers";

export interface LectureRootProps
  extends Pick<JsonDataProviderProps, "jsonData">,
    ChildWrapperProps {
  isPlaying?: boolean;
  // onLectureLeave: (key: "begin" | "end") => void;
}

export const LectureRoot: FC<LectureRootProps> = ({
  isPlaying = true,
  jsonData,
  onClose,
  children,
}) => {
  return (
    <GlobalStateProvider {...{ isPlaying }}>
      <JsonDataProvider {...{ jsonData }}>
        <TimerProvider>
          <SeekProvider>
            <ChildWrapper {...{ onClose, children }} />
          </SeekProvider>
        </TimerProvider>
      </JsonDataProvider>
    </GlobalStateProvider>
  );
};
