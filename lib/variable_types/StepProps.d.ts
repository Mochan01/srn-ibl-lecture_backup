import { PanelProps } from "../components/atoms/Panel/Panel";
import { QuizAreaProps } from "../components/molecules/QuizArea/QuizArea";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";
export interface StepProps extends Required<QuizAreaProps>, Required<PanelProps> {
    stepProgress: number;
    sound: string;
    duration: number;
    seekStart: number;
    isResultStep: boolean;
    speech: string;
    teacher: AnimationType;
    student: AnimationType;
}
