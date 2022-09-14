import { FC } from "react";
import { QuizProps } from "../../../variable_types/StepProps";
export interface QuizAreaProps extends QuizProps {
    onAnswer?: (isCorrect: boolean) => void;
}
export declare const QuizArea: FC<QuizAreaProps>;
