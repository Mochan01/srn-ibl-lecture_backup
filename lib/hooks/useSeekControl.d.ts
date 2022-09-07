import { Dispatch, SetStateAction } from "react";
interface UseSeekControl {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    getClosest: () => number;
}
/**
 * control the seek bar
 * @param points fix position
 * @param index initial index in the points
 * @param fixBasis the basis of which the position of trigger to fix
 * @returns
 */
export declare const useSeekControl: (points: number[], index: number, fixBasis: "CENTER" | "EDGE") => UseSeekControl;
export {};
