import React, { FC } from "react";
import { css } from "styled-components";
import { TitleBase } from "./components/TitleBase";
import { CommonProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Intro } from "src-ibl-lecture-master-unit/types";
import { ChildWrapperProps } from "../../features/LectureRoot/components";
import { PresentedBy } from "../../elements/PresentedBy";

export interface TitleProps
  extends CommonProps<Intro[]>,
    Pick<ChildWrapperProps, "onLastStep"> {
  onClickSkip?: () => void;
}

export const Title: FC<TitleProps> = ({
  unitName,
  unitTitle,
  onClickSkip,
  onClose,
  onLastStep,
  data,
}) => {
  // introは1つしかないはずなので1番目をとる
  const jsonData: Intro[] = data;
  return (
    <LectureRoot {...{ onLastStep, onClose, jsonData }} isPlaying={false}>
      <PresentedBy
        css={css`
          position: absolute;
          bottom: 20px;
          right: 62px;
        `}
      />
      <TitleBase
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        `}
        {...{ unitName, unitTitle, onClickSkip }}
      />
    </LectureRoot>
  );
};
