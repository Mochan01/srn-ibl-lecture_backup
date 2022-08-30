import React, { FC } from "react";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../organisms/ControlPanel/ControlPanel";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PlayProvider } from "../../providers/PlayProvider/PlayProvider";
import { Slider } from "../../organisms/Slider/Slider";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {

  const stepsFactory = new StepsFactory();

  return <>
    <StepsProgressProvider>
      <SlideProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <PlayProvider>
            <Slider />
            <ControlPanel />
          </PlayProvider>
        </StepsFactoryProvider>
      </SlideProgressProvider>
    </StepsProgressProvider>
  </>;
};
