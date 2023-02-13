import React, { FC, useContext } from "react";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  JsonDataProviderContext,
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../features/LectureRoot/providers";
import { UnitInfo } from "../../../types/UnitInfo";
import { Screen as Main } from "../../../features/Screen";
import { formatSlideStep } from "../../../utils";
import { LectureFrame } from "../../../elements/LectureFrame";
import { CountDown } from "../../../elements/CountDown";
import {
  handleJsonData,
  getStepData,
} from "../../../features/LectureRoot/utils";

export interface ScreenProps extends UnitInfo {}

/**
 * スライドの画面部分
 */
export const Screen: FC<ScreenProps> = (props) => {
  const { progress } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const { countdown, next_steps } = getLectureData(getStepData);

  // クイズ回答時の処理
  const onAnswer = (isCorrect: boolean) => {
    if (!next_steps.if_correct || !next_steps.if_wrong) {
      console.error("Undefined: 'if_correct' or 'if_wrong'");
      return;
    }

    dispatch({
      type: "progress",
      val: formatSlideStep(
        isCorrect ? next_steps.if_correct : next_steps.if_wrong
      ),
    });
  };

  // アクションボタンを押したときの処理
  const actionGoTo = (value: string) => {
    dispatch({ type: "progress", val: formatSlideStep(value) });
  };

  const countDown = countdown && (
    <CountDown
      css="margin: 10px 22px 0 0"
      initialTimeSeconds={countdown / 1000}
      onEnd={() => {
        next_steps.goto_step &&
          dispatch({
            type: "progress",
            val: formatSlideStep(next_steps.goto_step),
          });
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
