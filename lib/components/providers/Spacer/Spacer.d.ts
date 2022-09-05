import { FC, ReactNode } from "react";
import { DeviceProps } from "../../../data/customMedia";
export interface SpacerProps {
    size?: number;
    children?: ReactNode;
    axis?: "vertical" | "horizontal";
    when?: DeviceProps<number>;
}
/**
 * For opening a space.
 * @param param0
 * @returns
 */
export declare const Spacer: FC<SpacerProps>;
