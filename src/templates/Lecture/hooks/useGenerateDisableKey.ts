import { useContext, useMemo } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  GlobalStateContext,
  JsonDataProviderContext,
} from "../../../features/LectureRoot/providers";
import {
  handleJsonData,
  getStepData,
} from "../../../features/LectureRoot/utils";

export const useGenerateDisableKey = () => {
  const { progress } = useContext(GlobalStateContext);
  const lectureData = useContext(JsonDataProviderContext) as Lecture[];

  return useMemo(() => {
    const getLectureData = handleJsonData(lectureData, progress);
    const { special_lecture } = getLectureData(getStepData);

    // 衛星組み立て画面の場合
    if (special_lecture.record_mission) return "full";

    // 特別レクチャーのうち、衛星組み立て画面以外の場合
    if (lectureData.find((x) => x.special_lecture.record_mission))
      return "some";

    return "none";
  }, [lectureData, progress]);
};
