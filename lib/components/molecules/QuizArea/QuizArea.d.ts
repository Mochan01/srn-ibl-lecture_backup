import { FC } from "react";
export interface QuizAreaProps extends MainProps {
    questions: string[];
    correctIndex: number;
}
interface MainProps {
    $x: number;
    $y: number;
    $width: number;
    $height: number;
}
export declare const QuizArea: FC<QuizAreaProps>;
export {};
