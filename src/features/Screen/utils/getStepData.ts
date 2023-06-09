import { BuildStepData } from "./buildStepData";
import {
  ActionBtnData,
  LaunchData,
  ScreenData,
  ImageData,
  PopupBtnData,
  BuildImageDataReturn,
  BuildPopupBtnDataReturn,
  BuildActionDataReturn,
  PopupData,
  BuildPopupDataReturn,
  QuestionSelectData,
  buildQuestionInputData,
  ResultData,
} from "../types";

type GetSingleScreenDataFunc<U> = (lectureData: ScreenData) => U[];

type GetMultipleScreenDataFunc<T, U> = (
  lectureData: ScreenData
) => (buildStepData: BuildStepData<T>) => U[];

/**
 * 取得 画像のデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getImageStepData: GetMultipleScreenDataFunc<
  BuildImageDataReturn,
  ImageData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, images }) => {
    // 削除リストは、当該の行より後のものを参照する
    const deleteList = lectureData
      .filter((x) => x.progress.step > progress.step)
      .flatMap((x) => x.images.delete_files);

    // 削除リストを元に間引き
    const thinnedList = images.display_files.filter(
      (displayFile) => !deleteList.includes(displayFile)
    );

    return buildStepData(thinnedList, progress.step);
  });

/**
 * 取得 ポップアップのボタンのデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getPopupBtnStepData: GetMultipleScreenDataFunc<
  BuildPopupBtnDataReturn,
  PopupBtnData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, popup }) =>
    buildStepData(popup.popup_btns, progress.step)(popup)
  );

/**
 * 取得 アクションボタンのデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getActionBtnStepData: GetMultipleScreenDataFunc<
  BuildActionDataReturn,
  ActionBtnData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, actions, special_lecture }) =>
    buildStepData(
      actions.action_btns,
      progress.step
    )({ ...actions, ...special_lecture })
  );

/**
 * 取得 ポップアップのデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getPopupStepData: GetMultipleScreenDataFunc<
  BuildPopupDataReturn,
  PopupData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, popup }) =>
    buildStepData(popup.display_popup, progress.step)(popup)
  );

/**
 * 取得 打ち上げアニメーションのデータ
 * @param lectureData
 * @returns
 */
export const getLaunchData: GetSingleScreenDataFunc<LaunchData> = (
  lectureData
) => {
  return lectureData.flatMap(({ progress, special_lecture }) => ({
    depth: progress.step,
    launch_animation: special_lecture.launch_animation
  }));
};

/**
 * 取得 データ確認のデータ
 * @param lectureData
 * @returns
 */
export const getResultData: GetSingleScreenDataFunc<ResultData> = (
  lectureData
) => {
  return lectureData.flatMap(({ progress, special_lecture }) => ({
    depth: progress.step,
    display_result: special_lecture.display_result,
  }));
};

/**
 * 取得 クイズ 選択式
 * @param lectureData
 * @returns
 */
export const getQuestionSelect: GetSingleScreenDataFunc<QuestionSelectData> = (
  lectureData
) =>
  lectureData.flatMap(({ progress, question_select }) => ({
    depth: progress.step,
    question_select: question_select.button_1 ? question_select : void 0,
  }));

/**
 * 取得 クイズ 入力式
 * @param lectureData
 * @returns
 */
export const getQuestionInput: GetSingleScreenDataFunc<buildQuestionInputData> =
  (lectureData) =>
    lectureData.flatMap(({ progress, question_input }) => ({
      depth: progress.step,
      question_input: question_input.ans ? question_input : void 0,
    }));

/**
 * 該当するスライドのうち、現在のステップまでの要素を残す
 * @param slide
 * @param step
 * @param lectureData
 * @returns
 */
export const getLectureDataUpToStep = (
  slide: number,
  step: number,
  lectureData: ScreenData
) =>
  lectureData.filter(
    ({ progress }) => progress.slide === slide && progress.step <= step
  );

/**
 * 該当するスライドのうち、現在のステップのみの要素を残す
 * @param slide
 * @param step
 * @param lectureData
 * @returns
 */
export const getLectureDataAtStep = (
  slide: number,
  step: number,
  lectureData: ScreenData
) =>
  lectureData.filter(
    ({ progress }) => progress.slide === slide && progress.step === step
  );

/**
 * レクチャーのデータを生成する関数を返す
 * @param currentData
 * @param getScreenDataFunc
 * @returns
 */
export const createSingleScreenData =
  (currentData: ScreenData) =>
  <U>(getScreenDataFunc: GetSingleScreenDataFunc<U>) => {
    return getScreenDataFunc(currentData);
  };

/**
 * レクチャーのデータを生成する関数を返す
 * @param currentData
 * @param getScreenDataFunc
 * @param buildStepData
 * @returns
 */
export const createMultipleScreenData =
  (currentData: ScreenData) =>
  <T, U>(
    getScreenDataFunc: GetMultipleScreenDataFunc<T, U>,
    buildStepData: BuildStepData<T>
  ) => {
    return getScreenDataFunc(currentData)(buildStepData);
  };
