import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../../atoms/ArrowBtn/ArrowBtn";
import { Paginate } from "../../atoms/Paginate/Pagenate";
import { classNames } from "../../../data/ClassNames";
import { SeekBar, SeekBarProps } from "../../atoms/SeekBar/SeekBar";
import { UseAllProgress } from "../../../hooks/useManageProgress";
import { StepsFactory } from "../../../factories/StepsFactory";

export interface ControlPanelProps {
  stepsFactory: StepsFactory;
  progress: UseAllProgress;
}

const Main = styled.div`
`;

export const ControlPanel: FC<ControlPanelProps> = ({
  stepsFactory,
  progress
}) => {

  const [points, setPoints] = useState<SeekBarProps["points"]>([0]);

  useEffect(() => {
    const slide = progress.slide;
    const points = stepsFactory.getSeekBarStartsBySlide(slide);
    setPoints(points)
  }, [progress]);

  return (
    <>
      <Main>
        <SeekBar
          points={ points }
          onChange={ () => {} }
        />
        <ArrowBtn id={ classNames.arrowPrev } dir="prev" />
        <ArrowBtn id={ classNames.arrowNext } dir="next" />
        <Paginate id={ classNames.paginate } />
      </Main>
    </>
  );
};
