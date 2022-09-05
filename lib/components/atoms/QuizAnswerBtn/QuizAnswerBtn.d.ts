import { FC } from "react";
export declare const QUIZ_ANSWER_BTN: {
    readonly GRAY: "Answer_button_greyout.png";
    readonly RED: "Answer_button_select.png";
    readonly WHITE: "Answer_button.png";
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
