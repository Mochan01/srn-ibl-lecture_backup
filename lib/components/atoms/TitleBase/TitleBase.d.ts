import { FC } from "react";
export interface TitleBaseProps {
    unitName: string;
    unitTitle: string;
    onClickStart?: () => void;
    onClickSkip?: () => void;
    className?: string;
}
export declare const TitleBase: FC<TitleBaseProps>;
