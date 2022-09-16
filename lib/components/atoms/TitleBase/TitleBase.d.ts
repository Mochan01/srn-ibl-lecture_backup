import { FC } from "react";
export interface TitleBaseProps {
    unitName: string;
    unitTitle: string;
    onClick: () => void;
    className?: string;
}
export declare const TitleBase: FC<TitleBaseProps>;
