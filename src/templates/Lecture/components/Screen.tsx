import React, { FC, useCallback, useContext, useMemo } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  JsonDataProviderContext,
  GlobalStateContext,
} from "../../../features/LectureRoot/providers";
import { UnitInfo } from "../../../types/unitInfo";
import { Screen as Main } from "../../../features/Screen";
import { formatSlideStep } from "../../../utils";
import { LectureFrame } from "../../../elements/LectureFrame";
import { CountDown } from "../../../elements/CountDown";
import {
  handleJsonData,
  getStepData,
} from "../../../features/LectureRoot/utils";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";
import { SatelliteAssembly } from "../../../features/SatelliteAssembly";
import masterData from "../../../assets/data/satellite_assembly_mock.json";
import { MasterData } from "../../../features/SatelliteAssembly/types";

export interface ScreenProps extends UnitInfo {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  const { progress } = useContext(GlobalStateContext);
  const moveProgress = useMoveProgress();

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const { countdown, next_steps, special_lecture } =
    getLectureData(getStepData);

  // クイズ回答時の処理
  const onAnswer = useCallback(
    (isCorrect: boolean) => {
      const nextStep = isCorrect ? next_steps.if_correct : next_steps.if_wrong;
      nextStep
        ? moveProgress(formatSlideStep(nextStep))
        : console.error("Undefined: 'if_correct' or 'if_wrong'");
    },
    [next_steps, moveProgress]
  );

  // アクションボタンを押したときの処理
  const actionGoTo = useCallback(
    (actionGoto: string, missionID?: string) => {
      moveProgress(formatSlideStep(actionGoto));
      // 衛星組み立て画面のために、missionIDがあれば保存
      missionID && localStorage.setItem("missionID", missionID);
    },
    [moveProgress]
  );

  const countDown = countdown && (
    <CountDown
      css="margin: 10px 22px 0 0"
      initialTimeSeconds={countdown / 1000}
      onEnd={() => {
        next_steps.goto_step &&
          moveProgress(formatSlideStep(next_steps.goto_step));
      }}
    />
  );

  // 衛星組み立て画面
  const satelliteAssembly = useMemo(() => {
    const selectedMissionID =
      typeof window !== "undefined" && localStorage.getItem("missionID");
    return (
      !!selectedMissionID && (
        <SatelliteAssembly
          {...{ selectedMissionID }}
          masterData={masterData as MasterData}
        />
      )
    );
  }, []);

  return (
    <LectureFrame {...props} {...{ countDown }}>
      {/** 衛星組み立て画面 */}
      {special_lecture.record_mission && satelliteAssembly}
      {/** 通常のレクチャー */}
      {!special_lecture.record_mission && (
        <Main
          {...progress}
          {...{ onAnswer, actionGoTo }}
          screenData={lectureData}
        />
      )}
    </LectureFrame>
  );
};
