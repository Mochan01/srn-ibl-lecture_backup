import { FC } from "react";
export interface SeekBarAnimateProps {
    duration: number;
    onRunning?: (percentage: number) => void;
    percentage?: number;
}
/**
 * 等速直線運動するだけのシークバー
 * @param param0
 * @returns
 */
export declare const SeekBarAnimate: FC<SeekBarAnimateProps>;
