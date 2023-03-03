import React, { useMemo } from "react";
import {
  GetLectureData,
  getStepData,
} from "../../../features/LectureRoot/utils";
import { CountDown } from "../../../elements/CountDown";
import { useMoveProgress } from "../../../features/LectureRoot/hooks";
import { formatSlideStep } from "../../../utils";

/**
 * 生成：カウントダウンを表示するコンポーネント
 * @param getLectureData 
 * @returns 
 */
export const useCreateCountDownComponent = (getLectureData: GetLectureData) => {
  const moveProgress = useMoveProgress();
  return useMemo(() => {
    const { countdown, next_steps } = getLectureData(getStepData);
    return (
      !!countdown && (
        <CountDown
          css="margin: 10px 22px 0 0"
          initialTimeSeconds={countdown / 1000}
          onEnd={() => {
            next_steps.goto_step &&
              moveProgress(formatSlideStep(next_steps.goto_step));
          }}
        />
      )
    );
  }, [getLectureData, moveProgress]);
};
