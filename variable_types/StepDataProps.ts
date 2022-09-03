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

export interface StepDataProps extends QuizProps {
  stepProgress: number;
  image: string;
  sound: string;
  talking: "boy" | "teacher";
  duration: number;
}
