import { FC } from "react";
import { TitleBaseProps } from "../../atoms/TitleBase/TitleBase";
export interface TitleProps extends TitleBaseProps {
    data?: object;
    onClickSkip?: () => void;
    onClickClose?: () => void;
}
export declare const Title: FC<TitleProps>;
