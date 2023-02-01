import React, { FC } from "react";
import { Screen, SeekBar, ControlPanel } from "./components";
import styled from "styled-components";
import { MainComponentProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Lecture as LectureDataType } from "src-ibl-lecture-master-unit/types";
import data from "../../assets/data/unit06_master.json";

export interface LectureProps extends MainComponentProps {
  isPlaying?: boolean;
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
  onClickClose,
  unitName,
  unitTitle,
}) => {
  const lectureData: LectureDataType[] = data.lecture[0]
    .steps as LectureDataType[];
  return (
    <LectureRoot jsonData={lectureData} onClose={onClickClose}>
      <Wrapper>
        <Screen {...{ unitName, unitTitle }} />
        <SeekBar />
        <ControlPanel {...{ onLectureLeave }} />
      </Wrapper>
    </LectureRoot>
  );
};
