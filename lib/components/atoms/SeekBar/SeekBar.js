import React from "react";
import styled from "styled-components";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { SIZE } from "../../../data/SIZE";
const lecture_play_circle = new URL("../../../assets/lecture_play_circle.png", import.meta.url).toString();
const SLIDER_H = 12;
const StyledSlider = styled(SliderPrimitive.Root) `
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: ${SIZE.W}px;
  background-color: #042f78;
  padding: 0 2px;
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
const BAR_H = 6;
const StyledTrack = styled(SliderPrimitive.Track) `
  background: linear-gradient(to top, #b2b7c1, #fbfcfd);
  position: relative;
  flex-grow: 1;
  &[data-orientation="horizontal"] { height: ${BAR_H}px; }
  &[data-orientation="vertical"] { width: 3px; }
`;
const StyledRange = styled(SliderPrimitive.Range) `
  position: absolute;
  background: linear-gradient(to top, #05cff3, #a5ebfd);
  height: 100%;
`;
const THUMB_SIZE = 14;
const StyledThumb = styled(SliderPrimitive.Thumb) `
  all: unset;
  display: block;
  width: ${THUMB_SIZE}px;
  height: ${THUMB_SIZE}px;
  background-image: url(${lecture_play_circle});
  background-size: contain;
  background-repeat: no-repeat;
`;
/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0
 * @returns
 */
export const SeekBar = ({ value, setValue, onPointerDown = () => { }, onPointerUp = () => { } }) => {
    return (React.createElement(StyledSlider, { max: 100, value: [value], onValueChange: nextValue => setValue(nextValue[0]), onPointerDown: () => onPointerDown(value), onPointerUp: () => onPointerUp(value) },
        React.createElement(StyledTrack, null,
            React.createElement(StyledRange, null)),
        React.createElement(StyledThumb, null)));
};
//# sourceMappingURL=SeekBar.js.map