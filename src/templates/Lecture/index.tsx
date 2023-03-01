import React, { FC } from "react";
import { Screen, SeekBar, ControlPanel } from "./components";
import styled from "styled-components";
import { CommonProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Lectures } from "src-ibl-lecture-master-unit/types";

export interface LectureProps extends CommonProps<Lectures> {
  onLectureLeave: (key: "begin" | "end") => void;
}

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
}) => {
  const jsonData = data as Lectures;
  return (
    <LectureRoot {...{ onClose, jsonData }}>
      <Wrapper>
        <Screen {...{ unitName, unitTitle }} />
        <ControlPanel {...{ onLectureLeave }} />
      </Wrapper>
    </LectureRoot>
  );
};
