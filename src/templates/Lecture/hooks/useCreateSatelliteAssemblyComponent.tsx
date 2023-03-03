import React, { useMemo } from "react";
import {
  GetLectureData,
  getStepData,
} from "../../../features/LectureRoot/utils";
import { SatelliteAssembly } from "../../../features/SatelliteAssembly";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";
import { formatSlideStep } from "../../../utils";
import masterData from "../../../assets/data/satellite_assembly_mock.json";
import { MasterData } from "../../../features/SatelliteAssembly/types";

/**
 * 生成：衛星組み立て画面のコンポーネント
 * @param getLectureData 
 * @returns 
 */
export const useCreateSatelliteAssemblyComponent = (
  getLectureData: GetLectureData
) => {
  const moveProgress = useMoveProgress();

  return useMemo(() => {
    const { next_steps } = getLectureData(getStepData);

    const selectedMissionID =
      typeof window !== "undefined" && localStorage.getItem("missionID");
    return (
      !!selectedMissionID && (
        <SatelliteAssembly
          {...{ selectedMissionID }}
          masterData={masterData as MasterData}
          onClick={() =>
            next_steps.goto_step &&
            moveProgress(formatSlideStep(next_steps.goto_step))
          }
        />
      )
    );
  }, [moveProgress, getLectureData]);
};
