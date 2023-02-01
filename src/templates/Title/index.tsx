import React, { FC } from "react";
import { css } from "styled-components";
import { TitleBase } from "./components/TitleBase";
import { PresentedBy } from "./components/PresentedBy";
import { MainComponentProps } from "../../types";
import { LectureRoot } from "../../features/LectureRoot";
import { Intro } from "src-ibl-lecture-master-unit/types";
import data from "../../assets/data/unit06_master.json";

export interface TitleProps extends MainComponentProps {
  onClickSkip?: () => void;
}

export const Title: FC<TitleProps> = ({
  unitName,
  unitTitle,
  onClickSkip = () => {},
  onClickClose = () => {},
}) => {
  const lectureData: Intro[] = data.intro[0].steps as Intro[];
  return (
    <LectureRoot
      jsonData={lectureData}
      onClose={onClickClose}
      isPlaying={false}
    >
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
