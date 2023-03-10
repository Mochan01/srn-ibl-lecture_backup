import React, { FC, useContext } from "react";
import { Characters as Main } from "../../../elements/Characters";
import { css } from "styled-components";
import {
  GlobalStateContext,
  JsonDataProviderContext,
  TimerContext,
} from "../providers";
import { handleJsonData, getStepData } from "../utils";
import { Lecture } from "src-ibl-lecture-master-unit/types";

export const Characters: FC = () => {
  const { progress } = useContext(GlobalStateContext);
  // timeが0のときは、音声が流れていないので、口パクを止める
  const { time } = useContext(TimerContext);

  const data = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(data, progress);

  const { animation, narrative } = getLectureData(getStepData);

  return (
    <Main
      css={css`
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
      `}
      isPlaying={time !== 0}
      studentDialog={narrative.speech}
      teacherAnimation={animation.teacher}
      studentAnimation={animation.student}
    />
  );
};
