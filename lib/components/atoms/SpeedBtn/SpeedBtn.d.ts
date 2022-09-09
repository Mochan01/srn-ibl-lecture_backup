import { FC } from "react";
export declare const SPEED_BUTTON_MUTATIONS: {
    readonly LEVEL1: string;
    readonly LEVEL2: string;
    readonly LEVEL3: string;
};
export interface SpeedBtnProps {
    mutation: typeof SPEED_BUTTON_MUTATIONS[keyof typeof SPEED_BUTTON_MUTATIONS];
    onClick?: () => void;
}
export declare const SpeedBtn: FC<SpeedBtnProps>;
