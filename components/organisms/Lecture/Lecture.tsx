import React, { FC } from "react";
import { Slider } from "../../molecules/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {

  const stepsFactory = new StepsFactory();

  return <>
    <Slider>
      { stepsFactory.slides.map(x => { return <>
        <Slide
          key={ x }
          steps={ stepsFactory.getStepsBySlide(x) }
        / >
      </>; }) }
    </Slider>
    <ControlPanel />
  </>;
};
