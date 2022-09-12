import { FC } from "react";
import { BubbleProps } from "../../atoms/Bubble/Bubble";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";
export interface CastProps extends BubbleProps {
    student: AnimationType;
    teacher: AnimationType;
}
export declare const Cast: FC<CastProps>;
