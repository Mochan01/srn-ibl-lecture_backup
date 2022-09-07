import { FC } from "react";
export interface SeekBarControllerProps {
    points: number[];
    index: number;
    onPointerDown?: () => void;
    onPointerUp?: (nextProgress: number) => void;
}
export declare const SeekBarController: FC<SeekBarControllerProps>;
