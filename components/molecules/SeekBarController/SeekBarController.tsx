import React, { FC } from "react";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { useSeekControl } from "../../../hooks/useSeekControl";

export interface SeekBarControllerProps {
  points: number[];
  index: number;
  onPointerDown?: () => void;
  onPointerUp?: (nextProgress: number) => void;
}

export const SeekBarController: FC<SeekBarControllerProps> = ({
  points,
  index,
  onPointerDown = () => {},
  onPointerUp = () => {}
}) => {

  const { value, setValue, getClosest } = useSeekControl(points, index, "EDGE");

  return (
    <SeekBar
      onPointerUp={ () => {
        const closest = getClosest();
        onPointerUp(points.indexOf(closest));
      } }
      { ...{ value, setValue, onPointerDown } }
    />
  );
};
