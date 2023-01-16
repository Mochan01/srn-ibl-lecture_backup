import React, { FC } from "react";
import { NextBtn } from "./NextBtn";
import { PrevBtn } from "./PrevBtn";
import { PlayBtn } from "./PlayBtn";
import { ReplayBtn } from "./ReplayBtn";
import { PageBullet } from "./PageBullet";
import { SIZE } from "../../../../data/SIZE";
import styled from "styled-components";
const ImageLecture = new URL(
  "../../../../assets/prod/lecture_panel_answer.png",
  import.meta.url
).toString();

export interface ControlBarProps {
  onLectureLeave: (key: "begin" | "end") => void;
  className?: string;
}

/* lecture_panel.png */
const Main = styled.div`
  display: flex;
  width: ${SIZE.W}px;
  height: 95px;
  background-position: 0 -2009px;
  background-image: url(${ImageLecture});
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
`;

/**
 * コントロールパネル
 */
export const ControlPanel: FC<ControlBarProps> = ({
  onLectureLeave,
  className,
}) => {
  return (
    <Main {...{ className }}>
      <PageBullet />
      <PrevBtn
        onLeave={() => onLectureLeave("begin")}
        css="margin-left: 160px;"
      />
      <PlayBtn css="margin-left: 30px;" />
      <NextBtn onLeave={() => onLectureLeave("end")} css="margin-left: 30px;" />
      <ReplayBtn css="margin-left: 130px;" />
    </Main>
  );
};
