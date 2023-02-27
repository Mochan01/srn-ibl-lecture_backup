import React, { FC, useContext, useMemo } from "react";
import styled from "styled-components";
import { SeekBar } from "../SeekBar";
import { ControlButtons } from "../ControlButtons";
import { Lecture } from "src-ibl-lecture-master-unit/types";
import {
  GlobalStateContext,
  JsonDataProviderContext,
} from "../../../../features/LectureRoot/providers";
import {
  handleJsonData,
  getStepData,
} from "../../../../features/LectureRoot/utils";

export interface ControlBarProps {
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
}

/* lecture_panel.png */
const Main = styled.div``;

/**
 * コントロールパネル
 */
export const ControlPanel: FC<ControlBarProps> = ({
  onLectureLeave,
  className,
}) => {
  const { progress } = useContext(GlobalStateContext);

  const lectureData = useContext(JsonDataProviderContext) as Lecture[];
  const getLectureData = handleJsonData(lectureData, progress);

  const { special_lecture } = getLectureData(getStepData);

  const disableKey = useMemo(() => {
    // 衛星組み立て画面の場合
    if (special_lecture.record_mission) {
      return "some";
    }
    // 特別レクチャーの場合
    if (
      special_lecture.mission_select.length !== 0 ||
      special_lecture.launch_key ||
      special_lecture.display_result
    ) {
      return "full";
    }
    return "none";
  }, [special_lecture]);

  return (
    <Main {...{ className }}>
      <SeekBar isActive={disableKey === "none"} />
      <ControlButtons disableKey={disableKey} {...{ onLectureLeave }} />
    </Main>
  );
};
