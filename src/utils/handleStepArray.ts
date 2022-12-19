import { StepType } from "src-ibl-lecture-master/types/stepType";

type Callback<T> = (data: StepType[]) => T;

/**
 * step（配列）のデータを受け取る
 * さらに受け取ったコールバックを実行する
 * @param data
 * @returns
 */
export const handleStepArray =
  (data: StepType[]) =>
  <T>(callback: Callback<T>): T =>
    callback(data);

/**
 * ステップの数を取得
 * @param data 
 * @returns 
 */
export const getLength: (steps: StepType[]) => number = (data: StepType[]) => {
  return data.length;
};

export const getSeekStarts: (
  steps: StepType[]
) => StepType["audio"]["seekbar_start"][] = (data: StepType[]) => {
  return data.map((x) => x.audio.seekbar_start);
};
