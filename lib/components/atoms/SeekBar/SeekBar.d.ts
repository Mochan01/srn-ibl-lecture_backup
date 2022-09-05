import { FC, Dispatch, SetStateAction } from "react";
export interface SeekBarProps {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
    onPointerDown?: (value: number) => void;
    onPointerUp?: (value: number) => void;
}
export interface SeekBarMemoProps extends SeekBarProps {
}
/**
 * https://www.radix-ui.com/docs/primitives/components/slider
 * @param param0
 * @returns
 */
export declare const SeekBar: FC<SeekBarProps>;
