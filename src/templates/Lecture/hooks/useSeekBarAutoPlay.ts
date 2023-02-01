import { useContext, useState, useEffect } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  GlobalStateContext,
  TimerContext,
  JsonDataProviderContext,
} from "../../../features/LectureRoot/providers";
import { getStepData, handleJsonData, getSlideData } from "../../../features/LectureRoot/utils";

/**
 * シークバーの進捗操作
 * @param onTimeUp
 * @returns
 */
export const useSeekBarAutoPlay = () => {
  const { progress } = useContext(GlobalStateContext);
  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  // そのスライドの一番最後のステップのデータを取得
  const slideData = getLectureData(getSlideData);
  const { audio: lastAudio } = slideData[slideData.length - 1];

  // 現在のステップのデータを取得する
  const { audio: currentAudio } = getLectureData(getStepData);

  const { time } = useContext(TimerContext);
  const [value, setValue] = useState(0);
  useEffect(() => {
    // 現在位置を計算して表示
    const currentTime = currentAudio.total_time - currentAudio.time + time;
    setValue((currentTime / lastAudio.total_time) * 100);
  }, [time, currentAudio, lastAudio, setValue]);

  return value;
};
