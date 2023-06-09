import React, { FC } from "react";
import { css } from "styled-components";
import { MissionSelectBase } from "./components/MissionSelectBase";
import { PresentedBy } from "../../elements/PresentedBy";
import { CommonProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Mission } from "src-ibl-lecture-master-unit/types";
import { ChildWrapperProps } from "../../features/LectureRoot/components";

export interface MissionSelectProps
  extends CommonProps<Mission[]>,
    Pick<ChildWrapperProps, "onLastStep"> {
  onClick: (goto: string) => void;
}

export const MissionSelect: FC<MissionSelectProps> = ({
  unitName,
  unitTitle,
  data,
  onClick,
  onClose,
  onLastStep,
}) => {
  const jsonData: Mission[] = data;
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
        {...{ unitName, unitTitle, data, onClick }}
      />
    </LectureRoot>
  );
};
