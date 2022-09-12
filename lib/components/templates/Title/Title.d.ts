import { FC } from "react";
import { TitleBaseProps } from "../../atoms/TitleBase/TitleBase";
export interface TitleProps {
    data?: object;
    unitName: TitleBaseProps["unitName"];
    unitTitle: TitleBaseProps["unitTitle"];
    onClickSkip?: () => void;
    onClickClose?: () => void;
}
export declare const Title: FC<TitleProps>;
