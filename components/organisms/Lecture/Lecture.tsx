import React, { FC } from "react";
import { Slider } from "../../molecules/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { StepsFactoryProvider } from "../../providers/StepsFactoryProvider/StepsFactoryProvider";
import { SlideProgressProvider } from "../../providers/SlideProgressProvider/SlideProgressProvider";
import { StepsProgressProvider } from "../../providers/StepsProgressProvider/StepsProgressProvider";
import { PauseProvider } from "../../providers/PauseProvider/PauseProvider";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {

  const stepsFactory = new StepsFactory();

  return <>
    <StepsProgressProvider>
      <SlideProgressProvider>
        <StepsFactoryProvider stepsFactory={ stepsFactory }>
          <PauseProvider>
            <Slider>
              { stepsFactory.slides.map(x => (
                <Slide key={ x } steps={ stepsFactory.getStepPropsBySlide(x) } />
              )) }
            </Slider>
            <ControlPanel />
          </PauseProvider>
        </StepsFactoryProvider>
      </SlideProgressProvider>
    </StepsProgressProvider>
  </>;
};
