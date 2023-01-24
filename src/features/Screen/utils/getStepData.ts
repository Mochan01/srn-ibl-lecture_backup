import { ActionBtnData, LectureData } from "../types";
import { BuildStepData } from "./buildStepData";
import {
  ImageData,
  PopupBtnData,
  BuildImageDataReturn,
  BuildPopupBtnDataReturn,
  BuildActionDataReturn,
  PopupData,
  BuildPopupDataReturn,
  QuestionSelectData,
  buildQuestionInputData,
} from "../types";

type GetSingleLectureDataFunc<U> = (lectureData: LectureData) => U[];

type GetMultipleLectureDataFunc<T, U> = (
  lectureData: LectureData
) => (buildStepData: BuildStepData<T>) => U[];

/**
 * 取得 画像のデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getImageStepData: GetMultipleLectureDataFunc<
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
export const getPopupBtnStepData: GetMultipleLectureDataFunc<
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
export const getActionBtnStepData: GetMultipleLectureDataFunc<
  BuildActionDataReturn,
  ActionBtnData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, actions }) =>
    buildStepData(actions.action_btns, progress.step)(actions)
  );

/**
 * 取得 ポップアップのデータ
 * @param lectureData
 * @param buildStepData
 * @returns
 */
export const getPopupStepData: GetMultipleLectureDataFunc<
  BuildPopupDataReturn,
  PopupData
> = (lectureData) => (buildStepData) =>
  lectureData.flatMap(({ progress, popup }) =>
    buildStepData(popup.display_popup, progress.step)(popup)
  );

/**
 * 取得 クイズ 選択式
 * @param lectureData
 * @returns
 */
export const getQuestionSelect: GetSingleLectureDataFunc<QuestionSelectData> = (
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
export const getQuestionInput: GetSingleLectureDataFunc<buildQuestionInputData> =
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
export const getCurrentData = (
  slide: number,
  step: number,
  lectureData: LectureData
) =>
  lectureData.filter(
    ({ progress }) => progress.slide === slide && progress.step <= step
  );

/**
 * レクチャーのデータを生成する関数を返す
 * @param currentData
 * @param getLectureDataFunc
 * @returns
 */
export const createSingleLectureData =
  (currentData: LectureData) =>
  <U>(getLectureDataFunc: GetSingleLectureDataFunc<U>) => {
    return getLectureDataFunc(currentData);
  };

/**
 * レクチャーのデータを生成する関数を返す
 * @param currentData
 * @param getLectureDataFunc
 * @param buildStepData
 * @returns
 */
export const createMultipleLectureData =
  (currentData: LectureData) =>
  <T, U>(
    getLectureDataFunc: GetMultipleLectureDataFunc<T, U>,
    buildStepData: BuildStepData<T>
  ) => {
    return getLectureDataFunc(currentData)(buildStepData);
  };
