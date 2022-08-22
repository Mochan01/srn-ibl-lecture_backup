import React, { FC, useEffect } from "react";
import { Slider } from "../../atoms/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {
  const stepsFactory = new StepsFactory();

  const slides = stepsFactory.slides.map(x => {
    return <>
      <Slide
        key={ x }
        steps={ stepsFactory.getStepsBySlide(x) }
      / >
    </>;
  });

  return <Slider slides={ slides } />;
};
