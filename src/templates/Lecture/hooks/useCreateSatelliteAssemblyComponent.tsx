import React, { useMemo } from "react";
import {
  GetLectureData,
  getStepData,
} from "../../../features/LectureRoot/utils";
import { SatelliteAssembly } from "../../../features/SatelliteAssembly";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";
import { formatSlideStep } from "../../../utils";
import { MasterData as SpecialLectureData } from "../../../features/SatelliteAssembly/types";

const isSpecialLectureData = (
  data: Partial<SpecialLectureData>
): data is SpecialLectureData => {
  return Object.values(data).every((value) => value !== undefined);
};

/**
 * 生成：衛星組み立て画面のコンポーネント
 * @param getLectureData
 * @returns
 */
export const useCreateSatelliteAssemblyComponent = (
  getLectureData: GetLectureData,
  masterData: Partial<SpecialLectureData>
) => {
  const moveProgress = useMoveProgress();

  return useMemo(() => {
    const { next_steps } = getLectureData(getStepData);

    const selectedMissionID =
      typeof window !== "undefined" && localStorage.getItem("missionID");

    return (
      !!selectedMissionID &&
      isSpecialLectureData(masterData) && (
        <SatelliteAssembly
          {...{ selectedMissionID, masterData }}
          onClick={() =>
            next_steps.goto_step &&
            moveProgress(formatSlideStep(next_steps.goto_step))
          }
        />
      )
    );
  }, [moveProgress, getLectureData, masterData]);
};
