import { FC } from "react";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";
export interface StudentProps {
    animation?: AnimationType;
    className?: string;
}
export declare const Student: FC<StudentProps>;
