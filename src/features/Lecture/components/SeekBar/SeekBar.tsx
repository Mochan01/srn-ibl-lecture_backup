import React, { FC, useContext, useState } from "react";
import { Radix } from "./Radix";
import { useSeekBarAutoPlay, useSeekBarAction } from "../../hooks";
import { useAutoMoveProgress } from "../../../../hooks";
import { useWatchStepEnd } from "../../../../hooks/useWatchStepEnd";
import { GlobalDispatchContext } from "../../../../stores/providers";

export interface SeekBarProps {
  className?: string;
}

/**
 * シークバー
 */
export const SeekBar: FC<SeekBarProps> = (props) => {
  const isStepEnd = useWatchStepEnd();
  useAutoMoveProgress(isStepEnd);

  const { value: usrValue, setValue, updateProgress } = useSeekBarAction();
  const autoValue = useSeekBarAutoPlay();

  const [isPointerDown, setIsPointerDown] = useState(false);
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
    <div {...props} {...{ onPointerDown, onPointerUp }}>
      <Radix {...{ setValue }} value={isPointerDown ? usrValue : autoValue} />
    </div>
  );
};
