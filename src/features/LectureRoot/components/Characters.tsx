import React, { FC, useContext, useMemo } from "react";
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

  const data = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(data, progress);

  const { animation, narrative, audio } = getLectureData(getStepData);

  // timeが0のときは、音声が流れていないので、口パクを止める
  const { time } = useContext(TimerContext);
  const isSync = useMemo(() => time >= audio.time, [audio.time, time]);

  return (
    <Main
      css={css`
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
      `}
      isPlaying={time !== 0 && !isSync}
      studentDialog={narrative.speech}
      teacherAnimation={animation.teacher}
      studentAnimation={animation.student}
    />
  );
};
