import { FC } from "react";
import { StepProps } from "../../../variable_types/StepProps";
export interface SeekBarControllerProps {
    steps: StepProps[];
    index: number;
    onPointerDown?: () => void;
    onPointerUp?: (next: StepProps) => void;
}
export declare const SeekBarController: FC<SeekBarControllerProps>;
