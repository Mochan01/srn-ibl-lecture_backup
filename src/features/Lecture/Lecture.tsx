import React, { FC, useContext } from "react";
import { SeekBar } from "./components/SeekBar";
import {
  PlayStatusProviderContext,
  LectureProvider,
  ProgressProviderContext,
} from "../../stores";
import { Screen } from "./components/Screen";
import { ScaleWrapper } from "../../elements/ScaleWrapper";
import { Narration } from "../../elements/Narration";
import { ControlPanel, ControlBarProps } from "./components/ControlPanel";
import { useLecture } from "../../hooks";
import { Characters } from "../../elements/Characters";
import styled, { css } from "styled-components";
import { CloseBtn } from "../../elements/CloseBtn";
import { Container } from "../../elements/Container";
import { JsonData, MainComponentProps } from "../../types";
import { PlayStatusProviderProps } from "../../stores/providers";
import jsonData from "../../assets/data/lecture1.json";

export interface LectureProps
  extends ControlBarProps,
    MainComponentProps,
    Pick<PlayStatusProviderProps, "isPlaying"> {}

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

const Main: FC<LectureProps> = ({
  onClickPrev,
  onClickClose,
  unitName,
  unitTitle,
  className,
}) => {
  useLecture();
  const { state: playStatus } = useContext(PlayStatusProviderContext);
  const { state: progress } = useContext(ProgressProviderContext);
  return (
    <div {...{ className }}>
      {playStatus === "PLAYING" && (
        <Narration key={`${progress.slide}_${progress.step}`} />
      )}
      <ScaleWrapper>
        <Container>
          <Characters
            css={css`
              position: absolute;
              top: 50%;
              right: 0px;
              transform: translateY(-50%);
            `}
          />
          <CloseBtn
            css={css`
              position: absolute;
              top: 20px;
              right: 62px;
            `}
            onClick={onClickClose}
          />
          <Wrapper>
            <Screen {...{ unitName, unitTitle }} />
            <SeekBar />
            <ControlPanel {...{ onClickPrev }} />
          </Wrapper>
        </Container>
      </ScaleWrapper>
    </div>
  );
};

export const Lecture: FC<LectureProps> = ({
  json = jsonData as JsonData,
  isPlaying,
  ...props
}) => (
  <LectureProvider {...{ json, isPlaying }}>
    <Main {...props} />
  </LectureProvider>
);
