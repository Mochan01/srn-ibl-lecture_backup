import React, { FC, useCallback, useContext } from "react";
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

export interface ScreenProps extends UnitInfo {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  const { progress } = useContext(GlobalStateContext);
  const moveProgress = useMoveProgress();

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const { countdown, next_steps } = getLectureData(getStepData);

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
    (value: string) => moveProgress(formatSlideStep(value)),
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

  return (
    <LectureFrame {...props} {...{ countDown }}>
      <Main
        {...progress}
        {...{ onAnswer, actionGoTo }}
        screenData={lectureData}
      />
    </LectureFrame>
  );
};
