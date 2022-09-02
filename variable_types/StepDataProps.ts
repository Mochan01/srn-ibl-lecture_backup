
/**
 * 男の子解説用
 */
export interface BoySpeechProps {
  boySpeechDuration: number;
}

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

export interface StepDataProps extends BoySpeechProps, QuizProps {
  stepProgress: number;
  image: string;
  sound: string;
}
