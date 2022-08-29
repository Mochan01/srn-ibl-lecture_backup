import React, { FC, memo } from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useSeekBar } from "../../../hooks/useSeekBar";

export interface SeekBarProps {
}

const StyledSlider = styled(SliderPrimitive.Root)`
  position: relative;
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

export interface SeekBarMemoProps {
  value: number;
  onValueChange: (nextValue: number[]) => void;
  onPointerUp: () => void;
}

/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0 
 * @returns 
 */
const SeekBarMemo: FC<SeekBarMemoProps> = memo(({
  value,
  onValueChange,
  onPointerUp
}) => {
  return (
    <StyledSlider
      max={ 100 }
      value={ [value] }
      onValueChange={ onValueChange }
      onClick={ onPointerUp }
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
});

export const SeekBar: FC = () => {

  const { seekValue, onValueChange, onPointerUp } = useSeekBar();

  return (
    <SeekBarMemo
      value={ seekValue }
      onValueChange={ onValueChange }
      onPointerUp={ onPointerUp }
    />
  );
};
