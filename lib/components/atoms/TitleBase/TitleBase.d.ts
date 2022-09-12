import { FC } from "react";
export interface TitleBaseProps {
    unitName: string;
    unitTitle: string;
    onClick: () => void;
}
export declare const TitleBase: FC<TitleBaseProps>;
