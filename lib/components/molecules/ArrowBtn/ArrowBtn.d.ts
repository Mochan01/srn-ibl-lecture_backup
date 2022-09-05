import { FC } from "react";
export interface ArrowBtnProps {
    id?: string;
    $dir: "prev" | "next";
}
export declare const ArrowBtn: FC<ArrowBtnProps>;
