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
  const { isPlaying, progress } = useContext(GlobalStateContext);

  const data = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(data, progress);

  const { animation, narrative, audio } = getLectureData(getStepData);

  const { time } = useContext(TimerContext);
  const isBlink = useMemo(() => {
    if (!audio.mp3) return true;
    return time >= audio.time;
  }, [audio.mp3, audio.time, time]);

  return (
    <Main
      css={css`
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
      `}
      {...{ isPlaying }}
      studentDialog={narrative.speech}
      teacherAnimation={isBlink ? "animation_1" : animation.teacher}
      studentAnimation={isBlink ? "animation_1" : animation.student}
    />
  );
};
