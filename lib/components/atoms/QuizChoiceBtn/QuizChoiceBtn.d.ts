import { FC } from "react";
export declare const QUIZ_CHOICE_BTN: {
    readonly ORANGE: string;
    readonly WHITE: string;
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
