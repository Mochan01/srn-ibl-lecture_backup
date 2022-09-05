import { FC } from "react";
export declare const MINI_BUTTON_MUTATIONS: {
    readonly PREVIOUS_ON: "lecture_button_previous_on.png";
    readonly PREVIOUS_OFF: "lecture_button_previous_off.png";
    readonly AGAIN_ON: "lecture_button_again_on.png";
    readonly AGAIN_OFF: "lecture_button_again_off.png";
    readonly NEXT_ON: "lecture_button_next_on.png";
    readonly NEXT_OFF: "lecture_button_next_off.png";
    readonly PREV_ON: "lecture_button_previous_on.png";
    readonly PREV_OFF: "lecture_button_previous_off.png";
    readonly PLAY_ON: "lecture_button_play_on.png";
    readonly PLAY_OFF: "lecture_button_play_off.png";
};
export interface MiniBtnProps {
    mutation: typeof MINI_BUTTON_MUTATIONS[keyof typeof MINI_BUTTON_MUTATIONS];
    caption: string;
    onClick?: () => void;
}
export declare const MiniBtn: FC<MiniBtnProps>;
