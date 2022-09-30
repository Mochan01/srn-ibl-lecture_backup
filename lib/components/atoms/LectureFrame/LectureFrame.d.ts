import { FC } from "react";
import { Children } from "../../../variable_types/Children";
export interface LectureFrameProps extends Children {
    unitName: string;
    unitTitle: string;
}
export declare const LectureFrame: FC<LectureFrameProps>;
