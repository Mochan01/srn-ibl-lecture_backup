import { PanelProps } from "../components/atoms/Panel/Panel";
import { QuizAreaProps } from "../components/molecules/QuizArea/QuizArea";
export interface StepProps extends Required<QuizAreaProps>, Required<PanelProps> {
    stepProgress: number;
    sound: string;
    talking: "boy" | "teacher";
    duration: number;
    seekStart: number;
    isResultStep: boolean;
}
