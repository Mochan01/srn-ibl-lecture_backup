import { useContext, useCallback, useState } from "react";
import {
  GlobalStateContext,
  GlobalDispatchContext,
  JsonDataProviderContext,
} from "../../../features/LectureRoot/providers";
import {
  handleJsonData,
  getSlideData,
} from "../../../features/LectureRoot/utils";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";

/**
 * シークバーの進捗操作
 * @param onTimeUp
 * @returns
 */
export const useSeekBarAction = () => {
  const [value, setValue] = useState(0);
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const lectureData = useContext(JsonDataProviderContext) as Lecture[];

  const moveProgress = useMoveProgress();

  const updateProgress = useCallback(() => {
    // シークバーが止まる位置を取得
    const getLectureData = handleJsonData(lectureData, progress);
    const slideData = getLectureData(getSlideData);
    const seekStarts = slideData.map((x) => x.audio.seekbar_start);

    // シークバーの位置がデータ上のスタート位置（seekbar_start）より前にいくことがあり、その場合はundefinedが返る
    let closest = seekStarts.filter((x) => x <= value).reverse()[0];
    // なので、ここで補正する
    closest = typeof closest === "number" ? closest : seekStarts[0];
    let step = seekStarts.indexOf(closest) + 1;

    // 結果発表ステップでは止まらないようにする
    // 結果発表ステップならその前の結果発表ステップじゃないステップに止める
    // https://www.notion.so/1ca89cdacc8a4907b2894b2c29d86ba8#28d778653c7641a8863de578b7bebe46
    // const stepData = getLectureData(getStepData);
    const dropStep = slideData.find((x) => x.progress.step === step);
    if (dropStep && dropStep.result_step) {
      const lastNormalStep = slideData
        .map((x) => x)
        .filter(({ progress }) => progress.step <= step)
        .reverse()
        .find((x) => !x.result_step);

      if (lastNormalStep) step = lastNormalStep.progress.step;
    }

    moveProgress({ ...progress, step });
    dispatch({ type: "timestamp" });
  }, [dispatch, lectureData, progress, value, moveProgress]);

  return { value, setValue, updateProgress };
};
