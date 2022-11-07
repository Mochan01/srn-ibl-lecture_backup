import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import _ from "lodash";

type Callback<T> = (data: StepType) => T;

/**
 * stepのデータを受け取る
 * さらに受け取ったコールバックを実行する
 * @param data
 * @returns
 */
export const handleStep =
  (data: StepType | StepType[]) =>
  <T>(callback: Callback<T>): T => {
    if (Array.isArray(data)) return;
    return callback(data);
  };

/**
 * questionsがあるstepなら4択の問題文を返す
 * @param step
 * @returns
 */
export const getQuestion: Callback<string[]> = (data: StepType) => {
  const q = data.question as StepType["question"];
  const result = _.compact([q.button_1, q.button_2, q.button_3, q.button_4]);
  return result.length ? result : void 0;
};

/**
 * 当該stepは結果発表ステップか？
 * @param data
 * @returns
 */
export const getIsResultStep: Callback<StepType["question"]["is_result_step"]> =
  (data: StepType) => {
    return data.question.is_result_step;
  };

/**
 * クイズで正解だった時のために、次に進むステップを取得する
 * @param data
 * @returns
 */
export const getNextStepIfCorrect: Callback<number> = (data: StepType) => {
  return Number(data.next_steps.if_correct.split("_")[1]);
};

/**
 * クイズで不正解だった時のために、次に進むステップを取得する
 * @param data
 * @returns
 */
export const getNextStepIfWrong: Callback<number> = (data: StepType) => {
  return Number(data.next_steps.if_wrong.split("_")[1]);
};

/**
 * アニメーションの種類を取得（先生）
 * @param data 
 * @returns 
 */
export const getTeacherAnimation: Callback<StepType["animation"]["teacher"]> = (
  data: StepType
) => data.animation.teacher;

/**
 * アニメーションの種類を取得（生徒）
 * @param data 
 * @returns 
 */
export const getStudentAnimation: Callback<StepType["animation"]["student"]> = (
  data: StepType
) => data.animation.student;

/**
 * 生徒のセリフを取得
 * @param data 
 * @returns 
 */
export const getStudentDialogue: Callback<StepType["narrative"]["speech"]> = (
  data: StepType
) => data.narrative.speech;

export const getAudioFileName: Callback<StepType["audio"]["mp3"]> = (
  data: StepType
) => {
  return data.audio.mp3;
};

export const getTotalTime: Callback<StepType["audio"]["total_time"]> = (
  data: StepType
) => {
  return data.audio.total_time;
};

export const getTime: Callback<StepType["audio"]["time"]> = (
  data: StepType
) => {
  return data.audio.time;
};

export const getSeekStart: Callback<StepType["audio"]["seekbar_start"]> = (
  data: StepType
) => {
  return data.audio.seekbar_start;
};
