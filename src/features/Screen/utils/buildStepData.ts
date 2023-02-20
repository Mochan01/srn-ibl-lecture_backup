import {
  BuildPopupBtnDataReturn,
  BuildImageDataReturn,
  BuildActionDataReturn,
  BuildPopupDataReturn,
} from "../types";

export type BuildStepData<T> = (arr: string[], depth: number) => T;

/**
 * 画像のステップデータを作成する関数
 * @param arr
 * @param depth
 * @returns
 */
export const buildImageStepData: BuildStepData<BuildImageDataReturn> = (
  arr,
  depth
) => arr.map((src) => ({ src, depth }));

/**
 * ポップアップのステップデータを作成する関数
 * @param arr
 * @param depth
 * @returns
 */
export const buildPopupStepData: BuildStepData<BuildPopupDataReturn> =
  (arr, depth) =>
  ({ popup_narration }) =>
    arr.map((src, i) => ({ src, depth, narration: popup_narration[i] }));

/**
 * ポップアップボタンのステップデータを作成する関数
 * @param arr
 * @param depth
 * @returns
 */
export const buildPopupBtnStepData: BuildStepData<BuildPopupBtnDataReturn> =
  (arr, depth) =>
  ({ popup_x, popup_y, display_popup }) =>
    arr.map((src, i) => ({
      src,
      x: popup_x[i],
      y: popup_y[i],
      depth,
      popupName: display_popup[i],
    }));

/**
 * アクションボタンのステップデータを作成する関数
 * @param arr
 * @param depth
 * @returns
 */
export const buildActionBtnStepData: BuildStepData<BuildActionDataReturn> =
  (arr, depth) =>
  ({ action_x, action_y, action_goto, mission_select }) =>
    arr.map((src, i) => ({
      src,
      x: action_x[i],
      y: action_y[i],
      depth,
      actionGoto: action_goto[i],
      missionID: mission_select && mission_select[i],
    }));
