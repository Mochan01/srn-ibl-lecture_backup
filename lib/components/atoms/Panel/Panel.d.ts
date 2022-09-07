import { FC } from "react";
import { MotionType } from "src-ibl-lecture-master/variable_types/StepType";
import { Children } from "../../../variable_types/Children";
export interface PanelProps {
    image?: string;
    motion1?: MotionType;
    motion2?: MotionType;
}
export declare const Panel: FC<PanelProps & Children>;
