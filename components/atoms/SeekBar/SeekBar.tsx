import React, { FC } from "react";
import styled from "styled-components";
import * as SliderPrimitive from '@radix-ui/react-slider';

export interface SeekBarProps {
}

interface MainProps {
}

const StyledSlider = styled(SliderPrimitive.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;
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

/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0 
 * @returns 
 */
export const SeekBar: FC<SeekBarProps> = ({
}) => {
  return (
    <form>
      <StyledSlider max={ 100 } step={ 1 } aria-label="Volume">
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </StyledSlider>
    </form>
  );
};
