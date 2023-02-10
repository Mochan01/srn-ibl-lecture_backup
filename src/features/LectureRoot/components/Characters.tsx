import React, { FC, useContext } from "react";
import { Characters as Main } from "../../../elements/Characters";
import { css } from "styled-components";
import { GlobalStateContext, JsonDataProviderContext } from "../providers";
import { handleJsonData, getStepData } from "../utils";
import { Lecture } from "src-ibl-lecture-master-unit/types";

export const Characters: FC = () => {
  const { isPlaying, progress } = useContext(GlobalStateContext);

  const data = useContext(JsonDataProviderContext) as Lecture[];
  const getJsonData = handleJsonData(data, progress);

  const { animation, narrative } = getJsonData(getStepData);

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
      teacherAnimation={animation.teacher}
      studentAnimation={animation.student}
    />
  );
};
