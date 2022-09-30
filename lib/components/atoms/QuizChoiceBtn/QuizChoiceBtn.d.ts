import { FC } from "react";
export declare const QUIZ_CHOICE_BTN: {
    /**
     * Question_button_select.png
     */
    readonly ORANGE: "0 -3774px";
    /**
     * Question_button.png
     */
    readonly WHITE: "0 -3854px";
};
export declare const QUIZ_SIGN: {
    /**
     * Correct.png
     */
    readonly CORRECT: "0 -3636px";
    /**
     * Wrong.png
     */
    readonly INCORRECT: "0 -3934px";
};
export interface QuizChoiceBtnProps extends MainProps {
    children: string;
    onClick?: () => void;
}
interface MainProps {
    mutation: typeof QUIZ_CHOICE_BTN[keyof typeof QUIZ_CHOICE_BTN];
    isCorrect?: boolean;
}
export declare const QuizChoiceBtn: FC<QuizChoiceBtnProps>;
export {};
