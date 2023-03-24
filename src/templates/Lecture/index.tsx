import React, { FC } from "react";
import {
  Screen,
  ControlPanel,
  ControlPanelProps,
  ScreenProps,
} from "./components";
import styled, { css } from "styled-components";
import { CommonProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Lectures } from "src-ibl-lecture-master-unit/types";
import { PresentedBy2 } from "../../elements/PresentedBy2";

export interface LectureProps
  extends CommonProps<Lectures>,
    ControlPanelProps,
    Pick<ScreenProps, "specialLectureData"> {}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;

export const Lecture: FC<LectureProps> = ({
  onLectureLeave,
  onClose,
  unitName,
  unitTitle,
  data,
  slideTransitionsData,
  specialLectureData,
}) => {
  const jsonData = data as Lectures;
  return (
    <LectureRoot {...{ onClose, jsonData }}>
      <Wrapper>
        <PresentedBy2
          css={css`
            position: absolute;
            bottom: 3px;
            right: -245px;
          `}
        />
        <Screen {...{ unitName, unitTitle, specialLectureData }} />
        <ControlPanel {...{ onLectureLeave, slideTransitionsData }} />
      </Wrapper>
    </LectureRoot>
  );
};
