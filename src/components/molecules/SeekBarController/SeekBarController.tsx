import React, { FC } from "react";
import { SeekBar } from "../../atoms/SeekBar/SeekBar";
import { useSeekControl } from "../../../hooks/useSeekControl";
import { StepProps } from "../../../variable_types/StepProps";

export interface SeekBarControllerProps {
  steps: StepProps[];
  index: number;
  className?: string;
  onPointerDown?: () => void;
  onPointerUp?: (next: StepProps) => void;
}

export const SeekBarController: FC<SeekBarControllerProps> = ({
  steps,
  index,
  className,
  onPointerDown = () => {},
  onPointerUp = () => {}
}) => {

  const { value, setValue, getClosest } = useSeekControl(steps, index, "EDGE");

  return (
    <SeekBar
      onPointerUp={ () => onPointerUp(getClosest()) }
      { ...{ value, setValue, onPointerDown, className } }
    />
  );
};
