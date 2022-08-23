import React, { FC, useEffect, useState } from "react";
import { Slider } from "../../molecules/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { StepsFactory } from "../../../factories/StepsFactory";
import { ControlPanel } from "../../molecules/ControlPanel/ControlPanel";
import { useManageProgress } from "../../../hooks/useManageProgress";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {

  const stepsFactory = new StepsFactory();
  const [progress, setProgress] = useManageProgress();

  useEffect(() => {
    const slide = progress.slide;
    const seekBarStarts = stepsFactory.getSeekBarStartsBySlide(slide);
  }, [progress]);

  return <>
    <Slider
      onChange={ slide => setProgress({ slide }) }
    >
      { stepsFactory.slides.map(x => ( <Slide
          key={ x }
          steps={ stepsFactory.getStepPropsBySlide(x) }
          onChange={ step => setProgress({ step }) }
        / > )) }
    </Slider>
    <ControlPanel points={ [20] } />
  </>;
};
