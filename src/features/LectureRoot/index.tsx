import React, { FC } from "react";
import { GlobalStyle } from "../../config/globalStyle";
import { ChildWrapper, ChildWrapperProps } from "./components";
import { JsonDataProvider, JsonDataProviderProps } from "./providers";
import { SeekProvider, TimerProvider, GlobalStateProvider } from "./providers";

export interface LectureRootProps
  extends JsonDataProviderProps,
    ChildWrapperProps {
  isPlaying?: boolean;
}

export const LectureRoot: FC<LectureRootProps> = ({
  isPlaying,
  jsonData,
  onClose,
  onLastStep,
  children,
}) => {
  return (
    <GlobalStateProvider {...{ isPlaying }}>
      <JsonDataProvider {...{ jsonData }}>
        <TimerProvider>
          <SeekProvider>
            <GlobalStyle />
            <div className="lectureFont">
              <ChildWrapper {...{ onClose, onLastStep, children }} />
            </div>
          </SeekProvider>
        </TimerProvider>
      </JsonDataProvider>
    </GlobalStateProvider>
  );
};
