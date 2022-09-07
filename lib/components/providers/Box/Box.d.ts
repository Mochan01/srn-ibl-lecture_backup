import { AllHTMLAttributes, ElementType, FC, ReactNode } from "react";
import { CSSProperties, Interpolation } from "styled-components";
import { DeviceProps } from "../../../data/customMedia";
declare type Sx = Interpolation<CSSProperties>;
export interface BoxProps {
    as?: ElementType;
    sx?: Sx;
    when?: DeviceProps<Sx>;
    children?: ReactNode;
}
/**
 * A generic component that can pass Style as props.
 * @param param0
 * @returns
 */
export declare const Box: FC<BoxProps & AllHTMLAttributes<HTMLElement>>;
export {};
