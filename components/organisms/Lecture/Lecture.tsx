import React, { FC } from "react";
import { Slider } from "../../atoms/Slider/Slider";
import { Slide } from "../../molecules/Slide/Slide";
import { steps } from "../../../data/mock";

export interface LectureProps {
}

export const Lecture: FC<LectureProps> = ({
}) => {
  return (
    <>
      <Slider
        slides={ [
          <Slide currentStep={ 1 } steps={ steps } / >,
          <Slide currentStep={ 2 } steps={ steps } / >,
          <Slide currentStep={ 3 } steps={ steps } / >
        ] }
      />
    </>
  );
};
