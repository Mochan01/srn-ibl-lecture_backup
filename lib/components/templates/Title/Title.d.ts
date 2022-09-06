import { FC } from "react";
export interface TitleProps {
    data?: object;
    onClickSkip?: () => void;
    onClickClose?: () => void;
}
export declare const Title: FC<TitleProps>;
