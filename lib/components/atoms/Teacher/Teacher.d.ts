import { FC } from "react";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";
export interface TeacherProps {
    animation?: AnimationType;
    className?: string;
}
export declare const Teacher: FC<TeacherProps>;
