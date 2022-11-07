import { StepType } from "src-ibl-lecture-master/variable_types/StepType";
import _ from "lodash";

type Callback<T> = (data: StepType[]) => T;

/**
 * step（配列）のデータを受け取る
 * さらに受け取ったコールバックを実行する
 * @param data
 * @returns
 */
export const handleStepArray =
  (data: StepType | StepType[]) =>
  <T>(callback: Callback<T>): T => {
    if (!Array.isArray(data)) return;
    return callback(data);
  };

/**
 * そのスライドのステップ画像をすべて返す
 * @param data
 * @returns
 */
export const getPics: (steps: StepType[]) => string[] = (data: StepType[]) => {
  const result = _.compact(data.map((x) => x.image.display_file));
  return result.length ? result : void 0;
};

/**
 * そのスライドのクイズをすべて返す
 * @param data
 * @returns
 */
export const getQuestions: (steps: StepType[]) => Array<StepType["question"]> =
  (data: StepType[]) => {
    let result = data.map((x) => x.question);
    result = result.filter((x) => x.button_1); // button_1がないなら回答ステップではないことにする
    return result.length ? result : void 0;
  };

export const getLength: (steps: StepType[]) => number = (data: StepType[]) => {
  return data.length;
};

export const getSeekStarts: (
  steps: StepType[]
) => StepType["audio"]["seekbar_start"][] = (data: StepType[]) => {
  return data.map((x) => x.audio.seekbar_start);
};
