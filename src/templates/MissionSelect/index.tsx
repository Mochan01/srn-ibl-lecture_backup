import React, { FC } from "react";
import { css } from "styled-components";
import { MissionSelectBase } from "./components/MissionSelectBase";
import { PresentedBy } from "../../elements/PresentedBy";
import { CommonProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Intro } from "src-ibl-lecture-master-unit/types";
import { ChildWrapperProps } from "../../features/LectureRoot/components";
import { NavigationButtonsProps } from "../../elements/NavigationButtons";

export interface MissionSelectProps
  extends CommonProps,
    NavigationButtonsProps,
    Pick<ChildWrapperProps, "onLastStep"> {}

export const MissionSelect: FC<MissionSelectProps> = ({
  unitName,
  unitTitle,
  missionSelect,
  onClick,
  onClose,
  onLastStep,
  data,
}) => {
  // introは1つしかないはずなので1番目をとる
  const jsonData: Intro[] = data.intro[0].steps as Intro[];
  return (
    <LectureRoot {...{ onLastStep, onClose, jsonData }} isPlaying={false}>
      <PresentedBy
        css={css`
          position: absolute;
          bottom: 20px;
          right: 62px;
        `}
      />
      <MissionSelectBase
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        `}
        {...{ unitName, unitTitle, missionSelect, onClick }}
      />
    </LectureRoot>
  );
};
