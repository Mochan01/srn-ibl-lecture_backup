import { PanelProps } from "../components/atoms/Panel/Panel";
import { AnimationType } from "src-ibl-lecture-master/variable_types/StepType";
export interface QuizProps {
    questions: string[];
    correctIndex: number;
    $x: number;
    $y: number;
    $width: number;
    $height: number;
}
export interface StepProps extends QuizProps, Required<PanelProps> {
    stepProgress: number;
    sound: string;
    duration: number;
    seekStart: number;
    isResultStep: boolean;
    speech: string;
    teacher: AnimationType;
    student: AnimationType;
}
