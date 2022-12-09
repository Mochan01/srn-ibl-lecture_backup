import React, { FC } from "react";
import { Radix } from "./Radix";
import { useSeekBar } from "../../hooks/useSeekBar";
import { useAutoMoveProgress } from "../../../../hooks";
import { useWatchStepEnd } from "../../../../hooks/useWatchStepEnd";

export interface SeekBarUntouchableProps {
  className?: string;
}

/**
 * シークバー（ユーザが操作できない、タイマーで進む）
 */
export const SeekBarUntouchable: FC<SeekBarUntouchableProps> = (props) => {
  const isStepEnd = useWatchStepEnd();
  useAutoMoveProgress(isStepEnd);
  const value = useSeekBar();
  return <Radix {...props} {...{ value }} />;
};
