import React, { FC, useContext, useState } from "react";
import { Radix } from "./Radix";
import { useSeekBarAutoPlay, useSeekBarAction } from "../../hooks";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../../features/LectureRoot/providers";
import styled from "styled-components";

export interface SeekBarProps {
  className?: string;
  isActive?: boolean;
}

const Main = styled.div<Pick<SeekBarProps, "isActive">>`
  pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "none")};
  filter: ${({ isActive }) => (isActive ? "none" : "grayscale(100%)")};
`;
/**
 * シークバー
 */
export const SeekBar: FC<SeekBarProps> = ({ isActive = true, ...props }) => {
  const { value: usrValue, setValue, updateProgress } = useSeekBarAction();
  const autoValue = useSeekBarAutoPlay();

  const [isPointerDown, setIsPointerDown] = useState(false);
  const { isMaxValue } = useContext(GlobalStateContext);

  const dispatch = useContext(GlobalDispatchContext);
  const onPointerDown = () => {
    setIsPointerDown(true);
    dispatch({ type: "isPlaying", val: false });
  };
  const onPointerUp = () => {
    updateProgress();
    setIsPointerDown(false);
    dispatch({ type: "isPlaying", val: true });
  };

  return (
    <Main isActive={isActive} {...props} {...{ onPointerDown, onPointerUp }}>
      <Radix
        {...{ setValue }}
        value={
          isActive
            ? isMaxValue
              ? 100
              : isPointerDown
              ? usrValue
              : autoValue
            : 0
        }
      />
    </Main>
  );
};
