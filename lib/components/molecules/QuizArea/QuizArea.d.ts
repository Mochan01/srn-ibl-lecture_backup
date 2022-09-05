import { FC } from "react";
import { StepProps } from "../../../variable_types/StepProps";
export interface QuizAreaProps extends ContainerProps {
    questions: StepProps["questions"];
    correctIndex: StepProps["correctIndex"];
}
interface ContainerProps {
    x?: StepProps["x"];
    y?: StepProps["y"];
    width?: StepProps["width"];
    height?: StepProps["height"];
    touchedEnable: boolean;
}
export declare const QuizArea: FC<QuizAreaProps>;
export {};
