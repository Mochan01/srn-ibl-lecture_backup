import { FC } from "react";
export declare const QUIZ_CHOICE_BTN: {
    readonly ORANGE: "Question_button_select.png";
    readonly WHITE: "Question_button.png";
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
