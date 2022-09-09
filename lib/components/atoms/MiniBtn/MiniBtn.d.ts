import { FC } from "react";
export declare const MINI_BUTTON_MUTATIONS: {
    readonly AGAIN_ON: string;
    readonly AGAIN_OFF: string;
    readonly NEXT_ON: string;
    readonly NEXT_OFF: string;
    readonly PREV_ON: string;
    readonly PREV_OFF: string;
    readonly PLAY_ON: string;
    readonly PLAY_OFF: string;
    readonly PAUSE_ON: string;
    readonly PAUSE_OFF: string;
    readonly LECTURE_END_ON: string;
    readonly LECTURE_END_OFF: string;
};
export interface MiniBtnProps {
    mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
    hoverMutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
    caption: string;
    onClick?: () => void;
}
export declare const MiniBtn: FC<MiniBtnProps>;
