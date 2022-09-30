import { FC } from "react";
export declare const QUIZ_ANSWER_BTN: {
    /**
     * Answer_button_greyout.png
     */
    readonly GRAY: "0 -3444px";
    /**
     * Answer_button_select.png
     */
    readonly RED: "0 -3508px";
    /**
     * Answer_button.png
     */
    readonly WHITE: "0 -3572px";
};
export interface QuizAnswerBtnProps extends MainProps {
    mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
    onClick?: () => void;
}
interface MainProps {
    mutation: typeof QUIZ_ANSWER_BTN[keyof typeof QUIZ_ANSWER_BTN];
}
export declare const QuizAnswerBtn: FC<QuizAnswerBtnProps>;
export {};
