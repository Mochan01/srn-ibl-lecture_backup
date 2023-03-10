import React, { FC, Dispatch, useContext } from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { SIZE } from "../../../../data/SIZE";
import { GlobalDispatchContext } from "../../../../features/LectureRoot/providers";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface RadixProps {
  value: number;
  setValue?: Dispatch<number>;
  className?: string;
}

const SLIDER_H = 21;
const StyledSlider = styled(SliderPrimitive.Root)`
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: ${SIZE.W}px;
  background-color: #042f78;
  padding: 0 ${(SLIDER_H - SLIDER_H * 0.5) / 2}px;
  position: relative;
  &[data-orientation="horizontal"] {
    height: ${SLIDER_H}px;
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    width: ${SLIDER_H}px;
    height: 100px;
  }
`;

const StyledTrack = styled(SliderPrimitive.Track)`
  background: linear-gradient(to top, #b2b7c1, #fbfcfd);
  position: relative;
  flex-grow: 1;
  &[data-orientation="horizontal"] {
    height: ${SLIDER_H * 0.5}px;
  }
  &[data-orientation="vertical"] {
    width: 3px;
  }
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
  width: 32px;
  height: 32px;
  background-position: 0 -3699px;
  background-image: url(${ImageLecture});
  background-repeat: no-repeat;
`;

export interface RadixMemoProps extends RadixProps {}

/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0
 * @returns
 */
export const Radix: FC<RadixProps> = ({ value, setValue, ...props }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const handleValueChange = (nextValue: number[]) => {
    if (nextValue[0] >= 99) {
      dispatch({ type: "isMaxValue", val: true });
      return;
    }
    setValue && setValue(nextValue[0]);
    dispatch({ type: "isMaxValue", val: false });
  };

  return (
    <StyledSlider
      {...props}
      max={100}
      value={[value]}
      onValueChange={handleValueChange}
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  );
};
