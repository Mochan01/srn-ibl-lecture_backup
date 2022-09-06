import { FC } from "react";
export interface TitleProps {
    onClickSkip?: () => void;
    onClickClose?: () => void;
}
export declare const Title: FC<TitleProps>;
