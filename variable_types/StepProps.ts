import { PanelProps } from "../components/atoms/Panel/Panel";

/**
 * 解答画面用
 */
export interface QuizProps {
  questions: string[];
  correctIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface StepProps extends QuizProps, Required<PanelProps> {
  stepProgress: number;
  sound: string;
  talking: "boy" | "teacher";
  duration: number;
  seekStart: number;
  isResultStep: boolean;
}
