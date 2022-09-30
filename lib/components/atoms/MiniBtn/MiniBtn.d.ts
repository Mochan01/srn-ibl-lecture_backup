import { FC } from "react";
export declare const MINI_BUTTON_MUTATIONS: {
    readonly AGAIN_ON: "0 -2420px";
    readonly AGAIN_OFF: "0 -2356px";
    readonly NEXT_ON: "0 -2804px";
    readonly NEXT_OFF: "0 -2740px";
    readonly PREV_ON: "0 -3060px";
    readonly PREV_OFF: "0 -2996px";
    readonly PLAY_ON: "0 -2932px";
    readonly PLAY_OFF: "0 -2868px";
    readonly PAUSE_ON: "0 -3380px";
    readonly PAUSE_OFF: "0 -3316px";
    readonly LECTURE_END_ON: "0 -3380px";
    readonly LECTURE_END_OFF: "0 -3316px";
};
export interface MiniBtnProps {
    mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
    hoverMutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
    caption: string;
    onClick?: () => void;
}
export declare const MiniBtn: FC<MiniBtnProps>;
