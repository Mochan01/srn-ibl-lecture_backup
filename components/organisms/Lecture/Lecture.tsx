import React, { FC } from "react";
import { Slider } from "../../molecules/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { Context } from "../../providers/Context/Context";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {

  const stepsFactory = new StepsFactory();

  return <>
    <Context stepsFactory={ stepsFactory }>
      <Slider>
        { stepsFactory.slides.map(x => (
          <Slide key={ x } steps={ stepsFactory.getStepPropsBySlide(x) } />
        )) }
      </Slider>
      <ControlPanel />
    </Context>
  </>;
};
