import React, { FC } from "react";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { useSeekControl } from "../../../hooks/useSeekControl";
import { StepProps } from "../../../variable_types/StepProps";

export interface SeekBarControllerProps {
  steps: StepProps[];
  index: number;
  onPointerDown?: () => void;
  onPointerUp?: (next: StepProps) => void;
}

export const SeekBarController: FC<SeekBarControllerProps> = ({
  steps,
  index,
  onPointerDown = () => {},
  onPointerUp = () => {}
}) => {

  const { value, setValue, getClosest } = useSeekControl(steps, index, "EDGE");

  return (
    <SeekBar
      onPointerUp={ () => onPointerUp(getClosest()) }
      { ...{ value, setValue, onPointerDown } }
    />
  );
};
