import { Dispatch, SetStateAction } from "react";
import { StepProps } from "../variable_types/StepProps";
interface UseSeekControl {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    getClosest: () => StepProps;
}
/**
 * control the seek bar
 * @param points fix position
 * @param index initial index in the points
 * @param fixBasis the basis of which the position of trigger to fix
 * @returns
 */
export declare const useSeekControl: (steps: StepProps[], index: number, fixBasis: "CENTER" | "EDGE") => UseSeekControl;
export {};
