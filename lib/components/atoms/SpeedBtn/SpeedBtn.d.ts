import { FC } from "react";
export declare const SPEED_BUTTON_MUTATIONS: {
    readonly LEVEL1: "0 -3124px";
    readonly LEVEL2: "0 -3188px";
    readonly LEVEL3: "0 -3252px";
};
export interface SpeedBtnProps {
    mutation: typeof SPEED_BUTTON_MUTATIONS[keyof typeof SPEED_BUTTON_MUTATIONS];
    onClick?: () => void;
}
export declare const SpeedBtn: FC<SpeedBtnProps>;
