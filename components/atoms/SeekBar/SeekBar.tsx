import React, { FC, memo, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";

export interface SeekBarProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  onPointerDown?: (value: number) => void;
  onPointerUp?: (value: number) => void;
}

const StyledSlider = styled(SliderPrimitive.Root)`
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  &[data-orientation="horizontal"] {
    height: 20px;
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 20px;
    height: 100px;
  }
`;

const StyledTrack = styled(SliderPrimitive.Track)`
  background-color: red;
  position: relative;
  flex-grow: 1;
  border-radius: 9999px;
  &[data-orientation="horizontal"] { height: 3px; }
  &[data-orientation="vertical"] { width: 3px; }
`;

const StyledRange = styled(SliderPrimitive.Range)`
  position: absolute;
  background-color: #aaa;
  border-radius: 9999px;
  height: 100%;
`;

const StyledThumb = styled(SliderPrimitive.Thumb)`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  background-color: white;
  box-shadow: 0 2px 10px #000;
  border-radius: 10px;
  &:hover { background-color: pink; }
  &:focus { box-shadow: 0 0 0 5px #000; }
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
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
};
