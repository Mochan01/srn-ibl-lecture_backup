import React, { FC, useCallback, useContext } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  JsonDataProviderContext,
  GlobalStateContext,
  TimerContext,
} from "../../../features/LectureRoot/providers";
import { UnitInfo } from "../../../types/unitInfo";
import { Screen as Main } from "../../../features/Screen";
import { formatSlideStep } from "../../../utils";
import { LectureFrame } from "../../../elements/LectureFrame";
import {
  handleJsonData,
  getStepData,
} from "../../../features/LectureRoot/utils";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";
import { MasterData as SpecialLectureData } from "../../../features/SatelliteAssembly/types";
import {
  useCreateCountDownComponent,
  useCreateSatelliteAssemblyComponent,
} from "../hooks";

export interface ScreenProps extends UnitInfo {
  specialLectureData: Partial<SpecialLectureData>;
}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = ({ specialLectureData, ...props }) => {
  const { progress } = useContext(GlobalStateContext);
  const moveProgress = useMoveProgress();

  const screenData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(screenData, progress);

  const { next_steps, special_lecture } = getLectureData(getStepData);

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

  const countDown = useCreateCountDownComponent(getLectureData);
  const satelliteAssembly = useCreateSatelliteAssemblyComponent(
    getLectureData,
    specialLectureData
  );

  const { time } = useContext(TimerContext);

  return (
    <LectureFrame {...{ ...props, ...{ countDown } }}>
      {/** 衛星組み立て画面 */}
      {special_lecture.display_assembly && satelliteAssembly}
      {/** 通常のレクチャー */}
      {!special_lecture.display_assembly && specialLectureData.result_list && (
        <Main
          {...{ ...progress, ...{ onAnswer, actionGoTo, screenData } }}
          resultList={specialLectureData.result_list}
          isStart={time > 0}
        />
      )}
    </LectureFrame>
  );
};
