import React, { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { SIZE } from "../../../data/SIZE";
const ImageLecture = new URL("../../../assets/prod/lecture_panel_answer.png", import.meta.url).toString();

export interface SeekBarProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  className?: string;
  onPointerDown?: (value: number) => void;
  onPointerUp?: (value: number) => void;
}

const SLIDER_H = 21;
const StyledSlider = styled(SliderPrimitive.Root)`
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: ${ SIZE.W }px;
  background-color: #042f78;
  padding: 0 ${ (SLIDER_H - SLIDER_H * .5) / 2 }px;
  position: relative;
  &[data-orientation="horizontal"] {
    height: ${ SLIDER_H }px;
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    width: ${ SLIDER_H }px;
    height: 100px;
  }
`;

const StyledTrack = styled(SliderPrimitive.Track)`
  background: linear-gradient(to top, #b2b7c1, #fbfcfd);
  position: relative;
  flex-grow: 1;
  &[data-orientation="horizontal"] { height: ${ SLIDER_H * .5 }px; }
  &[data-orientation="vertical"] { width: 3px; }
`;

const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background: linear-gradient(to top, #05cff3, #a5ebfd);
  height: 100%;
`;

/**
 * lecture_play_circle.png
 */
const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: ${ SLIDER_H }px;
  height: ${ SLIDER_H }px;
  background-position: 0 -2232px;
  background-image: url(${ ImageLecture });
  background-repeat: no-repeat;
`;

export interface SeekBarMemoProps extends SeekBarProps {
}

/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0 
 * @returns 
 */
export const SeekBar: FC<SeekBarProps> = ({
  value,
  setValue,
  className,
  onPointerDown = () => {},
  onPointerUp = () => {}
}) => {
  return (
    <StyledSlider
      max={ 100 }
      value={ [value] }
      onValueChange={ nextValue => setValue(nextValue[0]) }
      onPointerDown={ () => onPointerDown(value) }
      onPointerUp={ () => onPointerUp(value) }
      { ...{ className } }
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
};
